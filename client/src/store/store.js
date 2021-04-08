import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
    state:{
        user:{
            loginID: null,
            username: null,
            password: null,
            access: null
            
        },
        
        customer:{
            phoneNumber: null
        },
        
        product:{
            productID: null
        },
        employee:{
            employeeID: null
        },
        vendor:{
            vendorID: null
        },
        service:{
            serviceID: null
        }


    },
    getters:{
        isValidUser: state =>{
            return (state.user.loginID) ? true: false
        },
        getAccountInfo: state => {
            return state.user.email
        },
        getToken: state => {
            return state.user.token
        },
        getPhoneNumber: state => {
            return state.customer.phoneNumber
        },
        getProductID: state => {
            return state.product.productID
        },
        getEmployeeID: state => {
            return state.employee.employeeID
        },
        getVendorID: state => {
            return state.vendor.vendorID
        },
        getServiceID: state => {
            return state.service.serviceID
        }

    },
    mutations:{
        loginUser(state, {loginID, username, password, access}){
            state.user.loginID = loginID
            state.user.username = username
            state.user.password = password
            state.user.access = access
        },
        logoutUser(state,{loginID}){
            state.user.loginID = loginID
        },
        customerPhoneNumber(state,{phoneNumber}){
            state.customer.phoneNumber = phoneNumber
        },
        //Named pProductID bc of other variable productID
        pProductID(state,{productID}){
            state.product.productID = productID
        },
        eEmployeeID(state,{employeeID}){
            state.employee.employeeID = employeeID
        }, 
        setVendorID(state,{vendorID}){
            state.vendor.vendorID = vendorID
        },
        sServiceID(state,{serviceID}){
            state.service.serviceID = serviceID
        }

    }
})