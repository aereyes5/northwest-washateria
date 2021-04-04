import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Purchases from '@/components/Purchases'
import Orders from '@/components/Orders'
import PurchaseHistory from '@/components/PurchaseHistory'
import Invoices from '@/components/Invoices'
import Products from '@/components/Products'
import Services from '@/components/Services'
import Vendors from '@/components/Vendors'
import Customers from '@/components/Customers'
import Employees from '@/components/Employees'
import UserGuide from '@/components/UserGuide'
import Registration from '@/components/Registration'
import Login from '@/components/Login'
import Account from '@/components/Account'
import Update from '@/components/Update'
import NewCustomer from '@/components/NewCustomer'
import UpdateCustomer from '@/components/UpdateCustomer'

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
      path: '/purchases',
      name: 'Purchases',
      component: Purchases
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    },
    {
      path: '/PurchaseHistory',
      name: 'PurchaseHistory',
      component: PurchaseHistory
    },
    {
      path: '/Invoices',
      name: 'Invoices',
      component: Invoices
    },
    {
      path: '/Products',
      name: 'Products',
      component: Products
    },
    {
      path: '/Services',
      name: 'Services',
      component: Services
    },
    {
      path: '/Vendors',
      name: 'Vendors',
      component: Vendors
    },
    {
      path: '/customers',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/Employees',
      name: 'Employees',
      component: Employees
    },
    {
      path: '/userguide',
      name: 'UserGuide',
      component: UserGuide
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
      path: '/new-customer',
      name: 'NewCustomer',
      component: NewCustomer
    },
    {
      path: '/update-customer',
      name: 'UpdateCustomer',
      component: UpdateCustomer
    }

    
  ]
})
