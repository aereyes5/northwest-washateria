<template>
    <div>
        <img src="@/assets/updateservice.png" width=750px heigth=150px alt="Update Service">
        <b-container fluid="md">
            <b-form @submit.prevent="updateService">

                <div class="form-group">
                    <b-form-input v-model="service.serviceID" id="serviceID" disabled></b-form-input>
                </div>
                
                <div class="form-group">
                    <b-form-input v-model="service.serviceName" placeholder="Enter Service Name" id="serviceName">
                    </b-form-input>
                    <span v-if="!$v.service.serviceName.required && $v.service.serviceName.$dirty" class="text-danger">Service name is required</span>
            
                </div>
                
                <div class="form-group">
                    <b-input-group prepend="$">
                    <b-form-input v-model="service.servicePrice" placeholder="Enter Service Price (e.g., 11.99)" id="servicePrice">
                    </b-form-input>
                    </b-input-group>
                    <span v-if="!$v.service.servicePrice.required && $v.service.servicePrice.$dirty" class="text-danger">Service price is required</span>
                    <span v-if="!$v.service.servicePrice.decimal && $v.service.servicePrice.$dirty" class="text-danger">Service price must be a decimal value</span> 
                    </div>
                <b-row align-h="center">
                    <b-button class="darkmode-ignore" v-bind:to="'Services'" variant="danger">Cancel</b-button>
                    <b-button class="darkmode-ignore" variant="success" type="submit">Submit</b-button>
                </b-row>
        </b-form>
        </b-container>
        
    </div>
</template>

<script>
    import {required,decimal} from "vuelidate/lib/validators";
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
        validations:{
            service:{
                serviceName:{
                    required,
                    },
                servicePrice:{
                    required,
                    decimal
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
                this.$v.$touch();
                if(!this.$v.$invalid){
                    services.updateService(this.service)
                    this.$router.push({name: 'Services'})
                }
                
            }
        },
        mounted() {
            this.findService()
        }
    }
</script>

<style scoped>

</style>