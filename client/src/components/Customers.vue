<template>
  <div>
      <b-form-input type="text" placeholder="Enter Customer Phone Number" v-model="phoneNumber"></b-form-input>
            <b-button variant="primary" type="button" @click="getCustomerByPhone">Search</b-button>
            <b-button v-bind:to="'NewCustomer'" variant="info">Add New</b-button>
            <b-button variant="danger" @click="deleteCustomer">Delete</b-button>
      <b-table
      :items="customers"
      :fields="fields"
      :select-mode="selectMode"
      responsive="sm"
      ref="selectableTable"
      selectable
      @row-selected="onRowSelected"
    >
      <!-- Example scoped slot for select state illustrative purposes -->
      <template #cell(selected)="{ rowSelected }">
        <template v-if="rowSelected">
          <span aria-hidden="true">&check;</span>
          <span class="sr-only">Selected</span>
        </template>
        <template v-else>
          <span aria-hidden="true">&nbsp;</span>
          <span class="sr-only">Not selected</span>
        </template>
      </template>
    </b-table>





 <!--       <div class="form-group w-50">
            <b-form-input type="text" placeholder="Enter Customer Phone Number" v-model="phoneNumber"></b-form-input>
            <b-button variant="primary" type="button" @click="getCustomerByPhone">Search</b-button>
      </div>
            <b-button v-bind:to="'NewCustomer'" variant="info">Add New</b-button>
        <b-table striped hover :items="customers">
            <thead>
                <tr>
                    <th>Customer ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in customers" :key="index">
                    <td>{{item.firstName}}</td>
                    <td>{{item.lastName}}</td>
                    <td>{{item.phoneNumber}}</td>
                    <td>{{item.email}}</td>
                </tr>
            </tbody>
        </b-table> -->
    </div>

</template>

<script>
import services from '../services'
export default {
    name: "Customers",
    data(){
        return{
            customers: [],
            fields: ['selected', 'customerID','firstName', 'lastName', 'phoneNumber', 'email'],
            selectMode: 'single',
            selected: [],
            phoneNumber: null,
        }
    },
    methods: {
        getCustomers(){
            services.getCustomers().then(response => {
                this.customers = response
                console.log(this.customers)
            })
            .catch(e => {
                console.log(e);
            });
        },

        deleteCustomer(){
            services.deleteCustomer(this.selected.customerID)
            this.getCustomers()
        },

        onRowSelected(items) {
        this.selected = items
        console.log(items)
      }

              // //Retrieve Customer By Phone Number
        // getCustomerByPhone(){
        //     try{
        //         services.getCustomerByPhone(this.phoneNumber).then(response => {
        //             this.customers = response.data
        //         })
        //     }catch(err){
        //         console.log(err)
        //     }
        // },
    },

    created(){
        this.getCustomers()
    }
}
</script>

<style scoped>

</style>