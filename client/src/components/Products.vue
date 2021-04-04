<template>
    
</template>

<script>

export default {
  name: "Products",
  data(){
      return{
          products: [],
          fields: ['selected','productID','productName', 'productPrice', 'vendorID'],
          selectedMode: 'single',
          selected: [],
          productName: null,
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
       getProductByName(){
           if(this.productName == null){
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