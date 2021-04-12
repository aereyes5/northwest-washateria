<template>
    <div>
        <img src="@/assets/Services.png" width=750px heigth=500px alt="Services">
        <b-form-input placeholder="Search..." v-model="filter" type="search"></b-form-input>
        <p v-if="status" class="danger font-italic font-weight-bold text-danger text-center">
            {{status}}
        </p>

        <b-button class="darkmode-ignore" v-bind:to="'new-service'" variant="success">Add New</b-button>
        <b-button class="darkmode-ignore" variant="secondary" v-on:click="setServiceID">Update</b-button>
        <b-button class="darkmode-ignore" variant="danger" v-on:click="deleteService">Delete</b-button>

        <p v-if="status2" class="danger font-italic font-weight-bold text-danger text-center">
            {{status2}}
        </p>

        <b-table :items="services" :fields="fields" :select-mode="selectMode" :filter="filter" striped responsive="sm"
            ref="selectableTable" selectable @row-selected="onRowSelected" sticky-header="83vh">

        </b-table>
    </div>
</template>

<script>
    import services from '../services'
    export default {
        name: 'Services',
        data() {
            return {
                services: [],
                fields: ['serviceName', 'servicePrice'],
                selectMode: 'single',
                selected: [],
                serviceID: null,
                status: "",
                status2: "",
                filter: ""
            }
        },
        methods: {
            getServices() {
                services.getServices().then(response => {
                    this.services = response
                    this.serviceID = null
                }).catch(e => {
                    console.log(e);
                })
            },
            deleteService() {
                if (!Array.isArray(this.selected) || !this.selected.length) {
                    this.status2 = "Please select a record to delete";
                } else {
                    this.status2 = "";
                    services.deleteService(this.selected[0].serviceID)
                    this.getServices()
                }
            },
            onRowSelected(items) {
                this.selected = items
                console.log(items)
            },
            getServiceByID() {
                if (this.serviceID == null) {
                    this.status = "Please enter service ID"
                } else {
                    this.status = "";
                    try {
                        services.getServiceByID(this.serviceID).then(response => {
                            this.services = response
                            console.log(this.services)
                        })
                    } catch (err) {
                        console.log(err)
                    }
                }
            },
            setServiceID() {
                if (!Array.isArray(this.selected) || !this.selected.length) {
                    this.status2 = "Please select a record to update"
                } else {
                    this.updateService(this.selected[0].serviceID)
                }
            },
            updateService(serviceID) {
                this.$store.commit('sServiceID', {
                    serviceID
                })
                this.$router.push({
                    name: 'UpdateService'
                })
            }
        },
        created() {
            this.getServices()
        }
    }
</script>

<style scoped>

</style>