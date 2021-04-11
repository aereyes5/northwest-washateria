<template>
    <div>
        <b-form-input placeholder="Search..." v-model="filter" type="search"></b-form-input>

        <b-button class="darkmode-ignore" v-bind:to="'new-report'" variant="primary">Report Generator</b-button>
        <b-button class="darkmode-ignore" v-bind:to="'new-invoice'" variant="success">Add New</b-button>
        <b-button class="darkmode-ignore" variant="secondary" v-on:click="setInvoiceID">Update</b-button>
        <b-button class="darkmode-ignore" variant="danger" v-on:click="deleteInvoice">Delete</b-button>
        <p v-if="status2" class="danger font-italic font-weight-bold text-danger text-center">
            {{status2}}
        </p>

        <b-table :items="invoices" :fields="fields" :filter="filter" :select-mode="selectMode" striped responsive="sm"
            ref="selectableTable" selectable hover @row-selected="onRowSelected" sticky-header="83vh" >
            <template #cell(show_details)="row">
                    <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                    {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
                    </b-button>
            </template>

            <template #row-details="row">
            <b-card>
                <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Employee: </b></b-col>
                <b-col>{{ row.item.employeeFirstName }} {{row.item.employeeLastName}}</b-col>
            </b-row>
            <b-row class="mb-2">
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

                  <!-- <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>QTY</b></b-col>
                <b-col sm="3" class="text-sm-right"><b>DESC</b></b-col>
                <b-col sm="3" class="text-sm-right"><b>AMT</b></b-col>
            </b-row>

            <b-row class="mb-2">
                <b-col>{{ row.item.quantity }}</b-col>
                <b-col>{{ row.item.product }}</b-col>
                <b-col>{{ row.item.productPrice }}</b-col>
            </b-row>

            <b-row class="mb-2">
                <b-col>1</b-col>
                <b-col>{{ row.item.service }}</b-col>
                <b-col>{{ row.item.servicePrice }}</b-col>
            </b-row>

            <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Payment Method: </b></b-col>
                <b-col>{{ row.item.paymentMethod }}</b-col>
            </b-row> -->
            </b-card>
        </template>
        </b-table>
        <!-- </b-table> -->

         
        <!-- <b-modal id="modal-scrollable" scrollable title="Customer Receipt">
            <img src="../assets/nwlogolong.png" style="width:100%; max-width:300px;" class="rounded mx-auto d-block">
            <br>
            <b-table
            :items="receipt.purchases"
            :fields="modalFields"
            ></b-table>
        </b-modal> -->
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
        }
    }
</script>

<style scoped>
#center {
  margin-left: auto;
  margin-right: auto;
}
</style>