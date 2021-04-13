<template>
  <div>
    <img src="@/assets/Customers.png" width=750px heigth=500px alt="Customers">
    <br>
    <b-container fluid="md">
      <b-form-input placeholder="Search..." v-model="filter" type="search"></b-form-input>
      <p v-if="status2" class="danger font-italic font-weight-bold text-danger text-center">{{ status2 }}</p>
      
      <b-row>
        <b-col>
          <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
        </b-col>

        <b-col cols="12" md="8">
          <b-button-group>
            <b-button class="darkmode-ignore" v-bind:to="'new-customer'" variant="success">Add New</b-button>
            <b-button class="darkmode-ignore" variant="secondary" v-on:click="setPhoneNumber">Update</b-button>
            <b-button class="darkmode-ignore" variant="danger" v-on:click="deleteCustomer">Delete</b-button>
            <b-button class="darkmode-ignore" v-bind:to="'customer-report'" variant="primary">Generate Reports</b-button>

          </b-button-group>
        </b-col>
      </b-row>

        <b-table
          :items="customers"
          :fields="fields"
          :select-mode="selectMode"
          :filter="filter"
          striped
          responsive="sm"
          ref="selectableTable"
          selectable
          hover
          @row-selected="onRowSelected"
          :per-page="perPage" 
          :current-page="currentPage"
        >
        </b-table>

    </b-container>    
  </div>
</template>

<script>
import services from "../services";
export default {
  name: "Customers",
  data() {
    return {
      customers: [],
      fields: ["firstName", "lastName", "phoneNumber", "email"],
      selectMode: "single",
      selected: [],
      phoneNumber: null,
      status2: "",
      filter: "",
      perPage: 7,
      currentPage: 1,
    };
  },
  methods: {
     getCustomers() {
      services.getCustomers()
        .then((response) => {
          this.customers = response;
          console.log(this.customers);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteCustomer() {
      if (!Array.isArray(this.selected) || !this.selected.length) {
        this.status2 = "Please select a record to delete"
      } else {
        this.status2 = ""
        services.deleteCustomer(this.selected[0].customerID).then(response =>{
          console.log(response.data)
          this.getCustomers()
        }).catch(err =>{
          console.log(err)
        })
        this.$refs.selectableTable.refresh();  
      }
    },
    onRowSelected(items) {
      this.selected = items
      console.log(items)
    },
    //Retrieve Customer By Phone Number
    getCustomerByPhone() {
      if (this.phoneNumber == null) {
        this.status = "Please enter customer's phone number";
      } else {
        this.status = ""
        try {
          services.getCustomerByPhone(this.phoneNumber).then((response) => {
            this.customers = response
            console.log(this.customers)
          });
        } catch (err) {
          console.log(err);
        }
      }
    },
    setPhoneNumber() {
      if (!Array.isArray(this.selected) || !this.selected.length) {
        this.status2 = "Please select a record to update"
      } else {
        this.updateCustomer(this.selected[0].phoneNumber)
      }
    },
    updateCustomer(phoneNumber) {
      this.$store.commit("customerPhoneNumber", {
        phoneNumber,
      });
      this.$router.push({
        name: "UpdateCustomer",
      });
    },
  },
  computed: {
    rows() {
      return this.customers.length
    }
  },
  mounted() {
    this.getCustomers()
    this.$refs.selectableTable.refresh();
  },
  
};
</script>

<style scoped>
.pagination {
margin: 0px !important;
}
</style>
