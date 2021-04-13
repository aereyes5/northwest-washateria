<template>
    <div>
        <img src="@/assets/addinvoice.png" width=750px heigth=150px alt="Add Invoice">
        <b-container fluid="md">
            <b-form @submit.prevent="insertInvoice">

            <div class="form-group">
                <b-form-input v-model="invoice.customerFirstName" placeholder="Enter Customer's First Name" id="customerFirstName">
                </b-form-input>
                <span v-if="!$v.invoice.customerFirstName.required && $v.invoice.customerFirstName.$dirty" class="text-danger">Customer's first name is required</span>
                <span v-if="!$v.invoice.customerFirstName.alpha && $v.invoice.customerFirstName.$dirty" class="text-danger">Customer's first name must only contain alpha characters</span>
            </div>
           
            <div class="form-group">
                <b-form-input v-model="invoice.customerLastName" placeholder="Enter Customer's Last Name" id="customerLastName">
                </b-form-input>
                <span v-if="!$v.invoice.customerLastName.required && $v.invoice.customerLastName.$dirty" class="text-danger">Customer's last name is required</span>
                <span v-if="!$v.invoice.customerLastName.alpha && $v.invoice.customerLastName.$dirty" class="text-danger">Customer's last name must only contain alpha characters</span>
            </div>
            
            <div class="form-group">
                <b-form-input v-model="invoice.phoneNumber" placeholder="Enter Customer's Phone Number"
                    id="customerPhoneNumber"></b-form-input>
                <span v-if="!$v.invoice.phoneNumber.required && $v.invoice.phoneNumber.$dirty" class="text-danger">Customer's phone number is required</span>
                <span v-if="(!$v.invoice.phoneNumber.numeric ||!$v.invoice.phoneNumber.minLength ||!$v.invoice.phoneNumber.maxLength) && $v.invoice.phoneNumber.$dirty" class="text-danger">Please enter a valid phone number</span>
            </div>
            
            <div class="form-group">
                <b-row>
                    <b-col cols="14" md="10">
                         <b-form-select v-model="invoice.productName" :options="products" class="mb-3" value-field="productName"
                            text-field="productName" disabled-field="notEnabled" placeholder="Products" @change="newProduct"
                            :select-size="5">
                            <template #first>
                                <b-form-select-option value=null disabled>--Select Product--</b-form-select-option>
                            </template>                
                        </b-form-select>
                    </b-col>
                    <b-col align-self="center">
                        <label for="sb-inline">Product Quantity:</label>
                        <b-form-spinbutton v-model="invoice.productQuantity" id="sb-inline" placeholder="--" inline
                        @change="findProductTotal"></b-form-spinbutton>
                    </b-col>
                </b-row>
            </div>
            
            

            <div class="form-group">
                <b-input-group prepend="$">
                <b-form-input v-model="productTotal" id="productTotal" disabled placeholder="Product Total"></b-form-input>
                </b-input-group>
            </div>
           
            <div class="form-group">
                <b-form-select v-model="invoice.serviceName" :options="services" class="mb-3" value-field="serviceName"
                    text-field="serviceName" disabled-field="notEnabled" @change="findServiceTotal" placeholder="Services"
                    :select-size="3">
                    <template #first>
                        <b-form-select-option value=null disabled>--Select Service--</b-form-select-option>
                    </template>
                </b-form-select>
            </div>

            <div class="form-group">
                <b-input-group prepend="$">
                    <b-form-input v-model="serviceTotal" id="serviceTotal" disabled placeholder="Service Total"></b-form-input>
                </b-input-group>
            </div>
            
            <div class="form-group">
                <b-form-select v-model="invoice.paymentMethod" :options="paymentMethods" class="mb-3"
                value-field="paymentDescription" text-field="paymentDescription" disabled-field="notEnabled"
                placeholder="Payment Method">
                <template #first>
                                        <b-form-select-option value=null disabled>--Select Payment Method--</b-form-select-option>
                </template>
                </b-form-select>
                <span v-if="!$v.invoice.paymentMethod.required && $v.invoice.paymentMethod.$dirty" class="text-danger">Please select a payment method</span>
            </div>

            <div class="form-group">
                <b-input-group prepend="$">
                    <b-form-input v-model="invoice.total" id="total" disabled placeholder="Grand Total (taxes included)"></b-form-input>
                </b-input-group>
                <span v-if="!$v.invoice.total.required && $v.invoice.total.$dirty" class="text-danger">Please select a product or service to purchase</span>
            </div>

            <b-row align-h="center">
                <b-button class="darkmode-ignore" v-bind:to="'Invoices'" variant="danger">Cancel</b-button>
                <b-button class="darkmode-ignore" variant="success" type="submit">Place Order</b-button>
            </b-row>
        </b-form>
        </b-container>
        
    </div>
