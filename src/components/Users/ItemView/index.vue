<template>
  <div class="users-item">
    <span>{{ msg }}</span>
  </div>
</template>

<script>
  export default {
    name: 'UsersItem',
    data() {
      return {
        msg: 'User item!'
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
