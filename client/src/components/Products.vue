<template>
    <div>
        <!-- <b-input-group class="mt-3">
            <b-form-input placeholder="Enter Product's ID number" v-model="productID"></b-form-input>
            <b-input-group-append>
            <b-button variant="primary" v-on:click="getProductByID">Search</b-button>
            </b-input-group-append>
        </b-input-group> -->
        <b-form-input placeholder="Search..." v-model="filter" type="search"></b-form-input>

        <p v-if="status" class="danger font-italic font-weight-bold text-danger text-center">
            {{status}}
        </p>

        <b-button class="darkmode-ignore" v-bind:to="'new-product'" variant="success">Add New</b-button>
        <b-button class="darkmode-ignore" variant="secondary" v-on:click="setProductID">Update</b-button>
        <b-button class="darkmode-ignore" variant="danger" v-on:click="deleteProduct">Delete</b-button>

        <p v-if="status2" class="danger font-italic font-weight-bold text-danger text-center">
            {{status2}}
        </p>

        <b-table :items="products" :fields="fields" :select-mode="selectMode" :filter="filter" striped responsive="sm"
            ref="selectableTable" selectable hover @row-selected="onRowSelected" sticky-header="83vh">

        </b-table>
    </div>
</template>

<script>
    import services from '../services'
    export default {
        name: "Products",
        data() {
            return {
                products: [],
                fields: ['productName', 'price', 'vendor'],
                selectMode: 'single',
                selected: [],
                productID: null,
                status: "",
                status2: "",
                filter: ""
            }
        },
        methods: {
            getProducts() {
                services.getProducts().then(response => {
                    this.products = response[0]
                    this.productID = null
                    console.log(this.products)
                }).catch(e => {
                    console.log(e);
                })
            },
            deleteProduct() {
                if (!Array.isArray(this.selected) || !this.selected.length) {
                    this.status2 = "Please select a record to delete";
                } else {
                    this.status2 = "";
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
                    this.status = "";
                    try {
                        services.getProductByID(this.productID).then(response => {
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
                this.$store.commit('pProductID', {
                    productID
                })
                this.$router.push({
                    name: 'UpdateProduct'
                })
            }
        },
        created() {
            this.getProducts()
        }
    }
</script>

<style scoped>

</style>