<template>
  <div>
    <img
      src="@/assets/addcustomer.png"
      width="750px"
      heigth="150px"
      alt="Add Customer"
    />

    <b-form @submit.prevent="addCustomer">
      <b-label for="firstName" text-align="left"> First Name:</b-label>
      <div class="form-group">
        <b-form-input
          v-model="customer.firstName"
          type="text"
          class="form-control"
          placeholder="e.g., Jane"
          id="firstName"
        ></b-form-input>

        <span
          v-if="!$v.firstName.required && $v.firstName.$dirty"
          class="text-danger"
          >First name is required</span
        >
        <span
          v-if="!$v.firstName.alpha && $v.firstName.$dirty"
          class="text-danger"
          >First name is required</span
        >
      </div>

      <div class="form-group">
        <label for="lastName">Last Name:</label>

        <b-form-input
          v-model="customer.lastName"
          placeholder="e.g., Doe"
        ></b-form-input>
        <span
          v-if="!$v.lastName.required && $v.lastName.$dirty"
          class="text-danger"
          >Last name is required</span
        >
        <span
          v-if="!$v.lastName.alpha && $v.lastName.$dirty"
          class="text-danger"
          >Last name is required</span
        >
      </div>

      <div class="form-group">
        <b-form-input
          v-model="customer.phoneNumber"
          placeholder="e.g., 8325551212"
        ></b-form-input>
        <span v-if="!$v.phoneNumber.numeric && $v.phoneNumber.$dirty"
          >Please enter a valid phone number</span
        >
        <span
          v-if="!$v.phoneNumber.required && $v.phoneNumber.$dirty"
          class="text-danger"
          >Phone number is required</span
        >
        <span
          v-if="
            (!$v.phoneNumber.minLength || !$v.phoneNumber.maxlength) &&
            $v.phoneNumber.$dirty
          "
          class="text-danger"
          >Please enter a valid phone number</span
        >
      </div>

      <div class="form-group">
        <b-form-input
          type="email"
          v-model="customer.email"
          placeholder="e.g., jdoe@example.com"
        ></b-form-input>
        <span v-if="!$v.email.email && $v.email.$dirty"
          >Please enter a valid email</span
        >
      </div>

      <b-button class="darkmode-ignore" variant="primary" type="submit"
        >Submit</b-button
      >
    </b-form>
    <b-button
      class="darkmode-ignore"
      v-bind:to="'customers'"
      variant="primary"
      type="submit"
      >Cancel</b-button
    >
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  alpha,
  email,
  numeric,
} from "vuelidate/lib/validators";
import services from "../services";
export default {
  name: "NewCustomer",
  data() {
    return {
      customer: {
        firstName: null,
        lastName: null,
        phoneNumber: null,
        email: null,
      },
    };
  },
  validations: {
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
    },
  },
  methods: {
    async addCustomer() {
      this.$v.$touch();

      try {
        if (!this.$v.$invalid) {
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
        }
      } catch (error) {
        this.status = error;
      }
    },
  },
};
</script>

<style scoped></style>
