import Vue from 'vue'
import Router from 'vue-router'
import Garage from '@/components/Garage'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Profile from '@/pages/account/Profile'
import EditProfile from '@/pages/account/EditProfile'
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: "Home",
      component: Home ,
      meta: { requiresAuth:false}
    },

    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: { requiresAuth: true , roles:['Admin', 'Driver']},
      children: [
        {
          path: '/profile/edit',
          component: EditProfile,
          meta: { requiresAuth: true , roles:['Admin', 'Driver']}
        }
      ]
    },
    {
      path: '/garage',
      name: 'Garage', // <1>
      component: Garage ,
     // meta: { requiresAuth: true , roles:['Admin', 'Driver']}
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

router.beforeEach((to, from, next) => {
  const authUser = JSON.parse(window.localStorage.getItem('vuex'))
  if(!to.meta.requiresAuth && !to.meta.roles) {
  return next()
}
if(!authUser || !authUser.user.token) {
  return next({name:'Login'})
}

if (to.meta.roles.includes(authUser.user.data.role)) {
  return next()
} else {
  return next({name:'Garage'})
}
})

export default router
/*
  , {
    path: '/login/login',
    name: 'login/login',
    component: Login
  }, {
    path: '/login/forgetPwd',
    name: 'login/forgetPwd',
    component(resolve) {
      require.ensure(['@/components/login/forgetPwd.vue'], () => {
        resolve(require('@/components/login/forgetPwd.vue'));
    });
    }
  }, {
    path: '/login/forgetPwd2',
    name: 'login/forgetPwd2',
    component(resolve) {
      require.ensure(['@/components/login/forgetPwd2.vue'], () => {
        resolve(require('@/components/login/forgetPwd2.vue'));
    });
    }
  }, {
    path: '/login/forgetPwd3',
    name: 'login/forgetPwd3',
    component(resolve) {
      require.ensure(['@/components/login/forgetPwd3.vue'], () => {
        resolve(require('@/components/login/forgetPwd3.vue'));
    });
    }
  }, {
    path: '/login/register',
    name: 'login/register',
    component(resolve) {
      require.ensure(['@/components/login/register.vue'], () => {
        resolve(require('@/components/login/register.vue'));
    });
    }
  },
  */