</template>

<script>
    import {required,minLength,maxLength,alpha,numeric} from "vuelidate/lib/validators"
    import services from '../services'
    export default {
        name: "NewInvoice",
        data() {
            return {
                invoice: {
                    customerFirstName: null,
                    customerLastName: null,
                    phoneNumber: null,
                    productName: null,
                    productQuantity: null,
                    serviceName: null,
                    paymentMethod: null,
                    employeeID: null,
                    total: null
                },
                productPrice: null,
                products: [],
                services: [],
                paymentMethods: [],
                productTotal: null,
                serviceTotal: null
            }
        },
        validations:{
            invoice:{
                customerFirstName: {
                    required,
                    alpha
                },
                customerLastName: {
                    required,
                    alpha
                },
                phoneNumber: {
                    required,
                    numeric,
                    maxLength: maxLength(10),
                    minLength: minLength(10)
                },
                paymentMethod: {
                    required
                },
                total: {
                    required
                }
            }
            

        },
        methods: {
            getLoginID() {
                this.invoice.employeeID = this.$store.getters.getEmployeeIDByLogin
                console.log(this.invoice.employeeID)
            },
            getProductNames() {
                services.getProducts().then(response => {
                    this.products = response[0]
                    console.log(this.products)
                })
            },
            newProduct(){
                this.invoice.productQuantity = 1
                this.findProductTotal()
            },

            getServices() {
                services.getServices().then(response => {
                    this.services = response
                    console.log(this.services)
                }).catch(e => {
                    console.log(e);
                })
            },
            getInvoiceStatus() {
                services.getInvoiceStatus().then(response => {
                    this.paymentMethods = response
                    console.log(this.paymentMethods)
                })
            },

            findProductTotal() {
                for (let i = 0; i < this.products.length; i++) {
                    if (this.products[i].productName == this.invoice.productName) {
                        this.productTotal = Math.round(((this.products[i].price * this.invoice.productQuantity) + Number
                            .EPSILON) * 100) / 100
                    }
                }
                this.findTotal()
            },

            findServiceTotal() {

                for (let i = 0; i < this.services.length; i++) {
                    if (this.services[i].serviceName == this.invoice.serviceName) {
                        this.serviceTotal = this.services[i].servicePrice
                    }
                }
                this.findTotal()
            },

            findTotal(){
                let taxes = null
                taxes = (((Number(this.productTotal) + Number(this.serviceTotal)))*8.25)/100
                this.invoice.total = Math.round((((Number(this.productTotal) + Number(this.serviceTotal)) + taxes) + Number
                            .EPSILON) * 100) / 100
            },

            // getCustomerByPhone() {
            //     if (this.invoice.phoneNumber == null) {
            //         this.status = "Please enter customer's phone number";
            //     } else {
            //         this.status = "";
            //         try {
            //             services.getCustomerByPhone(this.invoice.phoneNumber).then((response) => {
            //                 this.invoice.customerID = response.customerID;
            //                 console.log(this.invoice.customerID);
            //                 if(this.invoice.customerID == null){
            //                     this.addCustomer()
            //                 }
            //             });
            //         } catch (err) {
            //             console.log(err);
            //         }
            //     }
            // },
            // async addCustomer() {
            //     try {
            //     const newCustomer = services.insertCustomer(this.customer).then(customer => {
            //         this.$router.push({
            //         name: 'Customers'
            //         })
            //         return customer
            //     }).catch((error) => {
            //         this.status = error
            //     })
            //     } catch (error) {
            //     this.status = error
            //     }
            // },

            insertInvoice(){
                this.$v.$touch()
                if (!this.$v.$invalid) {
                    try {
                        console.log(this.invoice)
                        services.insertInvoice(this.invoice).then(invoice => {
                            this.$router.push({
                                name: 'Invoices'
                            })
                            return invoice
                        }).catch((error) => {
                            this.status = error
                        })
                    } catch (error) {
                        this.status = error
                    }
                }

            }


        },
        created() {
            this.getLoginID()
            this.getProductNames()
            this.getServices()
            this.getInvoiceStatus()

        }
    }
</script>

<style scoped>

</style>