import * as types from './mutations_types'

export default {
  create_db: ({commit}, {shop}) => {
    commit(types.CREATE_DB, shop)
    commit(types.UPDATE_LOCAL_DATA)
    commit(types.INITIAL_CART_INFO)
  },
  add_db: ({commit}) => {
    commit(types.ADD_DB)
    commit(types.UPDATE_LOCAL_DATA)
    commit(types.INITIAL_CART_INFO)
  },
  reduce_db: ({commit}) => {
    commit(types.REDUCE_DB)
    commit(types.UPDATE_LOCAL_DATA)
    commit(types.INITIAL_CART_INFO)
  },
  delete_db: ({commit}) => {
    commit(types.DELETE_DB)
    commit(types.UPDATE_LOCAL_DATA)
    commit(types.INITIAL_CART_INFO)
  },
  check_db: ({commit}, {id}) => {
    commit(types.CHECK_DB, id)
  },
  clear_local_db: ({commit}) => {
    commit(types.CLEAR_DB)
  },
  update_cur_cart_index: ({commit}, {index}) => {
    commit(types.UPDATE_CUR_CART_INDEX, index)
    commit(types.INITIAL_CART_INFO)
  }
}
