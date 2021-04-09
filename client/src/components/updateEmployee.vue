<template>
    <div>
        <b-form @submit.prevent="updateEmployee">
            <b-form-input v-model="employee.employeeID" id="employeeID" disabled></b-form-input>
            <b-form-input v-model="employee.firstName" placeholder="Enter First Name" id="firstName"></b-form-input>
            <b-form-input v-model="employee.lastName" placeholder="Enter Last Name" id="lastName"></b-form-input>
            <b-form-datepicker v-model="employee.startDate" placeholder="Enter End Date" id="startDate" disabled>
            </b-form-datepicker>
            <b-form-datepicker v-model="employee.endDate" placeholder="Enter End Date" id="endDate"></b-form-datepicker>
            <b-form-input v-model="employee.position" placeholder="Enter Postion" id="position"></b-form-input>
            <b-form-input v-model="employee.username" placeholder="Enter Username" id="username"></b-form-input>
            <b-form-input v-model="employee.pswd" placeholder="Enter Password" id="pswd"></b-form-input>
            <b-form-select v-model="employee.access" placeholder="Enter Access" id="access">
                <b-form-select-option value=null disabled>Please select an option</b-form-select-option>
                <b-form-select-option value="Admin">Admin</b-form-select-option>
                <b-form-select-option value="Employee">Employee</b-form-select-option>
            </b-form-select>
            <b-button class="darkmode-ignore" variant="primary" type="submit">Submit</b-button>
        </b-form>
        <b-button class="darkmode-ignore" v-bind:to="'Employees'" variant="primary">Cancel</b-button>
    </div>
</template>

<script>
    import services from '../services'
    export default {
        name: 'UpdateEmployee',
        data() {
            return {
                info: [],
                employee: {
                    employeeID: null,
                    firstName: null,
                    lastName: null,
                    startDate: null,
                    endDate: null,
                    position: null,
                    loginID: null,
                    username: null,
                    pswd: null,
                    access: null
                }
            }
        },
        methods: {
            findEmployee() {
                this.employee.employeeID = this.$store.getters.getEmployeeID
                this.getEmployeeByEmployeeID(this.employee.employeeID)
            },
            getEmployeeByEmployeeID(employeeID) {
                try {
                    services.getEmployeeByID(employeeID).then(response => {
                        this.info = response
                        this.employee.employeeID = this.info[0].employeeID;
                        this.employee.firstName = this.info[0].firstName;
                        this.employee.lastName = this.info[0].lastName;
                        this.employee.startDate = this.info[0].startDate;
                        this.employee.endDate = this.info[0].endDate;
                        this.employee.position = this.info[0].position;
                        this.employee.username = this.info[0].username;
                        this.employee.pswd = this.info[0].pswd;
                        this.employee.access = this.info[0].access;
                    })
                } catch (err) {
                    console.log(err)
                }
            },
            UpdateEmployee() {
                services.updateEmployee(this.employee)
                this.$router.push({
                    name: 'Employees'
                })
            }
        },
        mounted() {
            this.findEmployee()
        }
    }
</script>

<style scoped>

</style>