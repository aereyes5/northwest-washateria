<template>
    <div>
         <b-table :items="vendors" :fields="fields" striped responsive="sm">
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

          <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
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

        }
    },
    methods: {
        getVendors(){
            services.getVendors().then(response => {
                this.vendors = response
                console.log(this.vendors)
            })
        }
    },

    created(){
        this.getVendors()
    }
}
</script>