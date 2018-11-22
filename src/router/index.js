import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  // mode:'history', //嘿斯吹模式. [^/#/g]
  routes: [
    {
      path: '/index',
      name: 'Index',
      component:()=>import('@/views/index'),
      meta:{keepAlive:true},
      children:[
        {
          path:'/index',
          component:()=>import('@/views/index-view'),
          meta:{keepAlive:true}
        },
        {
          path:'/index/classify',
          component:()=>import('@/views/classify')
        },
        {
          path:'/index/shopcar',
          component:()=>import('@/views/shopcar')
        },
        {
          path:'/index/user',
          component:()=>import('@/views/user')
        }
      ]
    },
    {
      path:'/moduleInfo/:type',
      component:()=>import('@/views/moduleInfo')
    },
    {
      path:'/cutShopInfo/:id',
      component:()=>import('@/views/cutShopDataInfo')//路由懒加载
    },
    {
      path:'/shopInfo/:id',
      component:()=>import('@/views/shopInfo')
    },
    {
      path:'/topic/:id',
      component:()=>import('@/views/topicInfo')
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
      path:'/myOrderList/:type',
      component:()=>import('@/views/myOrderList')
    },
    {
      path:'/signIn',
      component:()=>import('@/views/signIn')
    },
    {
      path:'/discount',
      component:()=>import('@/views/discountCoupon')
    },
    {
      path:'/colllect',
      component:()=>import('@/views/collect')
    },
    {
      path:'/groupShop/:id',
      component:()=>import('@/views/groupShop')
    },
    {
      path:'/goCutPrice',
      component:()=>import('@/views/cutPrice')
    },
    {
      path:'/register',
      component:()=>import('@/views/register')
    },
    {
      path:'/evaluate',
      component:()=>import('@/views/commodityeValuate')
    },
    {
      path:'/myCutShopList',
      component:()=>import('@/views/myCutShopList')
    },
    {
      path:'/orderInfo',
      component:()=>import('@/views/orderInfo')
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