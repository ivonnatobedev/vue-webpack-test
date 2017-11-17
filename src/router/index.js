import Vue from 'vue';
import Router from 'vue-router';
import { setPageTitle } from '../utils/helpers/routerHooks';
import usersRoute from './usersRoute';
import postsRoute from './postsRoute';
import commentsRoute from './commentsRoute';
import notFoundRoute from './notFound';
import homeRoute from './home';

Vue.use(Router);

const router = new Router({
  routes: [
    homeRoute,
    notFoundRoute,
    ...usersRoute,
    ...postsRoute,
    ...commentsRoute,
    {
      path: '*',
      redirect: '/not-found'
    }
  ],
});

router.beforeEach(setPageTitle);

export default router;
