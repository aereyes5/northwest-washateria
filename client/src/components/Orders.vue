<template>
    <div>
        <b-form-input placeholder="Search..." v-model="filter" type="search"></b-form-input>
        


        <b-button class="darkmode-ignore" v-bind:to="'new-order'" variant="success">Add New</b-button>
        <b-button class="darkmode-ignore" variant="secondary" v-on:click="setOrderID">Update</b-button>
        <!-- <b-button class="darkmode-ignore" variant="danger" v-on:click="deleteProduct">Cancel</b-button> -->

        <p v-if="status2" class="danger font-italic font-weight-bold text-danger text-center">
        {{status2}}
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
          orders: [],
          fields: ['date', 'product', 'quantity', 'total', 'vendor', 'status'],
          selectMode: 'single',
          selected: [],
          productOrderID: null,
          status2: "",
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
       onRowSelected(items){
           this.selected = items
           console.log(items)
       },
       setOrderID(){
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