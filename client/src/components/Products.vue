<template>
   <div>


     <b-input-group class="mt-3">
            <b-form-input placeholder="Enter Product's ID number" v-model="productID"></b-form-input>
            <b-input-group-append>
            <b-button variant="primary" v-on:click="getProductByID">Search</b-button>
            </b-input-group-append>
        </b-input-group>
        <p v-if="status" class="danger font-italic font-weight-bold text-danger text-center">
        {{status}}
        </p>


        <b-button v-bind:to="'new-product'" variant="success">Add New</b-button>
        <b-button variant="secondary" v-on:click="setProductID">Update</b-button>
        <b-button variant="danger" v-on:click="deleteProduct">Delete</b-button>

        <p v-if="status2" class="danger font-italic font-weight-bold text-danger text-center">
        {{status2}}
        </p>


        <b-table
        :items="products"
        :fields="fields"
        :select-mode="selectMode"
        responsive="sm"
        ref="selectableTable"
        selectable
        @row-selected="onRowSelected"
        >
        <!-- Example scoped slot for select state illustrative purposes -->
        <template #cell(selected)="{ rowSelected }">
            <template v-if="rowSelected">
            <span aria-hidden="true">&check;</span>
            <span class="sr-only">Selected</span>
            </template>
            <template v-else>
            <span aria-hidden="true">&nbsp;</span>
            <span class="sr-only">Not selected</span>
            </template>
        </template>
        </b-table>
      
 <!--       <b-table
        :items="products"
        :fields="fields"
        :select-mode="selectMode"
        responsive="sm"
        ref="selectableTable"
        selectable
        @row-selected="onRowSelected"
        >
        <template #cell(selected)="{ rowSelected }">
            <template v-if="rowSelected">
            <span aria-hidden="true">&check;</span>
            <span class="sr-only">Selected</span>
            </template>
            <template v-else>
            <span aria-hidden="true">&nbsp;</span>
            <span class="sr-only">Not selected</span>
            </template>
        </template>
        </b-table> -->
    </div>   
</template>

<script>
import services from '../services'
export default {
  name: "Products",
  data(){
      return{
          products: [],
          fields: ['selected','productID','productName', 'productPrice', 'vendorID'],
          selectMode: 'single',
          selected: [],
          productID: null,
          status: "",
          status2: ""
      }
   },
   methods: {
       getProducts(){
           services.getProducts().then(response => {
               this.products = response
               console.log(this.products)
           }).catch(e => {
               console.log(e);
           })
       },

       deleteProduct(){
           if(!Array.isArray(this.selected) || !this.selected.length){
               this.status2 = "Please select a record to delete";
           }
           else{
               this.status2 = "";
               services.deleteProduct(this.selected[0].productID)
               window.location.reload()
           }
       },

       onRowSelected(items){
           this.selected = items
           console.log(items)
       },

       getProductByID(){
           if(this.productID == null){
               this.status = "Please enter product ID"
           }
           else{
               this.status = "";
               try{
                   services.getProductByID(this.productID).then(response => {
                       this.products = response
                       console.log(this.products)
                   })
               }catch(err){
                   console.log(err)
               }
           }
       },

       setProductID(){
           if(!Array.isArray(this.selected) || !this.selected.length){
               this.status2 = "Please select a record to update"
           }
           else{
               this.updateProduct(this.selected[0].productID)
           }
       },

       updateProduct(productID){
           this.$store.commit('pProductID', {productID})
           this.$router.push({name: 'UpdateProduct'})
       }
   },
   created(){
       this.getProducts()
   }
}
</script>

<style scoped>

</style>