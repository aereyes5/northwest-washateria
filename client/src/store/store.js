import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
    state:{
        user:{
            email: null,
            password: null,
            token: null
            
        },
        customer:{
            phoneNumber: null
        },
        product:{
            productID: null
        },
        employee:{
            employeeID: null
        }

    },
    getters:{
        isValidUser: state =>{
            return (state.user.token) ? true: false
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
        }

    },
    mutations:{
        loginUser(state, {email, password, token}){
            state.user.token = token
            state.user.email = email
            state.user.password = password
        },
        logoutUser(state,{token}){
            state.user.token = token
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
        } 

    }
})