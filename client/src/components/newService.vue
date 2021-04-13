<template>
    <div>
        <img src="@/assets/addservice.png" width=750px heigth=150px alt="Add Service">
        <b-container>
            <b-form @submit.prevent="addService">
            <div class="form-group">
                <b-form-input v-model="service.serviceName" placeholder="Enter Service Name" id="serviceName">
                </b-form-input>
                <span v-if="!$v.service.serviceName.required && $v.service.serviceName.$dirty" class="text-danger">Service name is required</span>
                <span v-if="!$v.service.serviceName.isNameValid && $v.service.serviceName.$dirty" class="text-danger">Service name is invalid</span>

            </div>
            
            <div class="form-group">
                <b-input-group prepend="$">
                        <b-form-input v-model="service.servicePrice" placeholder="Enter Service Price (e.g., 11.99, 0.25)" id="servicePrice">
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
    import {required,decimal, helpers} from "vuelidate/lib/validators";
    import services from '../services'
    export default {
        name: 'NewService',
        data() {
            return {
                service: {
                    serviceName: null,
                    servicePrice: null
                }
            }
        },
        validations:{
            service:{
                serviceName:{
                    required,
                    isNameValid: helpers.regex('isNameValid',/^[a-z&0-9 +]*$/i)
                },
                servicePrice:{
                    required,
                    decimal
                }
            }
        },
        methods: {
            async addService() {
                this.$v.$touch();
                if(!this.$v.$invalid){
                    try {
                    const newService = services.insertService(this.service).then(service => {
                        this.$router.push({
                            name: 'Services'
                        })
                        return service
                    }).catch((error) => {
                        this.status = error
                    })
                } catch (error) {
                    this.status = error
                }
                }
                
            }
        }
    }
</script>

<style scoped>

</style>