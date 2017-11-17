<template>
  <div class="posts-item">
    <span>{{ msg }}</span>
  </div>
</template>

<script>
  export default {
    name: 'PostsItem',
    data() {
      return {
        msg: 'posts item!'
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
