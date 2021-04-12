<template>
    <div>
        <img src="@/assets/genreport.png" width=750px heigth=150px alt="Genereate Reports">
        <b-form-input placeholder="Search..." v-model="filter" type="search"></b-form-input>
        <b-button class="darkmode-ignore" variant="success">
            <downloadExcel
            :fields="fieldsForExcel"
            :data="selected"
            name="Report"
            worksheet="Orders"
            type="xls"
            >
            Excel Report
            </downloadExcel>
        </b-button>    
        <b-button class="darkmode-ignore" variant="primary" v-on:click="createNewReport">PDF Report</b-button> 
        <b-button class="darkmode-ignore" variant="info">
            <downloadExcel
            :fields="fieldsForExcel"
            :data="selected"
            name="Report"
            type="csv"
            >
            CSV Report
            </downloadExcel>
        </b-button>
        <br>
        <b-button class="darkmode-ignore" variant="outline-success" v-on:click="selectAllRows">Select All Rows
        </b-button>
        <b-button class="darkmode-ignore" variant="outline-danger" v-on:click="clearSelected">Clear Selected Rows
        </b-button>
        <b-button class="darkmode-ignore" v-bind:to="'Customers'" variant="danger">Cancel</b-button>

        <b-table id="report" :items="customers" :fields="fields" :filter="filter" :select-mode="selectMode" striped
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
            customers: [],
            fields: ["firstName", "lastName", "phoneNumber", "email"],
            fieldsForExcel: {FirstName: "firstName", LastName: "lastName", PhoneNumber: "phoneNumber",  Email: "email"},
            selectMode: 'range',
            selected: [],
            filter: "",
            reportEmail: ""
        }
    },
    methods: {
        getCustomers() {
                services
                    .getCustomers()
                    .then((response) => {
                        this.customers = response;
                        this.phoneNumber = null;
                        console.log(this.customers);
                    })
                    .catch((e) => {
                        console.log(e);
                    });
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
        this.getCustomers()
    }
    }
    
</script>