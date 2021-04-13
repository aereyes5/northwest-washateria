<template>
    <div>
        <img src="@/assets/updateemployee.png" width=750px heigth=150px alt="Update Employee">
        <b-container>
            <b-form @submit.prevent="updateEmployee">
                <div class="form-group">
                    <b-form-input v-model="employee.employeeID" id="employeeID" disabled></b-form-input>
                </div>

                <div class="form-group">
                    <b-form-input v-model="employee.firstName" placeholder="Enter First Name" id="firstName"></b-form-input>
                    <span v-if="!$v.employee.firstName.required && $v.employee.firstName.$dirty" class="text-danger">First name is required</span>
                    <span v-if="!$v.employee.firstName.alpha && $v.employee.firstName.$dirty" class="text-danger">First name can only contain alpha characters</span>
      
                </div>

                <div class="form-group">
                    <b-form-input v-model="employee.lastName" placeholder="Enter Last Name" id="lastName"></b-form-input>
                    <span v-if="!$v.employee.lastName.required && $v.employee.lastName.$dirty" class="text-danger">Last name is required</span>
                    <span v-if="!$v.employee.lastName.alpha && $v.employee.lastName.$dirty" class="text-danger">Last name can only contain alpha characters</span>
                </div>
                
                <div class="form-group">
                    <b-form-datepicker v-model="employee.startDate" placeholder="Enter End Date" id="startDate" disabled>
                    </b-form-datepicker>
                </div>

                <div class="form-group">
                    <b-form-datepicker v-model="employee.endDate" placeholder="Enter End Date" id="endDate"></b-form-datepicker>
                </div>

                <div class="form-group">
                    <b-form-input v-model="employee.username" placeholder="Enter Username" id="username"></b-form-input>
                    <span v-if="!$v.employee.username.required && $v.employee.username.$dirty" class="text-danger">Username is required</span>
                </div>

                <div class="form-group">
                    <b-form-input v-model="employee.pswd" placeholder="Enter Password" id="pswd"></b-form-input>
                    <span v-if="!$v.employee.pswd.required && $v.employee.pswd.$dirty" class="text-danger">Password is required</span>
                    <span v-if="!$v.employee.pswd.minLength && $v.employee.pswd.$dirty" class="text-danger">Password must be at least {{$v.employee.pswd.$params.minLength.min}} characters long</span>
                </div>

                <div class="form-group">
                    <b-form-select v-model="employee.access" placeholder="Enter Access" id="access">
                        <b-form-select-option value=null disabled>Please select an option</b-form-select-option>
                        <b-form-select-option value="Admin">Admin</b-form-select-option>
                        <b-form-select-option value="Employee">Employee</b-form-select-option>
                    </b-form-select>
                    <span v-if="!$v.employee.access.required && $v.employee.access.$dirty" class="text-danger">Application privileges is required</span>
                </div>

                <b-row align-h="center">
                    <b-button class="darkmode-ignore" v-bind:to="'Employees'" variant="danger">Cancel</b-button>
                    <b-button class="darkmode-ignore" variant="success" type="submit">Submit</b-button>
                </b-row>                    
        </b-form>
        </b-container>
        
    </div>
</template>

<script>
    import {required,minLength,alpha} from "vuelidate/lib/validators" 
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
        validations: {
            employee: {
                firstName: {
                    required,
                    alpha
                },
                lastName: {
                    required,
                    alpha
                },
                position: {
                    required,
                    alpha
                },
                username: {
                    required,
                },
                pswd: {
                    required,
                    minLength: minLength(8)
                },
                access: {
                    required
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
                        this.employee.employeeID = this.info[0].employeeID 
                        this.employee.firstName = this.info[0].firstName 
                        this.employee.lastName = this.info[0].lastName 
                        this.employee.startDate = this.info[0].startDate 
                        this.employee.endDate = this.info[0].endDate 
                        this.employee.position = this.info[0].position 
                        this.employee.username = this.info[0].username 
                        this.employee.pswd = this.info[0].pswd 
                        this.employee.access = this.info[0].access 
                    })
                } catch (err) {
                    console.log(err)
                }
            },
            updateEmployee() {
                this.$v.$touch() 
                if (!this.$v.$invalid){
                    services.updateEmployee(this.employee)
                    this.$router.push({
                        name: 'Employees'
                    })
                }
                
            }
        },
        mounted() {
            this.findEmployee()
        }
    }
</script>

<style scoped>

</style>