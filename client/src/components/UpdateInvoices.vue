<template>
    <div>
        <b-form @submit.prevent="updateInvoice">
            <b-form-input v-model="invoice.invoiceID" id="invoiceID" disabled></b-form-input>
            <b-form-input v-model="invoice.date" placeholder="Enter First Name" id="date"></b-form-input>
            <b-form-input v-model="invoice.customerFirstName" placeholder="Enter First Name" id="customerFirstName">
            </b-form-input>
            <b-form-input v-model="invoice.customerLastName" placeholder="Enter First Name" id="customerLastName">
            </b-form-input>
            <b-form-input v-model="invoice.phoneNumber" placeholder="Enter First Name" id="phoneNumber"></b-form-input>
            <b-form-input v-model="invoice.product" placeholder="Enter First Name" id="product"></b-form-input>
            <b-form-input v-model="invoice.productPrice" placeholder="Enter First Name" id="productPrice">
            </b-form-input>
            <b-form-input v-model="invoice.quantity" placeholder="Enter First Name" id="quantity"></b-form-input>
            <b-form-input v-model="invoice.service" placeholder="Enter First Name" id="service"></b-form-input>
            <b-form-input v-model="invoice.servicePrice" placeholder="Enter First Name" id="servicePrice">
            </b-form-input>
            <b-form-input v-model="invoice.totalPrice" placeholder="Enter First Name" id="totalPrice"></b-form-input>
            <b-form-input v-model="invoice.paymentMethod" placeholder="Enter First Name" id="paymentMethod">
            </b-form-input>
            <b-button class="darkmode-ignore" variant="success" type="submit">Submit</b-button>
        </b-form>
        <b-button class="darkmode-ignore" v-bind:to="'Invoices'" variant="danger">Cancel</b-button>
    </div>
</template>

<script>
    import services from '../services'
    export default {
        name: 'UpdateInvoices',
        data() {
            return {
                info: [],
                invoice: {
                    invoiceID: null,
                    date: null,
                    customerFirstName: null,
                    customerLastName: null,
                    phoneNumber: null,
                    product: null,
                    productPrice: null,
                    quantity: null,
                    service: null,
                    servicePrice: null,
                    totalPrice: null,
                    paymentMethod: null
                }
            }
        },
        methods: {
            findInvoice() {
                this.invoice.invoiceID = this.$store.getters.getInvoiceID
                this.getInvoiceByInvoiceID(this.invoice.invoiceID)
            },
            getInvoiceByInvoiceID(invoiceID) {
                try {
                    services.getInvoiceByID(invoiceID).then(response => {
                        this.info = response
                        this.invoice.invoiceID = this.info[0].invoiceID;
                        this.invoice.date = this.info[0].date;
                        this.invoice.customerFirstName = this.info[0].customerFirstName;
                        this.invoice.customerLastName = this.info[0].customerLastName;
                        this.invoice.phoneNumber = this.info[0].phoneNumber;
                        this.invoice.product = this.info[0].product;
                        this.invoice.productPrice = this.info[0].productPrice;
                        this.invoice.quantity = this.info[0].quantity;
                        this.invoice.service = this.info[0].service;
                        this.invoice.servicePrice = this.info[0].servicePrice;
                        this.invoice.totalPrice = this.info[0].totalPrice;
                        this.invoice.paymentMethod = this.info[0].paymentMethod;
                    })
                } catch (err) {
                    console.log(err)
                }
            },
            UpdateInvoice() {
                services.updateInvoice(this.invoice)
                this.$router.push({
                    name: 'Invoices'
                })
            }
        },
        mounted() {
            this.findInvoice()
        }
    }
</script>

<style scoped>

</style>