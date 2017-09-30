import * as types from './mutations_types'

export default {
  [types.CREATE_DB] (state, shop) {
    state.cartList.push(shop)
  },
  [types.ADD_DB] (state) {
    state.cartList[state.curIndex].num++
  },
  [types.REDUCE_DB] (state) {
    state.cartList[state.curIndex].num--
    if (state.cartList[state.curIndex].num === 0) {
      state.cartList.splice(state.curIndex, 1)
    }
  },
  [types.CHECK_DB] (state, id) {
    state.curIndex = -1
    for (var i = 0; i < state.cartList.length; i++) {
      if (id === state.cartList[i].id) {
        state.curIndex = i
        break
      }
    }
  },
  [types.DELETE_DB] (state) {
    state.cartList[state.curIndex].num = 0
    state.cartList.splice(state.curIndex, 1)
  },
  [types.CLEAR_DB] (state) {
    state.cartList.forEach(function (item) {
      item.num = 0
    })
    state.cartList = []
    state.cartInfos.total_nums = 0
    state.cartInfos.total_price = 0
    localStorage.removeItem('cart_list')
  },
  [types.UPDATE_CUR_CART_INDEX] (state, index) {
    state.curIndex = index
  },
  [types.UPDATE_LOCAL_DATA] (state) {
    localStorage.setItem('cart_list', JSON.stringify(state.cartList))
  },
  [types.INITIAL_CART_INFO] (state) {
    state.cartInfos.total_nums = 0
    state.cartInfos.total_price = 0
    for (var i = 0; i < state.cartList.length; i++) {
      state.cartInfos.total_nums += state.cartList[i].num
      state.cartInfos.total_price += state.cartList[i].num * state.cartList[i].price
    }
  }
}
