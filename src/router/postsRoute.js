import PostsList from '@/components/Posts/List/index';
import PostsView from '@/components/Posts/ItemView/index';
import PostsForm from '@/components/Posts/Form';

export default [
  {
    path: '/posts',
    component: PostsList,
    name: 'PostsList',
    meta: {
      title: 'All Posts'
    }
  },
  {
    path: '/posts/new',
    component: PostsForm,
    name: 'PostsNew',
    meta: {
      title: 'Create Post'
    }
  },
  {
    path: '/users/:userId/posts',
    component: PostsList,
    name: 'UserPostsList',
    meta: {
      title: 'Posts List'
    }
  },
  {
    path: '/users/:userId/posts/:id',
    component: PostsView,
    name: 'PostsView',
    meta: {
      title: 'View Post'
    }
  },
  {
    path: '/users/:userId/posts/:id/edit',
    component: PostsForm,
    name: 'PostsEdit',
    meta: {
      title: 'Edit Post'
    }
  },
  {
    path: '*',
    redirect: '/not-found'
  }
];
