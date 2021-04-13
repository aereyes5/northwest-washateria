<template>
    <div>
            <img src="@/assets/Invoices.png" width=750px heigth=150px alt="Invoices">
            <br>
        <b-container fluid="md">
            <b-form-input placeholder="Search..." v-model="filter" type="search"></b-form-input>
            <p v-if="status2" class="danger font-italic font-weight-bold text-danger text-center">
                {{status2}}
            </p>

            <b-row>
                <b-col>
                    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
                </b-col>

                <b-col cols="12" md="8">
                <b-button-group>
                    <b-button class="darkmode-ignore" v-bind:to="'new-invoice'" variant="success">Add New</b-button>
                    <b-button class="darkmode-ignore" v-bind:to="'invoice-report'" variant="primary">Generate Reports</b-button>
                </b-button-group>
                </b-col>
            </b-row>

            <b-table :items="invoices" :fields="fields" :filter="filter" :select-mode="selectMode" striped responsive="sm"
                ref="selectableTable" selectable hover @row-selected="onRowSelected"
                :per-page="perPage" :current-page="currentPage">
                <template #cell(show_details)="row">
                        <b-button size="sm" @click="row.toggleDetails" class="mr-2, darkmode-ignore">
                        {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
                        </b-button>
                </template>

                <template #row-details="row">
                <b-card>
                    <b-row class="mb-2" id="text">
                    <b-col sm="3" class="text-sm-right"><b>Employee: </b></b-col>
                    <b-col>{{ row.item.employeeFirstName }} {{row.item.employeeLastName}}</b-col>
                </b-row>
                <b-row class="mb-2" id="text">
                    <b-col sm="3" class="text-sm-right"><b>Payment Method: </b></b-col>
                    <b-col>{{ row.item.paymentMethod }}</b-col>
                </b-row>
                    <table class="table" id="center">
                        <tr>
                            <th>QTY</th>
                            <th>DESC</th>
                            <th>AMT</th>
                        </tr>
                        <tr>
                            <td>{{ row.item.quantity }}</td>
                            <td>{{ row.item.product }}</td>
                            <td>{{ row.item.productPrice }}</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>{{ row.item.service }}</td>
                            <td>{{ row.item.servicePrice }}</td>
                        </tr>
                    </table>

                </b-card>
            </template>
            </b-table>
        </b-container>
        

    </div>
</template>

<script>
    import services from '../services'
    export default {
        name: "Invoices",
        data() {
            return {
                invoices: [],
                // fields:['date', 'firstName', 'lastName','total'],
                fields: ['date', 'customerFirstName', 'customerLastName', 'total', 'show_details'],
                // modalFields: ['qty', 'desc', 'amt'],
                selectMode: 'single',
                selected: [],
                status2: "",
                filter: "",
                receipt:{
                    employeeFirstName: null,
                    employeeLastName: null,
                    date: null,
                    purchases:[],
                    customer: null,
                    payment: null

                },
                perPage: 7,
                currentPage: 1,
                invoiceDate: null
            }
        },
        methods: {

            getReceipt(){
                 if (!Array.isArray(this.selected) || !this.selected.length) {
                    this.status2 = "Please select a record to update"
                }
                else{
                }

            },

            getProductsByDate(){
                try {
                    this.invoiceDate = this.$store.getters.getInvoice
                    services.getInvoiceProductsByDate(this.invoiceDate).then(response => {
                        this.receipt.purchases = response
                        console.log(this.receipt.purchases)
                    })
                } catch (err) {
                    console.log(err)
                }
            },

            getServicesByDate(){
                try {

                    services.getInvoiceServicesByDate(this.selected.date).then(response => {
                        this.receipt.purchases += response
                        console.log(this.receipt.purchases)
                    })
                } catch (err) {
                    console.log(err)
                }
            },



            getInvoices() {
                services.getInvoices().then(response => {
                    this.invoices = response
                    this.invoiceID = null
                    console.log(this.invoices)
                }).catch(e => {
                    console.log(e);
                })
            },
            deleteInvoice() {
                if (!Array.isArray(this.selected) || !this.selected.length) {
                    this.status2 = "Please select a record to delete";
                } else {
                    this.status2 = "";
                    services.deleteInvoice(this.selected[0].invoiceID)
                    window.location.reload()
                }
            },
            onRowSelected(items) {
                this.selected = items
                console.log(this.selected)
                this.storeInvoiceDate(this.selected.date)
                this.getProductsByDate()
            },


            storeInvoiceDate(invoiceDate){
                 this.$store.commit('invoiceDate', {invoiceDate})

            },
            getInvoiceByID() {
                if (this.invoiceID == null) {
                    this.status = "Please enter employee ID"
                } else {
                    this.status = "";
                    try {
                        services.getInvoiceByID(this.invoiceID).then(response => {
                            this.employees = response
                            console.log(this.employees)
                        })
                    } catch (err) {
                        console.log(err)
                    }
                }
            },
            setInvoiceID() {
                if (!Array.isArray(this.selected) || !this.selected.length) {
                    this.status2 = "Please select a record to update"
                } else {
                    this.updateInvoice(this.selected[0].invoiceID)
                }
            },
            updateInvoice(invoiceID) {
                this.$store.commit('setInvoiceID', {
                    invoiceID
                })
                this.$router.push({
                    name: 'UpdateInvoices'
                })
            }
        },
        created() {
            this.getInvoices()
        },
        computed: {
            rows(){
                return this.invoices.length
            }
        }
    }
</script>

<style scoped>
#center {
  margin-left: auto;
  margin-right: auto;

}

#text{
    text-align: center;
}

.pagination {
margin: 0px !important;
}
</style>