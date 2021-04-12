<template>
  <div>
    <img
      src="@/assets/addemployee.png"
      width="750px"
      heigth="150px"
      alt="Add Employee"
    />
    <b-form @submit.prevent="addEmployee">
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
        <b-form-datepicker v-model="employee.startDate" placeholder="Enter Start Date" id="startDate"></b-form-datepicker>
        <span v-if="!$v.employee.startDate.required && $v.employee.startDate.$dirty" class="text-danger">Start date is required</span>
      </div>
      
      <div class="form-group">
        <b-form-input v-model="employee.position" placeholder="e.g., Employee, Owner" id="position"></b-form-input>
        <span v-if="!$v.employee.position.required && $v.employee.position.$dirty" class="text-danger">Employee position is required</span>
      </div>
      
      <div class="form-group">
        <b-form-input v-model="employee.username" placeholder="Enter Username" id="username"
        ></b-form-input>
        <span v-if="!$v.employee.username.required && $v.employee.username.$dirty" class="text-danger">Username is required</span>
      </div>
      
      <div class="form-group">
        <b-form-input v-model="employee.pswd" placeholder="Enter Password" type="password" id="pswd"
        ></b-form-input>
        <span v-if="!$v.employee.pswd.required && $v.employee.pswd.$dirty" class="text-danger">Password is required</span>
        <span v-if="!$v.employee.pswd.minLength && $v.employee.pswd.$dirty" class="text-danger">Password must be at least {{$v.employee.password.$params.minLength.min}} characters long</span>
      </div>
      
      <div class="form-group">
        <b-form-select v-model="employee.access" placeholder="e.g., Admin, Employee" id="access">
          <b-form-select-option value="null" disabled>Enter Application Access</b-form-select-option>
          <b-form-select-option value="Admin">Admin</b-form-select-option>
          <b-form-select-option value="Employee">Employee</b-form-select-option>
        </b-form-select>
        <span v-if="!$v.employee.access.required && $v.employee.access.$dirty" class="text-danger">Application access is required</span>
      </div>
      
      <b-row align-h="center">
        <b-button class="darkmode-ignore" v-bind:to="'Employees'" variant="danger">Cancel</b-button>
        <b-button class="darkmode-ignore" variant="success" type="submit">Submit</b-button>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import {required,minLength,alpha} from "vuelidate/lib/validators";
import services from "../services";
export default {
  name: "NewEmployee",
  data() {
    return {
      employee: {
        firstName: null,
        lastName: null,
        startDate: null,
        endDate: null,
        position: null,
        loginID: null,
        username: null,
        pswd: null,
        access: null,
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
      startDate: {
        required
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
    addEmployee() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        try {
          const NewEmployee = services
            .insertEmployee(this.employee)
            .then((employee) => {
              this.$router.push({
                name: "Employees",
              });
              return employee;
            })
            .catch((error) => {
              this.status = error;
            });
        } catch (error) {
          this.status = error;
        }
      }
    },
  },
};
</script>

<style scoped></style>
