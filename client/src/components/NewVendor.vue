<template>
    <div>
        <img src="@/assets/addvendor.png" width=750px heigth=150px alt="Add Vendor">
        <b-form @submit.prevent="insertVendor">
            <div class="form-group">
                <b-form-input v-model="vendor.vendorName" placeholder="Vendor Name" id="vendorName"></b-form-input>
                <span v-if="!$v.vendor.vendorName.required && $v.vendor.vendorName.$dirty" class="text-danger">Vendor name is required</span>
            </div>
            
            <div class="form-group">
                <b-form-select v-model="vendor.type" placeholder="Vendor Type" id="type">
                    <b-form-select-option value=null disabled>Vendor Type</b-form-select-option>
                    <b-form-select-option value="Supplier">Supplier</b-form-select-option>
                    <b-form-select-option value="Company">Company</b-form-select-option>
                </b-form-select>
                <span v-if="!$v.vendor.type.required && $v.vendor.type.$dirty" class="text-danger">Vendor type is required</span>
            </div>
            

            <div class="form-group">
                <b-form-select v-model="vendor.country" :options="countries" class="mb-3" value-field="countryName"
                text-field="countryName" disabled-field="notEnabled" ></b-form-select>
                <span v-if="!$v.vendor.country.required && $v.vendor.country.$dirty" class="text-danger">Please select a country</span>
            </div>
            
            <div class="form-group">
                <b-form-input v-model="vendor.vendorContact" placeholder="Vendor Contact Name" id="vendorContact">
                </b-form-input>
                <span v-if="!$v.vendor.vendorContact.required && $v.vendor.vendorContact.$dirty" class="text-danger">Vendor contact name is required</span>
            </div>
            
            <div class="form-group">
                <b-form-input v-model="vendor.phoneNumber" placeholder="Phone Number" id="phoneNumber"></b-form-input>
                <span v-if="!$v.vendor.phoneNumber.required && $v.vendor.phoneNumber.$dirty" class="text-danger">Contact's phone number is required</span>
                <span v-if="(!$v.vendor.phoneNumber.numeric ||!$v.vendor.phoneNumber.minLength ||!$v.vendor.phoneNumber.maxLength) && $v.vendor.phoneNumber.$dirty" class="text-danger"
                >Please enter a valid phone number</span>
            </div>
            
            <div class="form-group">
                <b-form-input v-model="vendor.email" placeholder="Email" id="email"></b-form-input>
                <span v-if="!$v.vendor.email.required && $v.vendor.email.$dirty" class="text-danger">Contact's email is required</span>
                <span v-if="!$v.vendor.email.email && $v.vendor.email.$dirty" class="text-danger">Please enter a valid email</span>     
            </div>

            <b-row align-h="center">
                <b-button class="darkmode-ignore" v-bind:to="'Vendors'" variant="danger">Cancel</b-button>
                <b-button class="darkmode-ignore" variant="success" type="submit">Submit</b-button>
            </b-row>
            
        </b-form>
    </div>
</template>

<script>
    import {required,minLength,maxLength,alpha,email,numeric} from "vuelidate/lib/validators";
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
                    alpha
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
            getCountries() {
                services.getCountries().then(response => {
                    this.countries = response
                    console.log(this.countries)
                })
            },
            async insertVendor() {
                this.$v.$touch();
                if (!this.$v.$invalid) {
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