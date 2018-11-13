import Vue from 'vue';
import Router from 'vue-router';

//主体
import Index from '@/views/index'; //首页
import IndexView from '@/views/index-view'; //默认显示
import Classify from '@/views/classify';
import ShopCar from '@/views/shopcar';
import User from '@/views/user';

//专题、商品列表详情
import ModuleInfo from '@/views/moduleInfo';
import TopicInfo from '@/views/topicInfo';

//商品详情
import ShopInfo from '@/views/shopInfo';

Vue.use(Router);

const router = new Router({
  mode:'history', //嘿斯吹模式. [^/#/g]
  routes: [
    {
      path: '/index',
      name: 'Index',
      component:Index,
      meta:{keepAlive:true},
      children:[
        {
          path:'/index',
          component:IndexView,
          meta:{keepAlive:true}
        },
        {
          path:'/index/classify',
          component:Classify
        },
        {
          path:'/index/shopcar',
          component:ShopCar
        },
        {
          path:'/index/user',
          component:User
        }
      ]
    },
    {
      path:'/moduleInfo/:type',
      component:ModuleInfo
    },
    {
      path:'/cutShopInfo/:id',
      component:()=>import('@/views/cutShopDataInfo')//路由懒加载
    },
    {
      path:'/shopInfo/:id',
      component:ShopInfo
    },
    {
      path:'/topic/:id',
      component:TopicInfo
    },
    {
      path:'/confirmOrder',
      component:()=>import('@/views/confirmOrder')
    },
    {
      path:'/confirmPayment',
      component:()=>import('@/views/confirmPayment')
    },
    {
      path:'/mySite',
      component:()=>import('@/views/mySite')
    },
    {
      path:'/addSite',
      component:()=>import('@/views/addSite')
    },
    {
      path:'/login',
      component:()=>import('@/views/login')
    },
    {
      path:'/myOrderList',
      component:()=>import('@/views/myOrderList')
    },
    {
      path: '*',
      redirect: (to) => {
        if (to.path === '/') {
          return '/index'
        }
      }
    }
  ]
})

export default router