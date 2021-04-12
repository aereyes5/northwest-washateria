<template>
    <div>
        <img src="@/assets/addproduct.png" width=750px heigth=150px alt="Add Product">
        <b-form @submit.prevent="addProduct">
            <div class="form-group">
                <b-form-input v-model="product.productName" placeholder="Enter Product Name" id="productName">
                </b-form-input>
                <span v-if="!$v.product.productName.required && $v.product.productName.$dirty" class="text-danger">Product name is required</span>
                <span v-if="!$v.product.productName.alpha && $v.product.productName.$dirty" class="text-danger">Product name must contain alpha characters</span>
            </div>

            <div class="form-group">
                <b-form-input v-model="product.productPrice" placeholder="Enter Product Price" id="productPrice">
                </b-form-input>
                <span v-if="!$v.product.productPrice.required && $v.product.productPrice.$dirty" class="text-danger">Product price is required</span>
                <span v-if="!$v.product.productPrice.decimal && $v.product.productPrice.$dirty" class="text-danger">Product price must be a decimal</span>
            </div>
            
           <div class="form-group">
                <b-form-input v-model="product.vendorName" placeholder="Enter Vendor Name" id="vendorID"></b-form-input>
                <span v-if="!$v.product.vendorName.required && $v.product.vendorName.$dirty" class="text-danger">Vendor name is required</span>
                <span v-if="!$v.product.vendorName.alpha && $v.product.vendorName.$dirty" class="text-danger">Vendor name must contain alpha characters</span>
           </div>

           <div class="form-group">
                <b-form-select v-model="product.vendorType" placeholder="Vendor Type" id="type">
                    <b-form-select-option value=null disabled>Vendor Type</b-form-select-option>
                    <b-form-select-option value="Supplier">Supplier</b-form-select-option>
                    <b-form-select-option value="Company">Company</b-form-select-option>
                </b-form-select>
                <span v-if="!$v.product.vendorType.required && $v.product.vendorType.$dirty" class="text-danger">Vendor type is required</span>
           </div>
            
           <div class="form-group">
                <b-form-select v-model="product.country" :options="countries" class="mb-3" value-field="countryName"
                text-field="countryName" disabled-field="notEnabled"></b-form-select>
                <span v-if="!$v.product.country.required && $v.product.country.$dirty" class="text-danger">Country is required</span>
           </div>
            
            <div class="form-group">
                <b-form-input v-model="product.vendorContact" placeholder="Enter Vendor's Contact Name"></b-form-input>
                <span v-if="!$v.product.vendorContact.required && $v.product.vendorContact.$dirty" class="text-danger">Vendor's contact name is required</span>
                <span v-if="!$v.product.vendorContact.alpha && $v.product.vendorContact.$dirty" class="text-danger">Vendor's contact name must contain alpha characters</span>
            </div>
           
           <div class="form-group">
                <b-form-input v-model="product.phoneNumber" placeholder="e.g.,8325551212"></b-form-input>
                <span v-if="!$v.product.phoneNumber.required && $v.product.phoneNumber.$dirty" class="text-danger">Vendor's contact name is required</span>
                <span v-if="(!$v.product.phoneNumber.numeric ||!$v.product.phoneNumber.minLength ||!$v.product.phoneNumber.maxLength) && $v.product.phoneNumber.$dirty" class="text-danger">
                    Please enter a valid phone number</span>
           </div>
          
          <div class="form-group">
                <b-form-input v-model="product.email" placeholder="Enter Email"></b-form-input>
                <span v-if="!$v.product.email.required && $v.product.email.$dirty" class="text-danger">Contact's email is required</span>
                <span v-if="!$v.product.email.email && $v.product.email.$dirty" class="text-danger">Please enter a valid email</span>
          </div>
            
            <b-row align-h="center">
                <b-button class="darkmode-ignore" v-bind:to="'Products'" variant="danger">Cancel</b-button>
                <b-button class="darkmode-ignore" variant="success" type="submit">Submit</b-button>
            </b-row>

        </b-form>
    </div>
</template>

<script>
    import {required, alpha, decimal, numeric, minLength, maxLength, email} from "vuelidate/lib/validators";
    import services from '../services'
    export default {
        name: 'NewProduct',
        data() {
            return {
                product: {
                    productName: null,
                    productPrice: null,
                    vendorName: null,
                    vendorType: null,
                    country: null,
                    vendorContact: null,
                    phoneNumber: null,
                    email: null
                },

                countries:[]
            }
        },
        validations:{
            product:{
                productName: {
                    required,
                    alpha
                },
                productPrice: {
                    required,
                    decimal
                },
                vendorName: {
                    required,
                    alpha
                },
                vendorType: {
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
                    minLength: minLength(10),
                    maxLength: maxLength(10),
                },
                email: {
                    required,
                    email
                }
            }
        },
        methods: {
            async addProduct() {
                this.$v.$touch();
                if (!this.$v.$invalid) {
                    try {
                        const newProduct = services.insertProduct(this.product).then(product => {
                            this.$router.push({
                                name: 'Products'
                            })
                            return product
                        }).catch((error) => {
                            this.status = error
                        })
                    } catch (error) {
                        this.status = error
                    }
                }
            },

            getCountries() {
                services.getCountries().then(response => {
                    this.countries = response
                    console.log(this.countries)
                })
            }
        },
        mounted(){
            this.getCountries()
        }
    }
</script>

<style scoped>

</style>