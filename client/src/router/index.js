import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Registration from '@/components/Registration'
import Attractions from '@/components/Attractions'
import Purchases from '@/components/Purchases'
import Login from '@/components/Login'
import Faq from '@/components/Faq'
import Tickets from '@/components/Tickets'
import Account from '@/components/Account'
import Update from '@/components/Update'
import Customers from '@/components/Customers'
import NewCustomer from '@/components/NewCustomer'


Vue.use(Router)

export default new Router({
  mode: "history",
  hash: false,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    
    {
      path: '/attractions',
      name: 'Attractions',
      component: Attractions
    },
    {
      path: '/purchases',
      name: 'Purchases',
      component: Purchases
    },
    {
      path: '/FAQ',
      name: 'FAQ',
      component: Faq
    },
    {
      path: '/tickets',
      name: 'Tickets',
      component: Tickets
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/update',
      name: 'Update',
      component: Update
    },
    {
      path: '/customers',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/newCustomer',
      name: 'NewCustomer',
      component: NewCustomer
    }  
    
  ]
})
