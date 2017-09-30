<template>
	<div class="shop-list">
		<table class="table table-hover table-boreded table-shop">
			<thead>
        <tr>
          <th>序号</th>
          <th>菜名</th>
          <th>价格</th>
          <th>数量</th>
          <th>Actions</th>
        </tr>
			</thead>
			<tbody>
				<tr v-for = '(shop,index) in shop_list'>
					<td>{{shop.id}}</td>
					<td>{{shop.name}}</td>
					<td>{{shop.price}}</td>
          <td>{{shop.num || 0 }}</td>
          <td>
            <button @click='add(shop)' type="button" class="btn btn-primary">{{ shop.num ? '+' : '添加购物车'}}</button>
            <button @click='reduce(shop)' type="button" class="btn btn-danger" v-show='shop.num>0'>-</button>
          </td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
// import {mapMutations} from 'vuex'

export default {
  name: 'shop-list',
  data () {
    return {
      shop_list: [{
        id: 1,
        name: 'A',
        price: 12
      }, {
        id: 2,
        name: 'B',
        price: 13
      }, {
        id: 3,
        name: 'C',
        price: 14
      }]
    }
  },
  mounted () {
    var cartList = this.$store.state.shopping.cartList
    for (var cartIndex in cartList) {
      for (var shopIndex in this.shop_list) {
        if (cartList[cartIndex].id === this.shop_list[shopIndex].id) {
          this.$set(this.shop_list, shopIndex, cartList[cartIndex])
          break
        }
      }
    }
  },
  methods: {
    add (shop) {
      var id = shop.id
      this.$store.dispatch('check_db', {id})
      var curIndex = this.$store.state.shopping.curIndex
      if (curIndex !== -1) {
        this.$store.dispatch('add_db')
      } else {
        this.$set(shop, 'num', 1)
        this.$store.dispatch('create_db', {shop})
      }
    },
    reduce (shop) {
      var id = shop.id
      this.$store.dispatch('check_db', {id})
      this.$store.dispatch('reduce_db')
    }
  }
}
</script>

<style scoped lang='less'>
.table-shop {
	th, td {
		text-align: center;
	}
}
</style>