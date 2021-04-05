<template>
    <div>
        <b-input-group class="mt-3">
            <b-form-input placeholder="Enter Product's ID number" v-model="employeeID"></b-form-input>
            <b-input-group-append>
            <b-button variant="primary" v-on:click="getEmployeeByID">Search</b-button>
            </b-input-group-append>
        </b-input-group>
        <p v-if="status" class="danger font-italic font-weight-bold text-danger text-center">
        {{status}}
        </p>

        <b-button variant="primary" v-on:click="getEmployees">View All</b-button>
        <b-button v-bind:to="'new-product'" variant="success">Add New</b-button>
        <b-button variant="secondary" v-on:click="setEmployeeID">Update</b-button>
        <b-button variant="danger" v-on:click="deleteEmployee">Delete</b-button>

        <p v-if="status2" class="danger font-italic font-weight-bold text-danger text-center">
        {{status2}}
        </p>


        <b-table
        :items="employees"
        :fields="fields"
        :select-mode="selectMode"
        striped responsive="sm"
        ref="selectableTable"
        selectable
        @row-selected="onRowSelected"
        sticky-header="83vh"
        >

        </b-table>
    </div>
</template>

<script>
import services from '../services'
export default {
    name: 'Employees',
    data(){
        return{
            employees: [],
            fields: ['employeeID', 'firstName', 'lastName', 'startDate', 'endDate', 'postion', 'loginID'],
            selectMode: 'single',
            selected: [],
            employeeID: null,
            status: "",
            status2: ""
        }
    },
    methods: {
        getEmployees(){
            
        }
    }
    
}
</script>