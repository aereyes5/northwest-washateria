<template>
    <div>
        <b-form-input placeholder="Search..." v-model="filter" type="search"></b-form-input>
        
        <p v-if="status" class="danger font-italic font-weight-bold text-danger text-center">
        {{status}}
        </p>

        <b-button v-bind:to="'new-order'" variant="success">Add New</b-button>
        <b-button variant="secondary" v-on:click="setProductID">Update</b-button>
        <b-button variant="danger" v-on:click="deleteProduct">Cancel</b-button>

        <p v-if="status2" class="danger font-italic font-weight-bold text-danger text-center">
        {{status2}}
        </p>


        <b-table
        :items="order"
        :fields="fields"
        :select-mode="selectMode"
        :filter="filter"
        striped responsive="sm"
        ref="selectableTable"
        selectable
        hover
        @row-selected="onRowSelected"
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
          products: [],
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
           services.getProducts().then(response => {
               this.products = response[0]
               this.productID = null
               console.log(this.products)
           }).catch(e => {
               console.log(e);
           })
       },
    }
}


</script>

<style scoped>

</style>