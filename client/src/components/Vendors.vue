<template>
    <div>
        <b-input-group class="mt-3">
            <b-form-input placeholder="Search by vendor name..." v-model="vendorName"></b-form-input>
            <b-input-group-append>
            <b-button variant="primary" v-on:click="getVendorByName">Search</b-button>
            </b-input-group-append>
        </b-input-group>
        <p v-if="status" class="danger font-italic font-weight-bold text-danger text-center">
        {{status}}
        </p>

        <b-button variant="primary" v-on:click="getVendors">View All</b-button>


         <b-table 
         :items="vendors" 
         :fields="fields"
         striped responsive="sm"
         >
      <template #cell(show_details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
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
          
          <b-button  variant="secondary" size="sm" @click="row.toggleDetails">Edit</b-button>
          <b-button variant="danger" size="sm" @click="row.toggleDetails">Delete</b-button>

        </b-card>
      </template>
    </b-table>
    </div>
</template>

<script>
import services from '../services'
export default {
    name: 'Vendors',
    data(){
        return{
            fields: ['vendorID', 'vendorName', 'type', 'country','show_details'],
            vendors: [],
            vendorName: null,
            status: "",
            selectMode: 'single'
        }
    },
    methods: {
        getVendors(){
            services.getVendors().then(response => {
                this.vendors = response
                this.vendorName = null
                console.log(this.vendors)
            })
        },

        getVendorByName(){
            if(this.vendorName == null){
                this.status = "Search field cannot be empty";
            }
            else{
                this.status = "";
                try{
                services.getVendorByName(this.vendorName).then(response => {
                    this.vendors = response
                    console.log(this.vendors)
                })
                }catch(err){
                    console.log(err)
                }
            }
            
        },
    },

    created(){
        this.getVendors()
    }
}
</script>