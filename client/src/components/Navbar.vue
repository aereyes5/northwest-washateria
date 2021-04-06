<template>
<div>
 <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
    <b-navbar-brand v-bind:to="'/'">
      <img src="@/assets/genlogo.png" width="30" height="30" class="d-inline-block align-top" alt="nwwashateriaIcon">
      Northwest Washateria
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item  v-bind:to="'/'">Home</b-nav-item>
        <b-nav-item  v-bind:to="'Purchases'">Purchases</b-nav-item>
        <b-nav-item  v-bind:to="'Orders'">Orders</b-nav-item>
        <b-nav-item  v-bind:to="'PurchaseHistory'">PurchaseHistory</b-nav-item>
        <b-nav-item  v-bind:to="'Invoices'">Invoices</b-nav-item>
        <b-nav-item v-bind:to="'Products'">Products</b-nav-item>
        <b-nav-item  v-bind:to="'Services'">Services</b-nav-item>
        <b-nav-item  v-bind:to="'Vendors'">Vendors</b-nav-item>
        <b-nav-item  v-bind:to="'/customers'">Customers</b-nav-item>
      </b-navbar-nav>
        <b-nav-item v-b-tooltip.hover.bottom title="Employees" v-bind:to="'Employees'" v-if="userToken">Employees</b-nav-item>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item v-b-tooltip.hover.bottom title="Purchases" v-bind:to="'Purchases'" v-model="email" v-if="userToken">
            <b-icon icon="cart4" aria-label="Cart"></b-icon>
        </b-nav-item>
        <b-nav-item-dropdown right v-b-tooltip.hover.bottom title="User">
          <!-- Using 'button-content' slot -->
          <template #button-content>
              <b-icon icon="person-circle" aria-label="User"></b-icon>
          </template>
          <b-dropdown-item v-bind:to="'Account'" v-if="userToken">Account</b-dropdown-item>
          <b-dropdown-item v-bind:to="'Home'" v-if="userToken" @click="logout">Sign Out</b-dropdown-item>
          <b-dropdown-item v-bind:to="'Login'" v-if="!userToken">Sign In</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item v-bind:to="'UserGuide'" v-b-tooltip.hover.bottom title="User Guide">
            <b-icon  icon="question-circle" aria-label="User"></b-icon>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: "Navbar",
  data(){
    return{
    };
  },

  methods: {
    logout(){
      const token = null
      this.$store.commit('logoutUser', {token})
      this.$router.push('/')
      
    }
  },
  computed:{
    userToken(){
      return this.$store.getters.isValidUser
    }
  },


};
</script>