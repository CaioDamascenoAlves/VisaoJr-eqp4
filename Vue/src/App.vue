<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
@media (max-width: 992px) {
  .navbar-nav .dropdown-menu {
    position: relative;
    float: none;
    background-color: transparent;
    border: none;
    box-shadow: none;
  }
}
</style>
