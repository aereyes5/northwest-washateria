<template>
    <div>
        <b-form @submit.prevent="insertVendor">
            <b-form-input v-model="vendor.vendorName" placeholder="Vendor Name" id="vendorName"></b-form-input>
            <b-form-select v-model="vendor.type" placeholder="Vendor Type" id="type">
                <b-form-select-option value=null disabled>Vendor Type</b-form-select-option>
                <b-form-select-option value="Supplier">Supplier</b-form-select-option>
                <b-form-select-option value="Company">Company</b-form-select-option>
            </b-form-select>

            <b-form-select v-model="vendor.country" :options="countries" class="mb-3" value-field="countryName"
                text-field="countryName" disabled-field="notEnabled"></b-form-select>

            <!-- <b-form-input v-model="vendor.country" placeholder="Country" id="country"></b-form-input> -->
            <b-form-input v-model="vendor.vendorContact" placeholder="Vendor Contact Name" id="vendorContact">
            </b-form-input>
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
        methods: {
            getCountries() {
                services.getCountries().then(response => {
                    this.countries = response
                    console.log(this.countries)
                })
            },
            async insertVendor() {
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
        },
        mounted() {
            this.getCountries()
        }
    }
</script>

<style scoped>

</style>