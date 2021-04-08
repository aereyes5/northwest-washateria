<template>
    <div>
      
        <b-form-input placeholder="Search..." v-model="filter" type="search"></b-form-input>

        <b-button v-bind:to="'new-invoice'" variant="success">Add New</b-button>
        <!-- <b-button variant="secondary" v-on:click="setEmployeeID">Update</b-button>
        <b-button variant="danger" v-on:click="deleteEmployee">Delete</b-button> -->

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
                console.log(this.invoices)
            })
        }
    },

    created(){
        this.getInvoices()
    }    

}
</script>