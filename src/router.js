import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Ad from '@/components/Ads/Ad'
import AdReport from '@/components/Ads/AdReport'
import NewAd from '@/components/Ads/NewAd'
import Admin from '@/components/Auth/Admin'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Report from '@/components/Auth/Report'
import Users from '@/components/User/Users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/ad/:id',
      name: 'ad',
      component: Ad
    },
    {
      path: '/report',
      name: 'report',
      component: AdReport
    },
    {
      path: '/new',
      name: 'newAd',
      component: NewAd
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/reports',
      name: 'reports',
      component: Report
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    }
  ],
  mode: 'history'
})
