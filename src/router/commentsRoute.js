import CommentsList from '@/components/Comments/List/index';
import CommentsView from '@/components/Comments/ItemView/index';
import CommentsForm from '@/components/Comments/Form';

export default [
  {
    path: '/users/:userId/posts/:postId/comments',
    component: CommentsList,
    name: 'CommentsList',
    meta: {
      title: 'Comments List'
    }
  },
  {
    path: '/users/:userId/posts/:postId/comments/new',
    component: CommentsForm,
    name: 'CommentsNew',
    meta: {
      title: 'New Comment'
    }
  },
  {
    path: '/users/:userId/posts/:postId/comments/:id',
    component: CommentsView,
    name: 'CommentsView',
    meta: {
      title: 'Comment View'
    }
  },
  {
    path: '/users/:userId/posts/:postId/comments/:id/edit',
    component: CommentsForm,
    name: 'CommentsEdit',
    meta: {
      title: 'Edit comment'
    }
  },
  {
    path: '*',
    redirect: '/not-found'
  }
];
