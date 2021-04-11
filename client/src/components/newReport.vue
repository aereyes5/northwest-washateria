<template>
    <div>
        <b-form-input placeholder="Search..." v-model="filter" type="search"></b-form-input>
        <b-button class="darkmode-ignore" variant="success">Excel Report</b-button>
        <b-button class="darkmode-ignore" variant="primary">PDF Report</b-button>
        <b-button class="darkmode-ignore" variant="info">Email Report</b-button>

        <b-table 
        :items="invoices" 
        :fields="fields" 
        :filter="filter"
        :select-mode="selectMode"
        striped
        responsive="sm"
        ref="selectableTable"
        selectable
        hover
        @row-selected="onRowSelected"
        sticky-header="83vh"></b-table>
    </div>
</template>

<script>
import services from '../services'
export default {
    name: 'newReport',
    data() {
        return {
            invoices: [],
            fields: ['date', 'product', 'quantity', 'productPrice', 'service', 'servicePrice', 'paymentMethod','total'],
            selectMode: 'range',
            selected: [],
            filter: ""
        }
    },
    methods: {
        getInvoices() {
                services.getInvoices().then(response => {
                    this.invoices = response
                    this.invoiceID = null
                    console.log(this.invoices)
                }).catch(e => {
                    console.log(e);
                })
            },
        onRowSelected(items) {
                this.selected = items
                console.log(this.selected)
            }
    },
    created() {
        this.getInvoices()
    }
}
</script>