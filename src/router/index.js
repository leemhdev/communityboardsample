import Vue from 'vue'
import VueRouter from 'vue-router'
// 자동으로 생성된거 삭제
// import Home from '../views/Home.vue'
// PostListPage 컴포넌트를 추가한다
import PostListPage from '@/pages/PostListPage'
import PostViewPage from '@/pages/PostViewPage'
import Signup       from '@/pages/Signup'

Vue.use(VueRouter)

// 라우터가 히스토리 모드로 작동하도록 설정
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PostListPage',
      component: PostListPage
    },
    {
      path: '/post/:postId',
      name: 'PostViewPage',
      component: PostViewPage,
      props: true
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
});

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router
