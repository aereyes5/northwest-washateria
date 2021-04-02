<template>
  <div>
    <b-form @submit.prevent="addCustomer">
        <b-form-input v-model="customer.firstName" placeholder="Enter First Name"></b-form-input>
        <b-form-input v-model="customer.lastName" placeholder="Enter Last Name"></b-form-input>
        <b-form-input v-model="customer.phoneNumber" placeholder="Enter Phone Number"></b-form-input>
        <b-form-input v-model="customer.email" placeholder="Enter Email"></b-form-input>
        <b-button variant="primary" type="submit">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import services from '../services'
export default {
  name: "NewCustomer",
    data(){
        return{
            customer: {
              firstName: null,
              lastName: null,
              phoneNumber: null,
              email: null
            },
        }
    },
    methods: {
      async addCustomer(){
        try{
          const newCustomer = services.insertCustomer(this.customer).then(customer => {
          this.$router.push({name: 'Customers'})
          return customer
          }).catch((error) => {
              this.status = error
            })
          }catch(error){
            this.status = error
        }
        
      }

    }
}
</script>

