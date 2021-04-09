<template>
    <div>
      
        <b-form-input placeholder="Search..." v-model="filter" type="search"></b-form-input>

        <b-button class="darkmode-ignore" v-bind:to="'new-invoice'" variant="success">Add New</b-button>
        <b-button class="darkmode-ignore" variant="secondary" v-on:click="setInvoiceID">Update</b-button>
        <b-button class="darkmode-ignore" variant="danger" v-on:click="deleteInvoice">Delete</b-button>

        <b-table 
         :items="invoices" 
         :fields="fields"
         :filter="filter"
         :select-mode="selectMode"
         striped responsive="sm"
         ref="selectableTable"
         selectable
         hover
         >
      <template #cell(show_details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
        </b-button>

      </template>

      
      
      <template #row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Employee ID:</b></b-col>
            <b-col>{{ row.item.employeeID }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>First Name:</b></b-col>
            <b-col>{{ row.item.firstName }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Last Name:</b></b-col>
            <b-col>{{ row.item.lastName }}</b-col>
          </b-row>

        </b-card>
      </template>
    </b-table>
    </div>
</template>

<script>
import services from '../services'
export default {
    name: "Invoices",
    data(){
        return{
            invoices: [],
            fields: ['date','customerFirstName', 'customerLastName', 'phoneNumber', 'product',
            'productPrice', 'quantity', 'service', 'servicePrice', 'totalPrice', 'paymentMethod',
            'show_details'],
            selectMode: 'single',
            selected: [],
            status2: "",
            filter:""
        }
    },
    
    methods: {
        getInvoices(){
            services.getInvoices().then(response => {
                this.invoices = response
                this.invoiceID = null
                console.log(this.invoices)
            }).catch(e => {
                console.log(e);
            })
        },

        deleteInvoice(){
            if(!Array.isArray(this.selected) || !this.selected.length){
                this.status2 = "Please select a record to delete";
            }
            else{
                this.status2 = "";
                services.deleteInvoice(this.selected[0].invoiceID)
                window.location.reload()
            }
        },

        onRowSelected(items){
            this.selected = items
            console.log(items)
        },

        getInvoiceByID(){
            if(this.invoiceID == null){
                this.status = "Please enter employee ID"
            }
            else{
                this.status = "";
                try{
                    services.getInvoiceByID(this.invoiceID).then(response => {
                        this.employees = response
                        console.log(this.employees)
                    })
                }catch(err){
                    console.log(err)
                }
            }
        },

        setInvoiceID(){
            if(!Array.isArray(this.selected) || !this.selected.length){
                this.status2 = "Please select a record to update"
            }
            else{
                this.updateInvoice(this.selected[0].invoiceID)
            }
        },

        updateInvoice(invoiceID){
            this.$store.commit('setInvoiceID', {invoiceID})
            this.$router.push({name: 'UpdateInvoices'})
        }
    },

    created(){
        this.getInvoices()
    }    

}
</script>