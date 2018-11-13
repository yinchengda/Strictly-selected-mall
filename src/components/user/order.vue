<template>
    <div class="user-order">
        <div class="order-title">
           <div class="title-main">
                        <i class="iconfont icon-dingdan"></i> 我的订单
           </div>
           <div class="title-sub-icon">
               <router-link to="/myOrderList">
                   <i class="iconfont icon-jiantouyoubian"></i>
                </router-link>
           </div>
        </div>
        <div class="order-main">
            <ul>
                <li>
                    <i class="iconfont icon-walllet"></i>
                    <p>待付款</p>
                </li>
                <li>
                    <i class="iconfont icon-daifahuo"></i>
                    <p>待发货</p>
                </li>
                <li>
                    <i class="iconfont icon-daishouhuo"></i>
                    <p>待收货</p>
                </li>
                <li>
                    <i class="iconfont icon-daipingjia"></i>
                    <p>待评价</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    
</script>
<style>
</style>
