<template>
  <div>
    <!-- <b-input-group class="mt-3">
            <b-form-input placeholder="Search by vendor name..." v-model="vendorName"></b-form-input>
            <b-input-group-append>
            <b-button variant="primary" v-on:click="getVendorByName">Search</b-button>
            </b-input-group-append>
        </b-input-group> -->

    <b-form-input placeholder="Search..." v-model="filter" type="search"></b-form-input>
    <p v-if="status" class="danger font-italic font-weight-bold text-danger text-center">
      {{status}}
    </p>

    <b-button class="darkmode-ignore" variant="success" v-bind:to="'new-vendor'">Add New</b-button>
    <b-button class="darkmode-ignore" variant="secondary" v-on:click="setVendorID">Update</b-button>
    <b-button class="darkmode-ignore" variant="danger" v-on:click="deleteVendor">Delete</b-button>

    <b-table :items="vendors" :fields="fields" :select-mode="selectMode" :filter="filter" striped responsive="sm"
      ref="selectableTable" selectable hover @row-selected="onRowSelected">
      <template #cell(show_details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2, darkmode-ignore">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
        </b-button>

      </template>

      <template #row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Vendor Contact:</b></b-col>
            <b-col>{{ row.item.vendorContact }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Phone Number:</b></b-col>
            <b-col>{{ row.item.phoneNumber }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Email:</b></b-col>
            <b-col>{{ row.item.email }}</b-col>
          </b-row>

        </b-card>
      </template>
    </b-table>
  </div>
</template>

<script>
  import services from '../services'
  export default {
    name: "Vendors",
    data() {
      return {
        fields: ['vendorName', 'type', 'country', 'show_details'],
        vendors: [],
        vendorName: null,
        status: "",
        selectMode: 'single',
        selected: [],
        filter: ""
      }
    },
    methods: {
      onRowSelected(items) {
        this.selected = items
        console.log(items)
      },
      getVendors() {
        services.getVendors().then(response => {
          this.vendors = response
          this.vendorName = null
          console.log(this.vendors)
        })
      },
      getVendorByName() {
        if (this.vendorName == null) {
          this.status = "Search field cannot be empty";
        } else {
          this.status = "";
          try {
            services.getVendorByName(this.vendorName).then(response => {
              this.vendors = response
              console.log(this.vendors)
            })
          } catch (err) {
            console.log(err)
          }
        }
      },
      setVendorID() {
        if (!Array.isArray(this.selected) || !this.selected.length) {
          this.status = "Please select a record to update";
        } else {
          this.updateVendor(this.selected[0].vendorID)
        }
      },
      updateVendor(vendorID) {
        this.$store.commit('setVendorID', {
          vendorID
        })
        this.$router.push({
          name: 'UpdateVendor'
        })
      },
      deleteVendor() {
        if (!Array.isArray(this.selected) || !this.selected.length) {
          this.status = "Please select a record to delete";
        } else {
          this.status = "";
          services.deleteVendor(this.selected[0].vendorID)
          window.location.reload()
        }
      }
    },
    created() {
      this.getVendors()
    }
  }
</script>

<style scoped>

</style>