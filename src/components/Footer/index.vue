<template>
  <div class="app-footer">
    <span>{{ msg }}</span>
  </div>
</template>

<script>
  export default {
    name: 'AppFooter',
    data() {
      return {
        msg: 'app footer!'
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .app-footer {
    height: 40px;
    background-color: #cccccc;
    text-align: center;
  }
</style>
