<template>
    <div>
        <b-form @submit.prevent="UpdateOrder">
        <b-form-input v-model="customer.customerID" id="productOrderID" disabled></b-form-input>
        <b-form-input v-model="customer.firstName" placeholder="Enter First Name" id="orderDate"></b-form-input>
        <b-form-input v-model="customer.lastName" placeholder="Enter Last Name" id="productID"></b-form-input>
        <b-form-input v-model="customer.phoneNumber" placeholder="Enter Phone Number" id="orderQuantity"></b-form-input>
        <b-form-input v-model="customer.email" placeholder="Enter Email" id="orderTotalPrice"></b-form-input>
        <b-form-input v-model="customer.email" placeholder="Enter Email" id="vendorID"></b-form-input>
        <b-form-input v-model="customer.email" placeholder="Enter Email" id="vendorStatusID"></b-form-input>
        <b-button class="darkmode-ignore" variant="primary" type="submit">Submit</b-button>
    </b-form>
            <b-button class="darkmode-ignore" v-bind:to="'customers'" variant="primary" type="submit">Cancel</b-button>
    </div>
</template>

<script>
import services from '../services'
export default {
    name: 'UpdateOrders',
    data(){
        return{
            info:[],
            orders:{
                productOrderID: null,
                orderDate: null,
                productID: null,
                orderQuantity: null,
                orderTotalPrice: null,
                vendorID: null,
                vendorStatusID: null
            }
            

        }
    },
    
    methods: {
        findCustomer(){
            this.customer.phoneNumber = this.$store.getters.getPhoneNumber
            this.getCustomerByPhone(this.customer.phoneNumber)

        },

        getCustomerByPhone(phoneNumber){
            try{
                services.getCustomerByPhone(phoneNumber).then(response => {
                    this.info = response
                    this.customer.customerID = this.info[0].customerID;
                    this.customer.firstName = this.info[0].firstName;
                    this.customer.lastName = this.info[0].lastName;
                    this.customer.phoneNumber = this.info[0].phoneNumber;
                    this.customer.email = this.info[0].email;

                    
                })
                }catch(err){
                    console.log(err)
                }
        },

        updateCustomer(){
            services.updateCustomer(this.customer)
            this.$router.push({name: 'Customers'})

        }
    },
    mounted(){
        this.findCustomer()
    }
}
</script>