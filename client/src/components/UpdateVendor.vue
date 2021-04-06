<template>
    <div>
        <b-form @submit.prevent="updateVendor">
        <b-form-input v-model="vendor.vendorID" id="vendorID" disabled></b-form-input>
        <b-form-input v-model="vendor.vendorName" placeholder="Vendor Name" id="vendorName"></b-form-input>
        <b-form-input v-model="vendor.type" placeholder="Type" id="type"></b-form-input>

        <!-- <b-form-select v-model="vendor.country">                   
            <option v-for="(selectOption, indexOpt) in countryOptions" 
            :key="indexOpt"
            :value="selectOption"
            >
                {{ selectOption }} - {{ selectOption == vendor.country }}
            </option>
        </b-form-select> -->
        
        
        <b-form-select v-model="vendor.country" name="country" id="country" :options="countryOptions">
        <template v-slot:first>
        <option value="" disabled>-- Select One --</option>
        </template>
        </b-form-select>

        <!-- <b-form-input v-model="vendor.country" placeholder="Country" id="country"></b-form-input> -->
        <b-form-input v-model="vendor.vendorContact" placeholder="Vendor Contact" id="vendorContact"></b-form-input>
        <b-form-input v-model="vendor.phoneNumber" placeholder="Phone Number" id="phoneNumber"></b-form-input>
        <b-form-input v-model="vendor.email" placeholder="Email" id="email"></b-form-input>
        <b-button variant="primary" type="submit">Submit</b-button>
        </b-form>
        <b-button v-bind:to="'vendors'" variant="primary">Back</b-button>
    </div>
</template>

<script>
import services from '../services'
export default {
    name: "UpdateVendor",
    data(){
        return{
            info:[],
            vendor:{
                vendorID: null,
                vendorName: null,
                type: null,
                country: null,
                vendorContact: null,
                phoneNumber: null,
                email: null,
            },
            countries:[],
            countryOptions:[],
            
        }
    },

    methods: {
        findVendor(){
            this.vendor.vendorID = this.$store.getters.getVendorID
            this.getVendorByID(this.vendor.vendorID)

        },

        getVendorByID(vendorID){
            try{
                services.getVendorByID(vendorID).then(response => {
                    this.info = response
                    this.vendor.vendorID = this.info[0].vendorID;
                    this.vendor.vendorName = this.info[0].vendorName;
                    this.vendor.type = this.info[0].type;
                    this.vendor.country = this.info[0].country;
                    this.vendor.vendorContact = this.info[0].vendorContact;
                    this.vendor.phoneNumber = this.info[0].phoneNumber;
                    this.vendor.email = this.info[0].email;
                    console.log(this.info)
                    
                })
                }catch(err){
                    console.log(err)
                }
        },

        getCountries: function () {
            services.getCountries()
            .then(resp => {
            this.countries = resp
            for(let i = 0; i < this.countries.length; i++){
                let option = []
                for(let key in this.countries[i]){
                if(key == "countryID"){
                option["value"] = this.countries[i][key]
                }else if(key == "countryName"){
                option["text"] = this.countries[i][key]
                }

                }
                this.countryOptions.push(Object.assign({},option))
            }
            })
            .catch(err => {
            console.log(err)
            })
            
            },

        // getCountries(){
        //     services.getCountries().then(response => {
        //     this.countries2 = response
        //     console.log(this.countries2)
        //     })
        // }
    },

    mounted(){
        this.findVendor()
        this.getCountries()
    }
}
</script>