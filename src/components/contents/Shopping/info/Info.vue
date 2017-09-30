<template>
  <div class="cart-info">
    <div class='item'>总数：<strong>{{cartInfos.total_nums}}</strong></span></div>
    <div class='item'>总价：<strong>{{cartInfos.total_price}}</strong></span></div>
    <div class="item pull-right btn btn-danger" @click="clear_db">清空购物车</div>
  </div>
</template>

<script>
  export default {
    name: 'cart-info',
    computed: {
      cartInfos () {
        return this.$store.getters.cartInfos
      }
    },
    methods: {
      clear_db () {
        this.$store.dispatch('clear_local_db')
      }
    }
  }
</script>

<style scoped>
  .cart-info{
      font-size: 20px;
      text-align: left;
      .item{
          display: inline-block;
          margin-right: 20px;
      }
  }
</style>