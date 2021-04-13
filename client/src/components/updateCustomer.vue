<template>
    <div>
        <img src="@/assets/updatecustomer.png" width=750px heigth=150px alt="Update Customer">
        <b-form @submit.prevent="updateCustomer">
            
            <div id="image">
                <label for="customerID">Customer ID:</label>
                <b-form-input v-model="customer.customerID" id="customerID" disabled></b-form-input>
            </div>

            <div class="form-group">
                <label for="firstName">First Name:</label>
                <b-form-input v-model="customer.firstName" placeholder="Jane" id="firstName"></b-form-input>
                <span v-if="!$v.customer.firstName.required && $v.customer.firstName.$dirty" class="text-danger">First name is required</span>
                <span v-if="!$v.customer.firstName.alpha && $v.customer.firstName.$dirty" class="text-danger">First name must only contain alpha characters</span>
            </div>

            <div class="form-group">
                <label for="lastName">Last Name:</label>
                <b-form-input v-model="customer.lastName" placeholder="Doe" id="lastName"></b-form-input>
                <span v-if="!$v.customer.lastName.required && $v.customer.lastName.$dirty" class="text-danger">First name is required</span>
                <span v-if="!$v.customer.lastName.alpha && $v.customer.lastName.$dirty" class="text-danger">First name must only contain alpha characters</span>
            </div>

            <div class="form-group">
                <label for="phoneNumber">Phone Number:</label>
                <b-form-input v-model="customer.phoneNumber" placeholder="8325551212" id="phoneNumber"></b-form-input>
                <span v-if="(!$v.customer.phoneNumber.numeric ||!$v.customer.phoneNumber.minLength ||!$v.customer.phoneNumber.maxLength) && $v.customer.phoneNumber.$dirty" class="text-danger">Please enter a valid phone number</span>
                <span v-if="!$v.customer.phoneNumber.required && $v.customer.phoneNumber.$dirty" class="text-danger">Phone number is required.</span>
            </div>

            <div class="form-group">
                <label for="email">Email:</label>
                <b-form-input v-model="customer.email" placeholder="jdoe@example.com" id="email"></b-form-input>
            </div>

            <b-row align-h="center">
                <b-button class="darkmode-ignore" v-bind:to="'Customers'" variant="danger" type="submit">Cancel</b-button>
                <b-button class="darkmode-ignore" variant="success" type="submit">Submit</b-button>
            </b-row>
        </b-form>
    </div>
</template>

<script>
    import {required,minLength,maxLength,alpha,email,numeric} from "vuelidate/lib/validators";
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
        validations:{
            customer:{
                firstName: {
                required,
                alpha
                },
                lastName: {
                    required,
                    alpha
                },
                phoneNumber: {
                    required,
                    numeric,
                    minLength: minLength(10),
                    maxLength: maxLength(10)
                },
                email: {
                    email
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
    #image{
        display: flex;
        justify-content: center;
    }
</style>