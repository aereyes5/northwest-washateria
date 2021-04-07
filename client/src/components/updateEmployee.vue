<template>
    <div>
        <b-form @submit.prevent="updateEmployee">
            <b-form-input v-model="employee.employeeID" id="employeeID" disabled></b-form-input>
            <b-form-input v-model="employee.firstName" placeholder="Enter First Name" id="firstName"></b-form-input>
            <b-form-input v-model="employee.lastName" placeholder="Enter Last Name" id="lastName"></b-form-input>
            <b-form-datepicker v-model="employee.endDate" placeholder="Enter End Date" id="endDate"></b-form-datepicker>
            <b-form-input v-model="employee.postion" placeholder="Enter Postion" id="Position"></b-form-input>
            <b-form-input v-model="employee.loginID" placeholder="Enter LoginID" id="loginID"></b-form-input>
            <b-button variant="primary" type="submit">Submit</b-button>
        </b-form>
    </div>
</template>

<script>
import services from '../services'
export default {
    name: 'UpdateEmployee',
    data(){
        return{
            info: [],
            employee:{
                employeeID: null,
                firstName: null,
                lastName: null,
                startDate: null,
                endDate: null,
                postion: null,
                loginID: null
            }
        }
    },
    methods: {
        findEmployee(){
            this.employee.employeeID = this.$store.getters.getEmployeeID
            this.getEmployeeByEmployeeID(this.employee.employeeID)
        },
        getEmployeeByEmployeeID(employeeID){
            try{
                services.getEmployeeByID(employeeID).then(response => {
                    this.info = response
                    this.employee.employeeID = this.info[0].employeeID;
                    this.employee.firstName = this.info[0].firstName;
                    this.employee.lastName = this.info[0].lastName;
                    this.employee.startDate = this.info[0].startDate;
                    this.employee.endDate = this.info[0].endDate;
                    this.employee.postion = this.info[0].postion;
                    this.employee.loginID = this.info[0].loginID;
                })
            }catch(err){
                console.log(err)
            }
        },
        UpdateEmployee(){
            services.updateEmployee(this.employee)
            this.$router.push({name: 'Employees'})
        }
    },
    mounted(){
        this.findEmployee()
    }
}
</script>