<template>
  <div class="posts-list">
    <span>{{ msg }}</span>
  </div>
</template>

<script>
  export default {
    name: 'PostsList',
    data() {
      return {
        msg: 'posts list!'
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
