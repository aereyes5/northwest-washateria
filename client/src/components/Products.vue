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
       getProductById(){
           if(this.productID == null){
               this.status = "Please enter product name"
           }
           else{
               this.status = "";
               try{
                   services.getProductByProductID(this.productID).then(response => {
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
           this.$store.commit('productID', {productID})
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