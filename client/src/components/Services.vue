<template>
    <div>
        <b-input-group class="mt-3">
            <b-form-input placeholder="Enter Service' ID number" v-model="serviceID"></b-form-input>
            <b-input-group-append>
            <b-button variant="primary" v-on:click="getServiceByID">Search</b-button>
            </b-input-group-append>
        </b-input-group>
        <p v-if="status" class="danger font-italic font-weight-bold text-danger text-center">
        {{status}}
        </p>

        <b-button variant="primary" v-on:click="getServices">View All</b-button>
        <b-button v-bind:to="'new-service'" variant="success">Add New</b-button>
        <b-button variant="secondary" v-on:click="setServiceID">Update</b-button>
        <b-button variant="danger" v-on:click="deleteService">Delete</b-button>

        <p v-if="status2" class="danger font-italic font-weight-bold text-danger text-center">
        {{status2}}
        </p>


        <b-table
        :items="services"
        :fields="fields"
        :select-mode="selectMode"
        striped responsive="sm"
        ref="selectableTable"
        selectable
        @row-selected="onRowSelected"
        sticky-header="83vh"
        >

        </b-table>
    </div>
</template>

<script>
import services from '../services'
export default {
    name: 'Employees',
    data(){
        return{
            services: [],
            fields: ['serviceID', 'serviceName', 'servicePrice'],
            selectMode: 'single',
            selected: [],
            employeeID: null,
            status: "",
            status2: ""
        }
    },
    methods: {
        getServices(){
            services.getServices().then(response => {
                this.services = response
                this.serviceID = null
                console.log(this.employees)
            }).catch(e => {
                console.log(e);
            })
        },

        deleteService(){
            if(!Array.isArray(this.selected) || !this.selected.length){
                this.status2 = "Please select a record to delete";
            }
            else{
                this.status2 = "";
                services.deleteService(this.selected[0].serviceID)
                window.location.reload()
            }
        },

        onRowSelected(items){
            this.selected = items
            console.log(items)
        },
        //Possibly change to name for search services?
        getServiceByID(){
            if(this.serviceID == null){
                this.status = "Please enter service ID"
            }
            else{
                this.status = "";
                try{
                    services.getServiceByID(this.serviceID).then(response => {
                        this.services = response
                        console.log(this.services)
                    })
                }catch(err){
                    console.log(err)
                }
            }
        },

        setServiceID(){
            if(!Array.isArray(this.selected) || !this.selected.length){
                this.status2 = "Please select a record to update"
            }
            else{
                this.updateService(this.selected[0].serviceID)
            }
        },

        updateService(serviceID){
            this.$store.commit('sServiceID', {serviceID})
            this.$router.push({name: 'UdateService'})
        }
    },
    created(){
        this.getServices()
    }
}
</script>

<style scoped>

</style>