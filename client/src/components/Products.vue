<template>
    <div>

      <img src="@/assets/Products.png" width=750px heigth=150px alt="Products">
        <br>
      <b-container fluid="md">
        <b-form-input placeholder="Search..." v-model="filter" type="search"></b-form-input>

      <p v-if="status" class="danger font-italic font-weight-bold text-danger text-center">{{ status }}</p>
        <p v-if="status2" class="danger font-italic font-weight-bold text-danger text-center">{{ status2 }}</p>

        <b-row>
          <b-col>
            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" ></b-pagination>
          </b-col>

          <b-col cols="12" md="8">
             <b-button-group class="ml-5">
              <b-button class="darkmode-ignore" v-bind:to="'new-product'" variant="success" >Add New</b-button>
              <b-button class="darkmode-ignore" variant="secondary" v-on:click="setProductID">Update</b-button>
              <b-button class="darkmode-ignore" variant="danger" v-on:click="deleteProduct">Delete</b-button>
            </b-button-group>
          </b-col>
        </b-row>
        
       
    
    <b-table
      :items="products"
      :fields="fields"
      :select-mode="selectMode"
      :filter="filter"
      striped
      responsive="sm"
      ref="selectableTable"
      selectable
      hover
      @row-selected="onRowSelected"
      :per-page="perPage"
      :current-page="currentPage"
    >
    </b-table>
      </b-container>
      
  </div>
</template>

<script>
import services from "../services" 
export default {
  name: "Products",
  data() {
    return {
      products: [],
      fields: ["productName", "price", "vendor"],
      selectMode: "single",
      selected: [],
      productID: null,
      status: "",
      status2: "",
      filter: "",
      perPage: 7,
      currentPage: 1,
    } 
  },
  methods: {
    getProducts() {
      services
        .getProducts()
        .then((response) => {
          this.products = response[0] 
          this.productID = null 
          console.log(this.products) 
        })
        .catch((e) => {
          console.log(e) 
        }) 
    },
    deleteProduct() {
      if (!Array.isArray(this.selected) || !this.selected.length) {
        this.status2 = "Please select a record to delete" 
      } else {
        this.status2 = "" 
        services.deleteProduct(this.selected[0].productID) 
        this.getProducts() 
      }
    },
    onRowSelected(items) {
      this.selected = items 
      console.log(items) 
    },
    getProductByID() {
      if (this.productID == null) {
        this.status = "Please enter product ID" 
      } else {
        this.status = "" 
        try {
          services.getProductByID(this.productID).then((response) => {
            this.products = response 
            console.log(this.products) 
          }) 
        } catch (err) {
          console.log(err) 
        }
      }
    },
    setProductID() {
      if (!Array.isArray(this.selected) || !this.selected.length) {
        this.status2 = "Please select a record to update"
      } else {
        this.updateProduct(this.selected[0].productID) 
      }
    },
    updateProduct(productID) {
      this.$store.commit("pProductID", {
        productID,
      })
      this.$router.push({
        name: "UpdateProduct",
      })
    },
  },
  computed: {
    rows() {
      return this.products.length
    }
  },
  created() {
    this.getProducts()
  }
  
}
</script>

<style scoped>
.pagination {
margin: 0px !important 
}
</style>
