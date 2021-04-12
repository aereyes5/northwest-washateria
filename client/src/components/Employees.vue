<template>
    <div>
        <img src="@/assets/Employees.png" width=750px heigth=150px alt="Employees">
        <b-form-input placeholder="Search..." v-model="filter" type="search"></b-form-input>
        
        <p v-if="status" class="danger font-italic font-weight-bold text-danger text-center">
            {{status}}
        </p>

        <b-button class="darkmode-ignore" v-bind:to="'new-employee'" variant="success">Add New</b-button>
        <b-button class="darkmode-ignore" variant="secondary" v-on:click="setEmployeeID">Update</b-button>
        <b-button class="darkmode-ignore" variant="danger" v-on:click="deleteEmployee">Delete</b-button>

        <p v-if="status2" class="danger font-italic font-weight-bold text-danger text-center">
            {{status2}}
        </p>
        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
        <b-table :items="employees" :fields="fields" :select-mode="selectMode" :filter="filter" striped responsive="sm"
            ref="selectableTable" selectable hover @row-selected="onRowSelected" sticky-header="83vh"
            :per-page="perPage" :current-page="currentPage">

        </b-table>
    </div>
</template>

<script>
    import services from '../services'
    export default {
        name: 'Employees',
        data() {
            return {
                employees: [],
                fields: ['firstName', 'lastName', 'startDate', 'endDate', 'position'],
                selectMode: 'single',
                selected: [],
                employeeID: null,
                status: "",
                status2: "",
                filter: "",
                perPage: 7,
                currentPage: 1
            }
        },
        methods: {
            getEmployees() {
                services.getEmployees().then(response => {
                    this.employees = response[0]
                    this.employeeID = null
                    console.log(this.employees)
                }).catch(e => {
                    console.log(e);
                })
            },
            deleteEmployee() {
                if (!Array.isArray(this.selected) || !this.selected.length) {
                    this.status2 = "Please select a record to delete";
                } else {
                    this.status2 = "";
                    services.deleteEmployee(this.selected[0].employeeID)
                    this.getEmployees()
                }
            },
            onRowSelected(items) {
                this.selected = items
                console.log(items)
            },
            setEmployeeID() {
                if (!Array.isArray(this.selected) || !this.selected.length) {
                    this.status2 = "Please select a record to update"
                } else {
                    this.updateEmployee(this.selected[0].employeeID)
                }
            },
            updateEmployee(employeeID) {
                this.$store.commit('eEmployeeID', {
                    employeeID
                })
                this.$router.push({
                    name: 'UpdateEmployee'
                })
            }
        },
        created() {
            this.getEmployees()
        },
        computed: {
            rows(){
                return this.employees.length
            }
        }
    }
</script>

<style scoped>

</style>