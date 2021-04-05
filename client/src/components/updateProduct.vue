<template>
    <div>
        <b-form @submit.prevent="updateProduct">
            <b-form-input v-model="product.productID" id="productID" disabled></b-form-input>
            <b-form-input v-model="product.productName" placeholder="Enter Product Name" id="productName"></b-form-input>
            <b-form-input v-model="product.productPrice" placeholder="Enter Product Price" id="productPrice"></b-form-input>
            <b-form-input v-model="product.vendorID" placeholder="Enter Phone Number" id="vendorID"></b-form-input>
            <b-button variant="primary" type="submit">Submit</b-button>
        </b-form>
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
                productPrice: null,
                vendorID: null
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
                services.getProductByProductID(productID).then(response => {
                    this.info = response
                    this.product.productID = this.info[0].productID;
                    this.product.productName = this.info[0].productName;
                    this.product.productPrice = this.info[0].productPrice;
                    this.product.vendorID = this.info[0].vendorID;
                })
            }catch(err){
                console.log(err)
            }
        },
        updateProduct(){
            services.updateProduct(this.customer)
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