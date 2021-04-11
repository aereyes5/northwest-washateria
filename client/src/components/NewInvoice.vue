<template>
    <div>
        <b-form @submit.prevent="insertInvoice">
            <b-form-input v-model="invoice.customerFirstName" placeholder="Customer First Name" id="customerFirstName">
            </b-form-input>
            <b-form-input v-model="invoice.customerLastName" placeholder="Customer Last Name" id="customerLastName">
            </b-form-input>
            <b-form-input v-model="invoice.phoneNumber" placeholder="Customer Phone Number"
                id="customerPhoneNumber"></b-form-input>

            <b-form-select v-model="invoice.productName" :options="products" class="mb-3" value-field="productName"
                text-field="productName" disabled-field="notEnabled" placeholder="Products" @change="newProduct">
            </b-form-select>

            <b-form-spinbutton v-model="invoice.productQuantity" id="sb-inline" placeholder="--" inline
                @change="findProductTotal"></b-form-spinbutton>
            <b-form-input v-model="productTotal" id="productTotal" disabled></b-form-input>

            <b-form-select v-model="invoice.serviceName" :options="services" class="mb-3" value-field="serviceName"
                text-field="serviceName" disabled-field="notEnabled" @change="findServiceTotal" placeholder="Services">
            </b-form-select>

            <b-form-input v-model="serviceTotal" id="serviceTotal" disabled></b-form-input>
            <b-form-select v-model="invoice.paymentMethod" :options="paymentMethods" class="mb-3"
                value-field="paymentDescription" text-field="paymentDescription" disabled-field="notEnabled"
                placeholder="Payment Method"></b-form-select>

            <b-form-input v-model="invoice.total" id="total" disabled></b-form-input>

            <b-button class="darkmode-ignore" variant="success" type="submit">Place Order</b-button>
        </b-form>
        <b-button class="darkmode-ignore" v-bind:to="'Invoices'" variant="danger">Cancel</b-button>
    </div>
</template>

<script>
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
                this.productTotal = null
                this.invoice.productQuantity = null
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

            getCustomerByPhone() {
                if (this.invoice.phoneNumber == null) {
                    this.status = "Please enter customer's phone number";
                } else {
                    this.status = "";
                    try {
                        services.getCustomerByPhone(this.invoice.phoneNumber).then((response) => {
                            this.invoice.customerID = response.customerID;
                            console.log(this.invoice.customerID);
                            if(this.invoice.customerID == null){
                                this.addCustomer()
                            }
                        });
                    } catch (err) {
                        console.log(err);
                    }
                }
            },
            async addCustomer() {
                try {
                const newCustomer = services.insertCustomer(this.customer).then(customer => {
                    this.$router.push({
                    name: 'Customers'
                    })
                    return customer
                }).catch((error) => {
                    this.status = error
                })
                } catch (error) {
                this.status = error
                }
            },

            async insertInvoice(){
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