<template>
    
</template>

<script>
import services from '../services'

export default {
  name: "Products",
  data(){
      return{
          products: [],
          fields: ['selected','productID','productName', 'productPrice', 'vendorID'],
          selectedMode: 'single',
          selected: [],
          productID: null,
          status: "",
          status2: ""
      }
   },
   methods: {
       getCustomers(){

       },
       deleteProdut(){

       },
       onRowSelected(items){
           this.selected = items
           console.log(items)
       },
       getProductById(){
           if(this.productId == null){
               this.status = "Please enter product name"
           }
           else{
               this.status = "";
               try{
                   //function to find product by name
               }catch(err){
                   console.log(err)
               }
           }
       },
       
   },
   created(){
       this.getProducts()
   }
}
</script>

<style scoped>

</style>