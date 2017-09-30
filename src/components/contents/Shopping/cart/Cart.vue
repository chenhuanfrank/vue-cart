<template>
  <div id="shop-list">
    <table class="table table-hover table-shop">
      <thead>
        <tr>
          <th>序号</th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(cart, index) in cartList'>
          <td>{{cart.id}}</td>
          <td>{{cart.name}}</td>
          <td>{{cart.price}}</td>
          <td>{{cart.num}}</td>
          <td>{{cart.price*cart.num}}</td>
          <td>
            <button @click="ard_actions('add_db', index)" type="button" class="btn btn-primary">+</button>
            <button @click="ard_actions('reduce_db', index)" type="button" class="btn btn-warning">-</button>
            <button @click="ard_actions('delete_db', index)" type="button" class="btn btn-danger">全部删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>  
</template>

<script>
  import {mapGetters} from 'vuex'
  
  export default {
    name: 'cart-list',
    computed: {
      // cartList () {
      //   return this.$store.getters.getCartList
      // }
      ...mapGetters({
        cartList: 'getCartList'
      })
    },
    methods: {
      ard_actions (types, index) {
        this.$store.dispatch('update_cur_cart_index', {index})
        this.$store.dispatch(types)
      }
    }
  }
</script>

<style scoped lang='less'>
  .table-shop{
      th, td{
        text-align: center;
      }
  }
</style>