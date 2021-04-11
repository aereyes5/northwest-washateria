<template>
    <div>
        <b-form-input placeholder="Search..." v-model="filter" type="search"></b-form-input>
        <b-button class="darkmode-ignore" variant="success">
            <downloadExcel :fields="fieldsForExcel" :data="selected" name="Report">
                Excel Report
            </downloadExcel>
        </b-button>
        <b-button class="darkmode-ignore" variant="primary" v-on:click="createNewReport">PDF Report</b-button>
        <b-button class="darkmode-ignore" variant="info">Email Report</b-button>
        <br>
        <b-button class="darkmode-ignore" variant="outline-success" v-on:click="selectAllRows">Select All Rows
        </b-button>
        <b-button class="darkmode-ignore" variant="outline-danger" v-on:click="clearSelected">Clear Selected Rows
        </b-button>

        <b-table id="report" :items="invoices" :fields="fields" :filter="filter" :select-mode="selectMode" striped
            responsive="sm" ref="selectableTable" selectable hover @row-selected="onRowSelected" sticky-header="83vh">
        </b-table>
    </div>
</template>

<script>
    import services from '../services'
    import jsPDF from 'jspdf'
    import 'jspdf-autotable'
    export default {
        name: 'newReport',
        data() {
            return {
                invoices: [],
                fields: ['date', 'product', 'quantity', 'productPrice', 'service', 'servicePrice', 'paymentMethod',
                    'total'
                ],
                fieldsForExcel: {
                    Date: "date",
                    Product: "product",
                    Quantity: "quantity",
                    ProductPrice: "productPrice",
                    Service: "service",
                    ServicePrice: "servicePrice",
                    PaymentMethod: "paymentMethod",
                    Total: "total"
                },
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
            },
            createNewReport() {
                const doc = new jsPDF()
                doc.autoTable({
                    html: '#report',
                    theme: 'grid',
                    headStyles: {
                        halign: 'center',
                        fillColor: [77, 128, 222]
                    },
                    bodyStyles: {
                        halign: 'center'
                    },
                    alternateRowStyles: {
                        fillColor: [213, 219, 219]
                    },
                    showHead: 'everyPage',
                    pageBreak: 'auto'
                })
                doc.save('Report.pdf')
            },
            selectAllRows() {
                this.$refs.selectableTable.selectAllRows()
            },
            clearSelected() {
                this.$refs.selectableTable.clearSelected()
            }
        },
        created() {
            this.getInvoices()
        }
    }
</script>