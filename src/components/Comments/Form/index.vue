<template>
  <div class="comments-form">
    <span>{{ msg }}</span>
  </div>
</template>

<script>
  export default {
    name: 'CommentsForm',
    data() {
      return {
        msg: 'comments form!'
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
