<template>
    <div>
  <!--      <b-input-group class="mt-3">
            <b-form-input placeholder="Enter Customer's Phone Number" v-model="phoneNumber"></b-form-input>
            <b-input-group-append>
            <b-button variant="primary" v-on:click="getCustomerByPhone">Search</b-button>
            </b-input-group-append>
        </b-input-group>
        <p v-if="status" class="danger font-italic font-weight-bold text-danger text-center">
        {{status}}
        </p>


        <b-button variant="primary" v-on:click="getCustomers">View All</b-button>
        <b-button v-bind:to="'new-customer'" variant="success">Add New</b-button>
        <b-button variant="secondary" v-on:click="setPhoneNumber">Update</b-button>
        <b-button variant="danger" v-on:click="deleteCustomer">Delete</b-button>

        <p v-if="status2" class="danger font-italic font-weight-bold text-danger text-center">
        {{status2}}
        </p> -->
      
        <b-form-input placeholder="Search..." v-model="filter" type="search"></b-form-input>

        <b-button v-bind:to="'new-employee'" variant="success">Add New</b-button>
        <b-button variant="secondary" v-on:click="setEmployeeID">Update</b-button>
        <b-button variant="danger" v-on:click="deleteEmployee">Delete</b-button>

        <b-table 
         :items="invoices" 
         :fields="fields"
         :filter="filter"
         striped responsive="sm"
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


          
          <b-button  variant="secondary" size="sm" @click="row.toggleDetails">Edit</b-button>

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
            'status', 'show_details'],
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