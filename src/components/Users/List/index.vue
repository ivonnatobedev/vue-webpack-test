<template>
  <div class="users-list">
    <div>
      <h2>{{ title }}</h2>
      Add new user
      <action-button
        :text="'+'"
        :type="'success'"
        :size="'md'"
        :handleClick="onNewUser()"
      />
    </div>
    <users-table
      v-if="usersList.length > 0"
      :usersList="usersList"
    />
    <empty-list
      v-else
    />
  </div>
</template>

<script>
  import { getUsers } from '../../../store/actions';
  import UsersTable from './usersTable';
  import EmptyList from './emptyList';
  import ActionButton from '../../Common/Inputs/actionButton';

  export default {
    name: 'UsersList',
    components: { UsersTable, EmptyList, ActionButton },
    data() {
      return {
        title: 'All Users'
      };
    },
    created() {
      this.$store.dispatch(getUsers());
    },
    computed: {
      usersList: function () {
        return this.$store.getters.getUsersList;
      }
    },
    methods: {
      onNewUser: function () {
        const that = this;
        return function () {
          that.$router.push({ path: '/users/new' });
        };
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
