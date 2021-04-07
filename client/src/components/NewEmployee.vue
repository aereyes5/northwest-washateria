<template>
    <div>
        <b-form @submit.prevent="addEmployee">
            <b-form-input v-model="employee.firstName" placeholder="Enter First Name" id="firstName"></b-form-input>
            <b-form-input v-model="employee.lastName" placeholder="Enter Last Name" id="lastName"></b-form-input>
            <b-form-datepicker v-model="employee.startDate" placeholder="Enter Start Date" id="startDate"></b-form-datepicker>
            <b-form-input v-model="employee.postion" placeholder="Enter Postion" id="position"></b-form-input>
            <b-button variant="primary" type="submit">Submit</b-button>
        </b-form>
    </div>
</template>

<script>
import services from '../services'
export default {
    name: 'NewEmployee',
    data(){
        return{
            employee: {
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
        async addEmployee(){
            try{
                const NewEmployee = services.insertEmployee(this.employee).then(employee => {
                    this.$router.push({name: 'Employees'})
                    return employee
                }).catch((error) => {
                    this.status = error
                })
            }catch(error){
                this.status = error
            }
        }
    }
}
</script>