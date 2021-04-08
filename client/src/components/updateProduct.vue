<template>
    <div>
        <b-form @submit.prevent="updateProduct">
            <b-form-input v-model="product.productID" id="productID" disabled></b-form-input>
            <b-form-input v-model="product.productName" placeholder="Enter Product Name" id="productName"></b-form-input>
            <b-form-input v-model="product.price" placeholder="Enter Product Price" id="productPrice"></b-form-input>
            <b-form-input v-model="product.vendor" placeholder="Enter Vendor" id="vendorID"></b-form-input>
            <b-button variant="primary" type="submit">Submit</b-button>
        </b-form>
        <b-button v-bind:to="'Products'" variant="primary">Back</b-button>
    </div>
</template>

<script>
import services from '../services'
export default {
    name: 'UpdateProduct',
    data(){
        return{
            info: [],
            product:{
                productID: null,
                productName: null,
                price: null,
                vendor: null
            }
        }
    },
    methods: {
        findProduct(){
            this.product.productID = this.$store.getters.getProductID
            this.getProductByProductID(this.product.productID)
        },
        getProductByProductID(productID){
            try{
                services.getProductByID(productID).then(response => {
                    this.info = response[0]
                    this.product.productID = this.info[0].productID;
                    this.product.productName = this.info[0].productName;
                    this.product.price = this.info[0].price;
                    this.product.vendor = this.info[0].vendor;
                })
            }catch(err){
                console.log(err)
            }
        },
        updateProduct(){
            services.updateProduct(this.product)
            this.$router.push({name: 'Products'})
        }
    },
    mounted(){
        this.findProduct()
    }
}
</script>

<style scoped>

</style>