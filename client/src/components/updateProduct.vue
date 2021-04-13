<template>
    <div>
        <img src="@/assets/updateproduct.png" width=750px heigth=150px alt="Update Product">
        <b-container fluid="md">
            <b-form @submit.prevent="updateProduct">
                <div class="form-group">
                     <b-form-input v-model="product.productID" id="productID" disabled></b-form-input>
                </div>

                <div class="form-group">
                    <b-form-input v-model="product.productName" placeholder="Enter Product Name" id="productName">
                    </b-form-input>
                    <span v-if="!$v.product.productName.required && $v.product.productName.$dirty" class="text-danger">Product name is required</span>
                    <span v-if="!$v.product.productName.isNameValid && $v.product.productName.$dirty" class="text-danger">Product name is invalid</span>
                </div>

                <div class="form-group">
                    <b-input-group prepend="$">
                        <b-form-input v-model="product.price" placeholder="Enter Product Price (e.g., 11.99)" id="price"></b-form-input>
                    </b-input-group>
                    <span v-if="!$v.product.price.required && $v.product.price.$dirty" class="text-danger">Product price is required</span>
                    <span v-if="!$v.product.price.decimal && $v.product.price.$dirty" class="text-danger">Product price must be a decimal</span>
                </div>

                <div class="form-group">
                    <b-form-input v-model="product.vendor" placeholder="Enter Vendor" id="vendor" disabled></b-form-input>
                </div>
            
            <b-row align-h="center">
                <b-button class="darkmode-ignore" v-bind:to="'Products'" variant="danger">Cancel</b-button>
                <b-button class="darkmode-ignore" variant="success" type="submit">Submit</b-button>
            </b-row>
            </b-form>
        </b-container>
       
    </div>
</template>

<script>
    import {required, helpers, decimal} from "vuelidate/lib/validators" 
    import services from '../services'
    export default {
        name: 'UpdateProduct',
        data() {
            return {
                info: [],
                product: {
                    productID: null,
                    productName: null,
                    price: null,
                    vendor: null
                }
            }
        },
        validations:{
            product:{
                productName: {
                    required,
                    isNameValid: helpers.regex('isNameValid',/^[a-z& ]*$/i)
                },
                price: {
                    required,
                    decimal
                }
            }
        },


        methods: {
            findProduct() {
                this.product.productID = this.$store.getters.getProductID
                this.getProductByProductID(this.product.productID)
            },
            getProductByProductID(productID) {
                try {
                    services.getProductByID(productID).then(response => {
                        this.info = response[0]
                        this.product.productID = this.info[0].productID 
                        this.product.productName = this.info[0].productName 
                        this.product.price = this.info[0].price 
                        this.product.vendor = this.info[0].vendor 
                    })
                } catch (err) {
                    console.log(err)
                }
            },
            updateProduct() {
                this.$v.$touch() 
                if (!this.$v.$invalid){
                    services.updateProduct(this.product)
                    this.$router.push({name: 'Products'})
                }
            }
        },
        mounted() {
            this.findProduct()
        }
    }
</script>

<style scoped>

</style>