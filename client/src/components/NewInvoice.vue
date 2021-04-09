<template>
    <div>
        <b-form @submit.prevent="insertInvoice">
            <b-form-input v-model="invoice.customerFirstName" placeholder="Customer First Name" id="customerFirstName">
            </b-form-input>
            <b-form-input v-model="invoice.customerLastName" placeholder="Customer Last Name" id="customerLastName">
            </b-form-input>
            <b-form-input v-model="invoice.customerPhoneNumber" placeholder="Customer Phone Number"
                id="customerPhoneNumber"></b-form-input>

            <b-form-select v-model="invoice.productName" :options="products" class="mb-3" value-field="productName"
                text-field="productName" disabled-field="notEnabled" @change="productSelected" placeholder="Products">
            </b-form-select>

            <b-form-spinbutton v-model="invoice.productQuantity" id="sb-inline" placeholder="--" inline
                @change="findProductTotal"></b-form-spinbutton>
            <b-form-input v-model="productTotal" id="productTotal" disabled></b-form-input>

            <b-form-select v-model="invoice.serviceName" :options="services" class="mb-3" value-field="serviceName"
                text-field="serviceName" disabled-field="notEnabled" @change="serviceSelected" placeholder="Services">
            </b-form-select>

            <b-form-input v-model="invoice.servicePrice" id="serviceTotal" disabled></b-form-input>
            <b-form-select v-model="invoice.paymentMethod" :options="paymentMethods" class="mb-3"
                value-field="paymentDescription" text-field="paymentDescription" disabled-field="notEnabled"
                placeholder="Payment Method"></b-form-select>

            <b-form-input v-model="invoice.total" id="total" disabled></b-form-input>

            <b-button class="darkmode-ignore" variant="primary" type="submit">Place Order</b-button>
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
                    customerPhoneNumber: null,
                    productName: null,
                    productQuantity: null,
                    productPrice: null,
                    serviceName: null,
                    servicePrice: null,
                    paymentMethod: null,
                    employeeID: null,
                    employeeFirstName: null,
                    employeeLastName: null,
                    total: null
                },
                products: [],
                services: [],
                paymentMethods: [],
                productTotal: null,
                serviceTotal: null
            }
        },
        methods: {
            getLoginID() {
                this.invoice.employeeID = this.$store.getters.getEmployeeByLoginID
                this.invoice.employeeFirstName = this.$store.getters.getEmployeeFirstName
                this.invoice.employeeLastName = this.$store.getters.getEmployeeLastName
            },
            getProductNames() {
                services.getProducts().then(response => {
                    this.products = response[0]
                    console.log(this.products)
                })
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