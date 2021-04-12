<template>
    <div>
        <img src="@/assets/updateorder.png" width=750px heigth=150px alt="Update Order">
        <b-form @submit.prevent="updateOrder">
            <b-form-input v-model="orders.productOrderID" id="productOrderID" disabled></b-form-input>
            <b-form-datepicker v-model="orders.orderDate" id="orderDate" disabled></b-form-datepicker>
            <b-form-input v-model="orders.productName" id="productName" disabled></b-form-input>
            <b-form-input v-model="orders.orderQuantity" id="orderQuantity" disabled></b-form-input>
            <b-form-input v-model="orders.orderTotalPrice" id="orderTotalPrice" disabled></b-form-input>
            <b-form-input v-model="orders.vendorName" id="vendorName" disabled></b-form-input>
            <b-form-select v-model="orders.statusName" id="statusName">
                <b-form-select-option value=null disabled>Please select an option</b-form-select-option>
                <b-form-select-option value="Pending">Pending</b-form-select-option>
                <b-form-select-option value="On the way">On the way</b-form-select-option>
                <b-form-select-option value="Delivered">Delivered</b-form-select-option>
                <b-form-select-option value="Canceled">Canceled</b-form-select-option>
            </b-form-select>
            <b-button class="darkmode-ignore" variant="success" type="submit">Submit</b-button>
        </b-form>
        <b-button class="darkmode-ignore" v-bind:to="'Orders'" variant="danger" type="submit">Cancel</b-button>
    </div>
</template>

<script>
    import services from '../services'
    export default {
        name: 'UpdateOrders',
        data() {
            return {
                info: [],
                orders: {
                    productOrderID: null,
                    orderDate: null,
                    productName: null,
                    orderQuantity: null,
                    orderTotalPrice: null,
                    vendorName: null,
                    statusName: null
                }
            }
        },
        methods: {
            findOrder() {
                this.orders.productOrderID = this.$store.getters.getOrderID
                this.getOrderByID(this.orders.productOrderID)
            },
            getOrderByID(productOrderID) {
                try {
                    services.getOrderByID(productOrderID).then(response => {
                        this.info = response
                        this.orders.productOrderID = this.info[0].orderID;
                        this.orders.orderDate = this.info[0].date;
                        this.orders.productName = this.info[0].product;
                        this.orders.orderQuantity = this.info[0].quantity;
                        this.orders.orderTotalPrice = this.info[0].total;
                        this.orders.vendorName = this.info[0].vendor;
                        this.orders.statusName = this.info[0].status;
                    })
                } catch (err) {
                    console.log(err)
                }
            },
            updateOrder() {
                services.updateOrderStatus(this.orders.productOrderID, this.orders.statusName)
                this.$router.push({
                    name: 'Orders'
                })
            }
        },
        mounted() {
            this.findOrder()
        }
    }
</script>

<style scoped>

</style>