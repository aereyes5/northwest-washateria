<template>
  <div>
    <img
      src="@/assets/addcustomer.png"
      width="750px"
      heigth="150px"
      alt="Add Customer"
    />

    <b-form @submit.prevent="addCustomer">
      <label for="firstName"> First Name:</label>
      <div class="form-group">
        <b-form-input
          v-model="customer.firstName"
          type="text"
          class="form-control"
          placeholder="e.g., Jane"
          id="firstName"
        ></b-form-input>
        

        <span
          v-if="!$v.customer.firstName.required && $v.customer.firstName.$dirty"
          class="text-danger"
          >First name is required</span
        >
        <span
          v-if="!$v.customer.firstName.alpha && $v.customer.firstName.$dirty"
          class="text-danger"
          >First name must only contain alpha characters</span
        >
      </div>

      <div class="form-group">
        <label for="lastName">Last Name:</label>
        <b-form-input
          v-model="customer.lastName"
          placeholder="e.g., Doe"
        ></b-form-input>
        <span
          v-if="!$v.customer.lastName.required && $v.customer.lastName.$dirty"
          class="text-danger"
          >Last name is required</span
        >
        <span
          v-if="!$v.customer.lastName.alpha && $v.customer.lastName.$dirty"
          class="text-danger"
          >Last name has to be alpha characters</span
        >
      </div>

      <div class="form-group">
        <label for="phoneNumber">Phone Number:</label>
        <b-form-input
          v-model="customer.phoneNumber"
          placeholder="e.g., 8325551212"
          id="phoneNumber"
        ></b-form-input>
        <span
          v-if="(!$v.customer.phoneNumber.numeric ||!$v.customer.phoneNumber.minLength ||!$v.customer.phoneNumber.maxLength) && $v.customer.phoneNumber.$dirty"
          class="text-danger"
          >Please enter a valid phone number</span>
    
        <span
          v-if="!$v.customer.phoneNumber.required && $v.customer.phoneNumber.$dirty"
          class="text-danger"
          >Phone number is required.</span>
      </div>

      <div class="form-group">
        <label for="email"> Email (Optional):</label>

        <b-form-input
          type="email"
          v-model="customer.email"
          placeholder="e.g., jdoe@example.com"
          id="email"
        ></b-form-input>
        <span v-if="!$v.customer.email.email && $v.customer.email.$dirty"
          >Please enter a valid email</span
        >
      </div>
      <b-row align-h="center">
        <b-button
          class="darkmode-ignore"
          v-bind:to="'Customers'"
          variant="danger"
          type="submit"
          >Cancel</b-button
        > 
        <b-button class="darkmode-ignore" variant="success" type="submit"
          >Submit</b-button
        >
      </b-row>
    </b-form>
    <br />
  </div>
</template>

<script>
import {required,minLength,maxLength,alpha,email,numeric} from "vuelidate/lib/validators";
import services from "../services";
export default {
  name: "NewCustomer",
  data() {
    return {
      customer: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
      },
    };
  },
  validations: {
    customer:{  
       firstName: {
      required,
      alpha,
    },
    lastName: {
      required,
      alpha,
    },
    phoneNumber: {
      required,
      numeric,
      minLength: minLength(10),
      maxLength: maxLength(10),
    },
    email: {
      email,
    },}
 
  },
  methods: {
    addCustomer() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        try {
          services
            .insertCustomer(this.customer)
            .then((customer) => {
              this.$router.push({
                name: "Customers",
              });
              return customer;
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
