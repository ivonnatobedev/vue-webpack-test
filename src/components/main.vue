<template>
  <div class="main">
    <app-header/>
    <div>
      <router-view/>
    </div>
    <app-footer/>
  </div>
</template>

<script>
  import AppHeader from './Header';
  import AppFooter from './Footer';

  export default {
    components: { AppHeader, AppFooter },
    name: 'Main',
    mounted: function () {
      /*console.log(this.$router, 'router');
      console.log(this.$route, 'route');*/
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    padding: 0;
    margin: 0 auto;
    width: 1024px;
  }
</style>
