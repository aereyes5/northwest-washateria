<template>
    <div>
        <b-form @submit.prevent="insertOrder">
        <b-form-input v-model="order.vendorName" placeholder="Vendor Name" id="vendorName" disabled></b-form-input>
        

        <b-form-select
            v-model="order.productName"
            :options="products"
            class="mb-3"
            value-field="productName"
            text-field="productName"
            disabled-field="notEnabled"
            @change="vendorSelected"
            ></b-form-select>
                
        <b-form-spinbutton v-model="order.quantity" id="sb-inline" placeholder="--" inline @change="findTotal"></b-form-spinbutton>
        <b-form-input v-model="order.total" id="total" disabled></b-form-input>

        <b-button class="darkmode-ignore" variant="primary" type="submit">Place Order</b-button>
        </b-form>
        <b-button class="darkmode-ignore" v-bind:to="'Orders'" variant="danger">Cancel</b-button>
    </div>
</template>

<script>
import services from '../services'
export default {
    name: "NewOrder",
    data(){
        return{
            order:{
                vendorName: null,
                productName: null,
                quantity: null,
                total: null,
            },
            products:[],

        }
    },

    methods: {

        getProductNames(){
            services.getProducts().then(response => {
            this.products = response[0]
            console.log(this.products)
            })
        },

        vendorSelected(){
            this.order.total = null
            this.order.quantity = null
            for(let i = 0; i < this.products.length; i++){
                if(this.products[i].productName == this.order.productName){
                    this.order.vendorName = this.products[i].vendor
                }
            }
        },

        findTotal(){
            for(let i = 0; i < this.products.length; i++){
                if(this.products[i].productName == this.order.productName){
                    this.order.total = Math.round(((this.products[i].price * this.order.quantity) + Number.EPSILON) * 100) / 100
                    
                }
            }
        },

        async insertOrder(){
            try{
                services.insertOrder(this.order).then(order => {
                    this.$router.push({name: 'Orders'})
                    return order
                }).catch((error) => {
                    this.status = error
                }) 
            }catch(error){
                this.status = error
            }
        }
    },
    created(){
        this.getProductNames()
    }
}
</script>