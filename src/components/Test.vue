<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <p>{{ testValue }}</p>
    <p>{{ testLength }}</p>
  </div>
</template>

<script>
  //import { store } from '../store/testStore';

  export default {
    name: 'Test',
    data() {
      return {
        msg: 'Test msg!'
      };
    },
    computed: {
      testValue() {
        return this.$store.getters.getTest;
      },
      testLength() {
        return this.$store.getters.getTestLength;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
