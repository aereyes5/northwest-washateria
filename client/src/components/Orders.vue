<template>
    <div>
        <img src="@/assets/Orders.png" width=750px heigth=150px alt="Orders">
        <br>
        <b-container fluid="md">
            <b-form-input placeholder="Search..." v-model="filter" type="search"></b-form-input>
            <p v-if="status2" class="danger font-italic font-weight-bold text-danger text-center">
            {{status2}}
            </p>

            <b-row>
                <b-col>
                    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
                </b-col>

                <b-col cols="12" md="8">
                    <b-button-group class="ml-4">                 
                        <b-button class="darkmode-ignore" v-bind:to="'new-order'" variant="success">Add New</b-button>
                        <b-button class="darkmode-ignore" variant="secondary" v-on:click="setOrderID">Update</b-button>
                        <b-button class="darkmode-ignore" v-bind:to="'order-report'" variant="primary">Generate Reports</b-button>

                    </b-button-group>
                </b-col>
            </b-row>

            <b-table :items="orders" :fields="fields" :select-mode="selectMode" :filter="filter" striped responsive="sm"
            ref="selectableTable" selectable hover @row-selected="onRowSelected"
            :per-page="perPage" :current-page="currentPage">
            </b-table>
        </b-container>

        
        
    </div>
</template>

<script>
    import services from '../services'
    export default {
        name: "Orders",
        data() {
            return {
                orders: [],
                fields: ['date', 'product', 'quantity', 'total', 'vendor', 'status'],
                selectMode: 'single',
                selected: [],
                orderID: null,
                status2: "",
                filter: "",
                perPage: 7,
                currentPage: 1
            }
        },
        methods: {
            getOrders() {
                services.getOrders().then(response => {
                    this.orders = response[0]
                    this.orderID = null
                    console.log(this.orders)
                }).catch(e => {
                    console.log(e);
                })
            },
            onRowSelected(items) {
                this.selected = items
                console.log(items)
            },
            setOrderID() {
                if (!Array.isArray(this.selected) || !this.selected.length) {
                    this.status2 = "Please select a record to update";
                } else {
                    this.updateOrders(this.selected[0].orderID)
                }
            },
            updateOrders(productOrderID) {
                this.$store.commit('oOrderID', {
                    productOrderID
                })
                this.$router.push({
                    name: 'UpdateOrders'
                })
            }
        },
        created() {
            this.getOrders()
        },
        computed: {
            rows(){
                return this.orders.length
            }
        }
    }
</script>

<style scoped>
.pagination {
margin: 0px !important;
}
</style>