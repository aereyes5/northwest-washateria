<template>
    <div>
        <b-form @submit.prevent="updateVendor">
        <b-form-input v-model="vendor.vendorID" id="vendorID" disabled></b-form-input>
        <b-form-input v-model="vendor.vendorName" placeholder="Vendor Name" id="vendorName"></b-form-input>
        <b-form-select v-model="vendor.type" placeholder="--Select One--" id="type">
                <b-form-select-option value=null disabled>Vendor Type</b-form-select-option>
                <b-form-select-option value="Supplier">Supplier</b-form-select-option>
                <b-form-select-option value="Company">Company</b-form-select-option>
            </b-form-select>

        <b-form-select
            v-model="vendor.country"
            :options="countries"
            class="mb-3"
            value-field="countryName"
            text-field="countryName"
            disabled-field="notEnabled"
            ></b-form-select>

        <!-- <b-form-input v-model="vendor.country" placeholder="Country" id="country"></b-form-input> -->
        <b-form-input v-model="vendor.vendorContact" placeholder="Vendor Contact" id="vendorContact"></b-form-input>
        <b-form-input v-model="vendor.phoneNumber" placeholder="Phone Number" id="phoneNumber"></b-form-input>
        <b-form-input v-model="vendor.email" placeholder="Email" id="email"></b-form-input>
        <b-button class="darkmode-ignore" variant="primary" type="submit">Submit</b-button>
        </b-form>
        <b-button class="darkmode-ignore" v-bind:to="'vendors'" variant="primary">Cancel</b-button>
    </div>
</template>

<script>
import services from '../services'
export default {
    name: "UpdateVendor",
    data(){
        return{
            info:[],
            vendor:{
                vendorID: null,
                vendorName: null,
                type: null,
                country: null,
                vendorContact: null,
                phoneNumber: null,
                email: null,
            },
            countries:[],
            
        }
    },

    methods: {
        findVendor(){
            this.vendor.vendorID = this.$store.getters.getVendorID
            this.getVendorByID(this.vendor.vendorID)

        },

        getVendorByID(vendorID){
            try{
                services.getVendorByID(vendorID).then(response => {
                    this.info = response
                    this.vendor.vendorID = this.info[0].vendorID;
                    this.vendor.vendorName = this.info[0].vendorName;
                    this.vendor.type = this.info[0].type;
                    this.vendor.country = this.info[0].country;
                    this.vendor.vendorContact = this.info[0].vendorContact;
                    this.vendor.phoneNumber = this.info[0].phoneNumber;
                    this.vendor.email = this.info[0].email;
                    console.log(this.info)
                    
                })
                }catch(err){
                    console.log(err)
                }
        },

        getCountries(){
            services.getCountries().then(response => {
            this.countries = response
            console.log(this.countries)
            })
        },

        updateVendor(){
            services.updateVendor(this.vendor)
            this.$router.push({name: 'Vendors'})

        }
    },

    mounted(){
        this.getCountries()
        this.findVendor()
    }
}
</script>