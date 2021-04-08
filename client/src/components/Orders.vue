<template>
    <div>
        <b-form-input placeholder="Search..." v-model="filter" type="search"></b-form-input>
        


        <b-button v-bind:to="'new-order'" variant="success">Add New</b-button>
        <b-button variant="secondary" v-on:click="setProductID">Update</b-button>
        <!-- <b-button variant="danger" v-on:click="deleteProduct">Cancel</b-button> -->

        <p v-if="status" class="danger font-italic font-weight-bold text-danger text-center">
        {{status}}
        </p>


        <b-table
        :items="orders"
        :fields="fields"
        :select-mode="selectMode"
        :filter="filter"
        striped responsive="sm"
        ref="selectableTable"
        selectable
        hover
        sticky-header="83vh"
        >

        </b-table>
    </div>
</template>

<script>
import services from '../services'
export default {
    name: "Orders",
    data(){
        return{
          orders: [],
          fields: ['date', 'product', 'quantity', 'total', 'vendor', 'status'],
          selectMode: 'single',
          selected: [],
          orderID: null,
          status: "",
          filter:""
        }
    },

    methods:{
        getOrders(){
           services.getOrders().then(response => {
               this.orders = response[0]
               this.productOrderID = null
               console.log(this.orders)
           }).catch(e => {
               console.log(e);
           })
       },
       setProductID(){
           if(!Array.isArray(this.selected) || !this.selected.length){
                this.status2 = "Please select a record to update";
            }
            else{
                this.updateOrders(this.selected[0].productOrderID)
            }
       },
        updateOrders(productOrderID){
            this.$store.commit('oOrderID', {productOrderID})
            this.$router.push({name: 'UpdateOrders'})
        }
    },
    created(){
        this.getOrders()
    }
}


</script>

<style scoped>

</style>