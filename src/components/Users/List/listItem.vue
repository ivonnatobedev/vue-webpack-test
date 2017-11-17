<template>
  <tr>
    <td>
      {{ index + 1 }}
    </td>
    <td>
      <router-link :to="`/users/${user.id}`">
        {{ user.name }}
      </router-link>
    </td>
    <td>
      {{ user.email }}
    </td>
    <td>
      {{ user.phone }}
    </td>
    <td>
      {{ user.website }}
    </td>
    <td>
      <action-button
        :text="'Edit'"
        :handleClick="onEdit(user)"
        :type="'success'"
        :size="'md'"
      />
      <action-button
        :text="'Delete'"
        :handleClick="onDelete(user)"
        :type="'danger'"
        :size="'md'"
      />
      <action-button
        :text="'Posts'"
        :handleClick="onPosts(user)"
        :type="'info'"
        :size="'md'"
      />
    </td>
  </tr>
</template>

<script>
  import ActionButton from '../../Common/Inputs/actionButton';

  export default {
    name: 'ListItem',
    props: ['user', 'index'],
    components: { ActionButton },
    methods: {
      onEdit: function (user) {
        return function (e) {
          e.preventDefault();
          console.log('edit', user);
        };
      },
      onDelete: function (user) {
        return function (e) {
          e.preventDefault();
          console.log('delete', user);
        };
      },
      onPosts: function (user) {
        const that = this;
        return function (e) {
          e.preventDefault();
          that.$router.push({ path: `/users/${user.id}/posts` });
          console.log('posts', user);
        };
      }
    }
  };
</script>

<style scoped>
  td:last-child {
    text-align: right;
  }
</style>
