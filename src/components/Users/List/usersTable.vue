<template>
  <table class="users-table">
    <thead>
      <tr>
        <th v-for="item in tableHeader">
          <span>
            {{ item }}
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <list-item v-for="(user, i) in usersList" :user="user" :key="user.id" :index="i"/>
    </tbody>
  </table>
</template>

<script>
  import ListItem from './listItem';

  export default {
    name: 'UsersTable',
    props: ['usersList'],
    components: { ListItem },
    data: function () {
      return {
        tableHeader: ['#', 'Name', 'Email', 'Phone', 'Website', '']
      };
    }
  };
</script>

<style scoped>
  table {
    width: 100%;
  }
  
  table tbody tr:nth-child(odd) {
    background-color: #efe4d0;
  }

  table th {
    text-align: left;
  }
</style>
