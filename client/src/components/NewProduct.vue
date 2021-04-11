<template>
    <div>
        <img src="@/assets/addproduct.png" alt="Add Product">
        <b-form @submit.prevent="addProduct">
            <b-form-input v-model="product.productName" placeholder="Enter Product Name" id="productName">
            </b-form-input>
            <b-form-input v-model="product.productPrice" placeholder="Enter Product Price" id="productPrice">
            </b-form-input>
            <b-form-input v-model="product.vendorName" placeholder="Enter Vendor Name" id="vendorID"></b-form-input>
            <b-form-select v-model="product.vendorType" placeholder="Vendor Type" id="type">
                <b-form-select-option value=null disabled>Vendor Type</b-form-select-option>
                <b-form-select-option value="Supplier">Supplier</b-form-select-option>
                <b-form-select-option value="Company">Company</b-form-select-option>
            </b-form-select>            
            <b-form-select v-model="product.country" :options="countries" class="mb-3" value-field="countryName"
                text-field="countryName" disabled-field="notEnabled"></b-form-select>            
            <b-form-input v-model="product.vendorContact" placeholder="Enter Vendor Contact Name" id="vendorID"></b-form-input>
            <b-form-input v-model="product.phoneNumber" placeholder="Enter Phone Number" id="vendorID"></b-form-input>
            <b-form-input v-model="product.email" placeholder="Enter Email" id="vendorID"></b-form-input>

            <b-button class="darkmode-ignore" variant="success" type="submit">Submit</b-button>
        </b-form>
        <b-button class="darkmode-ignore" v-bind:to="'Products'" variant="danger">Cancel</b-button>
    </div>
</template>

<script>
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
        methods: {
            async addProduct() {
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