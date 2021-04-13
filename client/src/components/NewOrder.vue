<template>
    <div>
        <img src="@/assets/addorder.png" width=750px heigth=150px alt="Add Order">
        <b-container fluid="md">
            <b-form @submit.prevent="insertOrder">

            <div class="form-group">
                <b-form-input v-model="order.vendorName" placeholder="Vendor Name" id="vendorName" disabled></b-form-input>
                <span v-if="!$v.order.vendorName.required && $v.order.vendorName.$dirty" class="text-danger">Vendor name is required</span>
            </div>

            <div class="form-group">
                <b-row>
                    <b-col cols="14" md="10">
                        <b-form-select v-model="order.productName" :options="products" class="mb-3" value-field="productName"
                            text-field="productName" disabled-field="notEnabled" @change="vendorSelected" :select-size="5">
                            <template #first>
                                <b-form-select-option value=null disabled>--Select Product To Purchase--</b-form-select-option>
                            </template>
                                <span v-if="!$v.order.productName.required && $v.order.productName.$dirty" class="text-danger">Please select a product to order</span>
                        </b-form-select>
                    </b-col>

                    <b-col align-self="center">
                        <label for="sb-inline">Product Quantity:</label>
                        <b-form-spinbutton v-model="order.quantity" id="sb-inline" placeholder="--" inline @change="findTotal">
                        </b-form-spinbutton> <br>
                        <span v-if="!$v.order.quantity.required && $v.order.quantity.$dirty" class="text-danger">Product quantity is required</span>                 
                    </b-col>
                </b-row>
            </div>

            
            <div class="form-group">
                <b-input-group prepend="$">
                    <b-form-input v-model="order.total" id="total" disabled placeholder="Grand Total (taxes included)"></b-form-input>
                    <span v-if="!$v.order.total.required && $v.order.total.$dirty" class="text-danger">Please fill out the product order fields above for your total</span>
                </b-input-group>
            </div>

            <b-row align-h="center">
                <b-button class="darkmode-ignore" v-bind:to="'Orders'" variant="danger">Cancel</b-button>
                <b-button class="darkmode-ignore" variant="success" type="submit">Place Order</b-button>
            </b-row>
        </b-form>
        </b-container>
        
    </div>
</template>

<script>
    import {required,alpha} from "vuelidate/lib/validators";
    import services from '../services'
    export default {
        name: "NewOrder",
        data() {
            return {
                order: {
                    vendorName: null,
                    productName: null,
                    quantity: null,
                    total: null,
                },
                products: [],
            }
        },
        validations:{
            order:{
                vendorName: {
                    required,
                    alpha
                },
                productName: {
                    required,
                },
                quantity: {
                    required
                },
                total: {
                    required
                },
            }
        },
        methods: {
            getProductNames() {
                services.getProducts().then(response => {
                    this.products = response[0]
                    console.log(this.products)
                })
            },
            vendorSelected() {
                this.order.quantity = 1
                for (let i = 0; i < this.products.length; i++) {
                    if (this.products[i].productName == this.order.productName) {
                        this.order.vendorName = this.products[i].vendor
                    }
                }
                this.findTotal()
            },
            findTotal() {
                for (let i = 0; i < this.products.length; i++) {
                    if (this.products[i].productName == this.order.productName) {
                        this.order.total = Math.round(((this.products[i].price * this.order.quantity) + Number
                            .EPSILON) * 100) / 100
                    }
                }
            },
            insertOrder() {
                this.$v.$touch();
                if (!this.$v.$invalid) {
                    try {
                        services.insertOrder(this.order).then((order) => {
                            this.$router.push({name: 'Orders'})
                            return order
                        }).catch((error) => {
                            this.status = error
                        })
                    } catch (error) {
                        this.status = error
                    }
                }
            }
        },
        created() {
            this.getProductNames()
        }
    }
</script>

<style scoped>

</style>