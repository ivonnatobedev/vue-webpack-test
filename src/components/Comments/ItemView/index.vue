<template>
  <div class="comments-item">
    <span>{{ msg }}</span>
  </div>
</template>

<script>
  export default {
    name: 'CommentsItem',
    data() {
      return {
        msg: 'comments item!'
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
