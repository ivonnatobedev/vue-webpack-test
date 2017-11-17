import UsersList from '@/components/Users/List/index';
import UsersView from '@/components/Users/ItemView/index';
import UsersForm from '@/components/Users/Form';

export default [
  {
    path: '/users',
    component: UsersList,
    name: 'UsersList',
    meta: {
      title: 'Users List'
    }
  },
  {
    path: '/users/new',
    component: UsersForm,
    name: 'UsersNew',
    meta: {
      title: 'New User'
    }
  },
  {
    path: '/users/:id',
    component: UsersView,
    name: 'UsersView',
    meta: {
      title: 'View User'
    }
  },
  {
    path: '/users/:id/edit',
    component: UsersForm,
    name: 'UsersEdit',
    meta: {
      title: 'Edit user'
    }
  },
  {
    path: '*',
    redirect: '/not-found'
  }
];
