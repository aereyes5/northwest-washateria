<template>
    <div>
        <b-form @submit.prevent="updateService">
            <b-form-input v-model="service.serviceName" id="serviceID" disabled></b-form-input>
            <b-form-input v-model="service.serviceName" placeholder="Enter Service Name" id="serviceName"></b-form-input>
            <b-form-input v-model="service.servicePrice" placeholder="Enter Service Price" id="servicePrice"></b-form-input>
            <b-button variant="primary" type="submit">Submit</b-button>
        </b-form>
    </div>
</template>

<script>
import services from '../services'
export default {
    name: 'UpdateService',
    data(){
        return{
            info: [],
            service:{
                serviceID: null,
                serviceName: null,
                servicePrice: null
            }
        }
    },
    methods: {
        findService(){
            this.service.serviceID = this.$store.getters.getServiceID
            this.getServiceByServiceID(this.service.serviceID)
        },
        getServiceByServiceID(serviceID){
            try{
                services.getServiceByID(serviceID).then(response => {
                    this.info = response[0]
                    this.service.serviceID = this.info[0].serviceID;
                    this.service.serviceName = this.info[0].serviceName;
                    this.service.serverPrice = this.info[0].serverPrice;
                })
            }catch(err){
                console.log(err)
            }
        },
        updateService(){
            services.updateService(this.service)
            this.$router.push({name: 'Services'})
        }
    },
    mounted(){
        this.findService()
    }
}
</script>

<style scoped>

</style>