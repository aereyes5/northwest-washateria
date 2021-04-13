<template>
    <div>
        <img src="@/assets/updatevendor.png" width=750px heigth=150px alt="Update Vendor">
        <b-container fluid="md">
            <b-form @submit.prevent="updateVendor">
                <div class="form-group">
                    <b-form-input v-model="vendor.vendorID" id="vendorID" disabled></b-form-input>
                </div>

                <div class="form-group">
                    <b-form-input v-model="vendor.vendorName" placeholder="Enter Vendor Name" id="vendorName"></b-form-input>
                    <span v-if="!$v.vendor.vendorName.required && $v.vendor.vendorName.$dirty" class="text-danger">Vendor name is required</span>
                </div>

                <div class="form-group">
                    <b-form-select v-model="vendor.type" placeholder="--Select Vendor Type--" id="type">
                        <b-form-select-option value=null disabled>- -Select Vendor Type- -</b-form-select-option>
                        <b-form-select-option value="Supplier">Supplier</b-form-select-option>
                        <b-form-select-option value="Company">Company</b-form-select-option>
                    </b-form-select>
                    <span v-if="!$v.vendor.type.required && $v.vendor.type.$dirty" class="text-danger">Vendor type is required</span>
                </div>

                <div class="form-group">
                    <b-form-select v-model="vendor.country" :options="countries" class="mb-3" value-field="countryName"
                    text-field="countryName" disabled-field="notEnabled" :select-size="5">
                     <template #first>
                        <b-form-select-option value=null disabled>--Select Country--</b-form-select-option>
                    </template> 
                    </b-form-select>
                    <span v-if="!$v.vendor.country.required && $v.vendor.country.$dirty" class="text-danger">Please select a country</span>
                </div>

                <div class="form-group">
                    <b-form-input v-model="vendor.vendorContact" placeholder="Enter Vendor Contact Name (e.g., Jane Doe)" id="vendorContact"></b-form-input>
                    <span v-if="!$v.vendor.vendorContact.required && $v.vendor.vendorContact.$dirty" class="text-danger">Vendor contact name is required</span>
                </div>

                <div class="form-group">
                    <b-form-input v-model="vendor.phoneNumber" placeholder="Enter Contact's Phone Number (e.g., 8325551212)" id="phoneNumber"></b-form-input>
                    <span v-if="!$v.vendor.phoneNumber.required && $v.vendor.phoneNumber.$dirty" class="text-danger">Contact's phone number is required</span>
                    <span v-if="(!$v.vendor.phoneNumber.numeric ||!$v.vendor.phoneNumber.minLength ||!$v.vendor.phoneNumber.maxLength) && $v.vendor.phoneNumber.$dirty" class="text-danger"
                    >Please enter a valid phone number</span>
                </div>

                <div class="form-group">
                    <b-form-input v-model="vendor.email" placeholder="Enter Contact's Email (e.g., jdoe@sample.com)" id="email"></b-form-input>
                    <span v-if="!$v.vendor.email.required && $v.vendor.email.$dirty" class="text-danger">Contact's email is required</span>
                    <span v-if="!$v.vendor.email.email && $v.vendor.email.$dirty" class="text-danger">Please enter a valid email</span>     
                </div>

                <b-row align-h="center">
                    <b-button class="darkmode-ignore" v-bind:to="'vendors'" variant="danger">Cancel</b-button>
                    <b-button class="darkmode-ignore" variant="success" type="submit">Submit</b-button>
                </b-row>
        </b-form>
        </b-container>
        
    </div>
</template>

<script>
    import {required,minLength,maxLength,alpha,email,numeric} from "vuelidate/lib/validators" 
    import services from '../services'
    export default {
        name: "UpdateVendor",
        data() {
            return {
                info: [],
                vendor: {
                    vendorID: null,
                    vendorName: null,
                    type: null,
                    country: null,
                    vendorContact: null,
                    phoneNumber: null,
                    email: null,
                },
                countries: [],
            }
        },
         validations:{
            vendor:{
                vendorName: {
                    required,
                },
                type: {
                    required
                },
                country: {
                    required
                },
                vendorContact: {
                    required,
                    alpha
                },
                phoneNumber: {
                    required,
                    numeric,
                    maxLength: maxLength(10),
                    minLength: minLength(10)
                },
                email: {
                    required,
                    email
                },
            }
        },
        methods: {
            findVendor() {
                this.vendor.vendorID = this.$store.getters.getVendorID
                this.getVendorByID(this.vendor.vendorID)
            },
            getVendorByID(vendorID) {
                try {
                    services.getVendorByID(vendorID).then(response => {
                        this.info = response
                        this.vendor.vendorID = this.info[0].vendorID 
                        this.vendor.vendorName = this.info[0].vendorName 
                        this.vendor.type = this.info[0].type 
                        this.vendor.country = this.info[0].country 
                        this.vendor.vendorContact = this.info[0].vendorContact 
                        this.vendor.phoneNumber = this.info[0].phoneNumber 
                        this.vendor.email = this.info[0].email 
                        console.log(this.info)
                    })
                } catch (err) {
                    console.log(err)
                }
            },
            getCountries() {
                services.getCountries().then(response => {
                    this.countries = response
                    console.log(this.countries)
                })
            },
            updateVendor() {
                this.$v.$touch() 
                if (!this.$v.$invalid){
                    services.updateVendor(this.vendor)
                    this.$router.push({
                        name: 'Vendors'
                    })
                }
                
            }
        },
        mounted() {
            this.getCountries()
            this.findVendor()
        }
    }
</script>

<style scoped>

</style>