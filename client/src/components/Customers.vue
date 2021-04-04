<template>
  <div>
        <b-input-group class="mt-3">
            <b-form-input placeholder="Enter Customer's Phone Number" v-model="phoneNumber"></b-form-input>
            <b-input-group-append>
            <b-button variant="primary" v-on:click="getCustomerByPhone">Search</b-button>
            </b-input-group-append>
        </b-input-group>
        <p v-if="status" class="danger font-italic font-weight-bold text-danger text-center">
        {{status}}
        </p>


        <b-button v-bind:to="'NewCustomer'" variant="success">Add New</b-button>
        <b-button variant="secondary" v-on:click="setPhoneNumber">Update</b-button>
        <b-button variant="danger" v-on:click="deleteCustomer">Delete</b-button>

        <p v-if="status2" class="danger font-italic font-weight-bold text-danger text-center">
        {{status2}}
        </p>
      
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
            status: "",
            status2: ""
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
            if(!Array.isArray(this.selected) || !this.selected.length){
                this.status2 = "Please select a record to delete";
            }
            else{
                this.status2 = "";
                services.deleteCustomer(this.selected[0].customerID)
                window.location.reload()
            }
            
        },

        onRowSelected(items) {
        this.selected = items
        console.log(items)
      },

        //Retrieve Customer By Phone Number
        getCustomerByPhone(){
            if(this.phoneNumber == null){
                this.status = "Please enter customer's phone number";
            }
            else{
                this.status = "";
                try{
                services.getCustomerByPhone(this.phoneNumber).then(response => {
                    this.customers = response
                    console.log(this.customers)
                })
                }catch(err){
                    console.log(err)
                }
            }
            
        },

        setPhoneNumber(){
            if(!Array.isArray(this.selected) || !this.selected.length){
                this.status2 = "Please select a record to update";
            }
            else{
                this.updateCustomer(this.selected[0].phoneNumber)
            }
        },

        updateCustomer(phoneNumber){
            this.$store.commit('customerPhoneNumber', {phoneNumber})
            this.$router.push({name: 'UpdateCustomer'})
        }
    },

    created(){
        this.getCustomers()
    }
}
</script>

<style scoped>

</style>