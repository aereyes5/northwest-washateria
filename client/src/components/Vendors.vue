<template>
  <div>
    <img src="@/assets/Vendors.png" width=750px heigth=150px alt="Vendors">
    <br>
    <b-container fluid="md">
        <b-form-input placeholder="Search..." v-model="filter" type="search"></b-form-input>
        <p v-if="status" class="danger font-italic font-weight-bold text-danger text-center">
          {{status}}
        </p>

        <b-row>
          <b-col>
              <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
          </b-col>

          <b-col cols="12" md="8">
            <b-button-group class="ml-5">
              <b-button class="darkmode-ignore" variant="success" v-bind:to="'new-vendor'">Add New</b-button>
              <b-button class="darkmode-ignore" variant="secondary" v-on:click="setVendorID">Update</b-button>
              <b-button class="darkmode-ignore" variant="danger" v-on:click="deleteVendor">Delete</b-button>           
            </b-button-group>
          </b-col>
        </b-row>

        <b-table :items="vendors" :fields="fields" :select-mode="selectMode" :filter="filter" striped responsive="sm"
      ref="selectableTable" selectable hover @row-selected="onRowSelected"
      :per-page="perPage" :current-page="currentPage">
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
    </b-container>
    

    

    
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
        filter: "",
        perPage: 7,
        currentPage: 1
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
          this.getVendors()
          this.$refs.selectableTable.refresh();
        }
      }
    },
    created() {
      this.getVendors()
    },
    mounted(){
      this.$refs.selectableTable.refresh();
    },
    computed: {
            rows(){
                return this.vendors.length
            }
        }
  }
</script>

<style scoped>
.pagination {
margin: 0px !important;
}
</style>