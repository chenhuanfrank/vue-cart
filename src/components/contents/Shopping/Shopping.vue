<template>
  <div class="shopping">
    <h3>商品信息</h3>
    <shop-list></shop-list>
    <cart-list></cart-list>
    <info-list></info-list>
  </div>
</template>

<script>
  import List from './list/List'
  import Cart from './cart/Cart'
  import Info from './info/Info'
  export default {
    name: 'shopping',
    components: {
      ShopList: List,
      CartList: Cart,
      InfoList: Info
    }
  }
</script>

<style scoped>
h3 {
  text-align: center;
}
</style>