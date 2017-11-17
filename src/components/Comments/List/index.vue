<template>
  <div class="comments-list">
    <span>{{ msg }}</span>
  </div>
</template>

<script>
  export default {
    name: 'CommentsList',
    data() {
      return {
        msg: 'comments list!'
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
