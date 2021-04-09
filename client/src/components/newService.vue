<template>
    <div>
        <b-form @submit.prevent="addService">
            <b-form-input v-model="service.serviceName" placeholder="Enter Service Name" id="serviceName">
            </b-form-input>
            <b-form-input v-model="service.servicePrice" placeholder="Enter Service Price" id="servicePrice">
            </b-form-input>
            <b-button class="darkmode-ignore" variant="primary" type="submit">Submit</b-button>
        </b-form>
        <b-button class="darkmode-ignore" v-bind:to="'Services'" variant="primary">Cancel</b-button>
    </div>
</template>

<script>
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
        methods: {
            async addService() {
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
</script>

<style scoped>

</style>