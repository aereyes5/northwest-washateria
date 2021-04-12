<template>
    <div>
        <img src="@/assets/updatecustomer.png" width=750px heigth=150px alt="Update Customer">
        <b-form @submit.prevent="updateCustomer">
            <b-form-input v-model="customer.customerID" id="customerID" disabled></b-form-input>
            <b-form-input v-model="customer.firstName" placeholder="Enter First Name" id="firstName"></b-form-input>
            <b-form-input v-model="customer.lastName" placeholder="Enter Last Name" id="lastName"></b-form-input>
            <b-form-input v-model="customer.phoneNumber" placeholder="Enter Phone Number" id="phoneNumber">
            </b-form-input>
            <b-form-input v-model="customer.email" placeholder="Enter Email" id="email"></b-form-input>
            <b-button class="darkmode-ignore" variant="success" type="submit">Submit</b-button>
        </b-form>
        <b-button class="darkmode-ignore" v-bind:to="'customers'" variant="danger" type="submit">Cancel</b-button>
    </div>
</template>

<script>
    import services from '../services'
    export default {
        name: 'UpdateCustomer',
        data() {
            return {
                info: [],
                customer: {
                    customerID: null,
                    firstName: null,
                    lastName: null,
                    phoneNumber: null,
                    email: null
                }
            }
        },
        methods: {
            findCustomer() {
                this.customer.phoneNumber = this.$store.getters.getPhoneNumber
                this.getCustomerByPhone(this.customer.phoneNumber)
            },
            getCustomerByPhone(phoneNumber) {
                try {
                    services.getCustomerByPhone(phoneNumber).then(response => {
                        this.info = response
                        this.customer.customerID = this.info[0].customerID;
                        this.customer.firstName = this.info[0].firstName;
                        this.customer.lastName = this.info[0].lastName;
                        this.customer.phoneNumber = this.info[0].phoneNumber;
                        this.customer.email = this.info[0].email;
                    })
                } catch (err) {
                    console.log(err)
                }
            },
            updateCustomer() {
                services.updateCustomer(this.customer)
                this.$router.push({
                    name: 'Customers'
                })
            }
        },
        mounted() {
            this.findCustomer()
        }
    }
</script>

<style scoped>

</style>