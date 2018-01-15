import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import AboutPage from '@/components/AboutPage'
import LoginPage from '@/components/LoginPage'
import MassUploadPage from '@/components/MassUploadPage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'aboutPage',
      component: AboutPage
    },
    {
      path: '/aboutPage',
      name: 'aboutPage',
      component: AboutPage
    },
    {
      path: '/loginPage',
      name: 'loginPage',
      component: LoginPage
    },
    {
      path: '/massUploadPage',
      name: 'massUploadPage',
      component: MassUploadPage
    }
  ]
})
