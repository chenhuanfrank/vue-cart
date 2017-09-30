export default {
  cartList: localStorage.getItem('cart_list') ? JSON.parse(localStorage.getItem('cart_list')) : [],
  cartInfos: {
    total_nums: 0,
    total_price: 0
  },
  curIndex: -1
}
