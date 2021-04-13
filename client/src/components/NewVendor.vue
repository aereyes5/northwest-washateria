<template>
    <div>
        <img src="@/assets/addvendor.png" width=750px heigth=150px alt="Add Vendor">
        <b-container fluid="md">
            <b-form @submit.prevent="insertVendor">
            <div class="form-group">
                <b-form-input v-model="vendor.vendorName" placeholder="Enter Vendor Name" id="vendorName"></b-form-input>
                <span v-if="!$v.vendor.vendorName.required && $v.vendor.vendorName.$dirty" class="text-danger">Vendor name is required</span>
                <span v-if="!$v.vendor.vendorName.isNameValid && $v.vendor.vendorName.$dirty" class="text-danger">Vendor name is invalid</span>
            </div>
            
            <div class="form-group">
                <b-form-select v-model="vendor.type" placeholder="Vendor Type" id="type">
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
                <b-form-input v-model="vendor.vendorContact" placeholder="Enter Vendor Contact Name (e.g., Jane Doe)" id="vendorContact">
                </b-form-input>
                <span v-if="!$v.vendor.vendorContact.required && $v.vendor.vendorContact.$dirty" class="text-danger">Vendor contact name is required</span>
                <span v-if="!$v.vendor.vendorContact.isNameValid && $v.vendor.vendorContact.$dirty" class="text-danger">Vendor contact name must only contain characters</span>

            </div>
            
            <div class="form-group">
                <b-form-input v-model="vendor.phoneNumber" placeholder="Enter Contact's Phone Number (e.g., 8325551212)" id="phoneNumber"></b-form-input>
                <span v-if="!$v.vendor.phoneNumber.required && $v.vendor.phoneNumber.$dirty" class="text-danger">Contact's phone number is required</span>
                <span v-if="(!$v.vendor.phoneNumber.numeric || !$v.vendor.phoneNumber.minLength || !$v.vendor.phoneNumber.maxLength) && $v.vendor.phoneNumber.$dirty" class="text-danger"
                >Please enter a valid phone number</span>
            </div>
            
            <div class="form-group">
                <b-form-input v-model="vendor.email" placeholder="Enter Contact's Email (e.g., jdoe@sample.com)" id="email"></b-form-input>
                <span v-if="!$v.vendor.email.required && $v.vendor.email.$dirty" class="text-danger">Contact's email is required</span>
                <span v-if="!$v.vendor.email.email && $v.vendor.email.$dirty" class="text-danger">Please enter a valid email</span>     
            </div>

            <b-row align-h="center">
                <b-button class="darkmode-ignore" v-bind:to="'Vendors'" variant="danger">Cancel</b-button>
                <b-button class="darkmode-ignore" variant="success" type="submit">Submit</b-button>
            </b-row>
            
        </b-form>
        </b-container>
        
    </div>
</template>

<script>
    import {required,minLength,maxLength,helpers,email,numeric} from "vuelidate/lib/validators" 
    import services from '../services'
    export default {
        name: "NewVendor",
        data() {
            return {
                info: [],
                vendor: {
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
                    isNameValid: helpers.regex('isNameValid',/^[a-z0-9& ]*$/i),

                },
                type: {
                    required
                },
                country: {
                    required
                },
                vendorContact: {
                    required,
                    isNameValid: helpers.regex('isNameValid',/^[a-z ]*$/i),
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
            getCountries() {
                services.getCountries().then(response => {
                    this.countries = response
                    console.log(this.countries)
                })
            },
            async insertVendor() {
                this.$v.$touch()
                console.log(this.$v.$invalid)
                if(!this.$v.$invalid){ 
                    try {
                        services.insertVendor(this.vendor).then(vendor => {
                            this.$router.push({
                                name: 'Vendors'
                            })
                            return vendor
                        }).catch((error) => {
                            this.status = error
                        })
                    } catch (error) {
                        this.status = error
                    }
                }
            }
            
        },
        mounted() {
            this.getCountries()
        }
    }
</script>

<style scoped>

</style>