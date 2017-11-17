<template>
  <div class="posts-form">
    <span>{{ msg }}</span>
  </div>
</template>

<script>
  export default {
    name: 'PostsForm',
    data() {
      return {
        msg: 'posts form!'
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
