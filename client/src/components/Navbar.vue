<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
      <b-navbar-brand v-bind:to="'/home'" v-if="userVerified">
        <img src="@/assets/nwlogolong.png" width="161" height="35" alt="nwlogolong">
      </b-navbar-brand>
      <b-navbar-brand v-bind:to="'/'" v-if="!userVerified">
        <img src="@/assets/nwlogolong.png" width="161" height="35" alt="nwlogolong">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-bind:to="'Products'" v-if="userVerified">Products</b-nav-item>
          <b-nav-item v-bind:to="'Services'" v-if="userVerified">Services</b-nav-item>
          <b-nav-item v-bind:to="'Invoices'" v-if="userVerified">Invoices</b-nav-item>
          <b-nav-item v-bind:to="'Customers'" v-if="userVerified && userAccess=='Admin'" >Customers</b-nav-item>
          <b-nav-item v-bind:to="'Employees'" v-if="userVerified && userAccess=='Admin'">Employees</b-nav-item>
          <b-nav-item v-bind:to="'Vendors'" v-if="userVerified && userAccess=='Admin'">Vendors</b-nav-item>
          <b-nav-item v-bind:to="'Orders'" v-if="userVerified && userAccess=='Admin'">Orders</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown right v-b-tooltip.hover.bottom v-if="userVerified" title="User">
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <b-icon icon="person-circle" aria-label="User"></b-icon>
            </template>
            <b-dropdown-item v-bind:to="'Account'" v-if="userVerified">Account</b-dropdown-item>
            <b-dropdown-item v-bind:to="'/'" v-if="userVerified" @click="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item v-bind:to="'UserGuide'" v-b-tooltip.hover.bottom title="User Guide">
            <b-icon icon="question-circle" aria-label="User"></b-icon>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: "Navbar",
    data() {
      return {};
    },
    methods: {
      logout() {
        const loginID = null
        this.$store.commit('logoutUser', {
          loginID
        })
        this.$router.push('/')
      }
    },
    computed: {
      userVerified() {
        return this.$store.getters.isValidUser
      },
      userAccess() {
        return this.$store.getters.getUserAccess
      }
    },
  };
</script>