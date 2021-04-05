<template>
    <div>
        <b-form @submit.prevent="addProduct">
            <b-form-input v-model="product.productName" placeholder="Enter Product Name" id="productName"></b-form-input>
            <b-form-input v-model="product.productPrice" placeholder="Enter Product Price" id="productPrice"></b-form-input>
            <b-form-input v-model="product.vendorID" placeholder="Enter Vendor ID" id="vendorID"></b-form-input>
            <b-button variant="primary" type="submit">Submit</b-button>
        </b-form>
    </div>
</template>

<script>
import services from '../services'
export default {
    name: 'NewProduct',
    data(){
        return{
            product: {
                productName: null,
                productPrice: null,
                vendorID: null
            }
        }
    },
    methods: {
        async addProduct(){
            try{
                const newProduct = services.insertProduct(this.product).then(product => {
                    this.$router.push({name: 'Products'})
                    return product
                }).catch((error) => {
                    this.status = error
                }) 
            }catch(error){
                this.status = error
            }
        }
    }
}
</script>

<style scoped>

</style>