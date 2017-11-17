<template>
  <div class="app-header">
    <ul>
      <li v-for="nav in navTab">
        <router-link :to="nav.link" active-class="active-link" exact>
          {{nav.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'AppHeader',
    data() {
      return {
        navTab: [
          {
            name: 'Home',
            link: '/'
          },
          {
            name: 'Users',
            link: '/users'
          },
          {
            name: 'All posts',
            link: '/posts'
          }
        ]
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .app-header {
    background-color: #cccccc;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    margin: 0;
  }

  li {
    display: inline-block;
    padding: 10px;
  }

  li a {
    text-decoration: none;
    color: #535353;
  }

  li:hover {
    background-color: #a7ffc9;
  }

  .active-link {
    background-color: #a7ffc9;
  }
</style>
