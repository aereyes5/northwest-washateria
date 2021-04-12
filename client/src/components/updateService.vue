<template>
    <div>
        <img src="@/assets/updateservice.png" width=750px heigth=150px alt="Update Service">
        <b-form @submit.prevent="updateService">
            <b-form-input v-model="service.serviceID" id="serviceID" disabled></b-form-input>
            <b-form-input v-model="service.serviceName" placeholder="Enter Service Name" id="serviceName">
            </b-form-input>
            <b-form-input v-model="service.servicePrice" placeholder="Enter Service Price" id="servicePrice">
            </b-form-input>
            <b-button class="darkmode-ignore" variant="success" type="submit">Submit</b-button>
        </b-form>
        <b-button class="darkmode-ignore" v-bind:to="'Services'" variant="danger">Cancel</b-button>
    </div>
</template>

<script>
    import services from '../services'
    export default {
        name: 'updateService',
        data() {
            return {
                info: [],
                service: {
                    serviceID: null,
                    serviceName: null,
                    servicePrice: null
                }
            }
        },
        methods: {
            findService() {
                this.service.serviceID = this.$store.getters.getServiceID
                this.getServiceByServiceID(this.service.serviceID)
            },
            getServiceByServiceID(serviceID) {
                try {
                    services.getServiceByID(serviceID).then(response => {
                        this.info = response
                        this.service.serviceID = this.info.serviceID;
                        this.service.serviceName = this.info.serviceName;
                        this.service.servicePrice = this.info.servicePrice;
                        console.log(this.info)
                    })
                } catch (err) {
                    console.log(err)
                }
            },
            updateService() {
                services.updateService(this.service)
                this.$router.push({
                    name: 'Services'
                })
            }
        },
        mounted() {
            this.findService()
        }
    }
</script>

<style scoped>

</style>