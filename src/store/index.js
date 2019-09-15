import Vue from 'vue'
import Vuex from 'vuex'
import { fetchItem } from '../util/api'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      items: {}
    },
    mutations: {
      setItem (state, { id, item }) {
        Vue.set(state.items, id, item)
      }
    },
    actions: {
      fetchItem ({ commit }, id) {
        return fetchItem(id).then(res => {
          console.log('store actions fetchItem:', id, res.data)
          commit('setItem', { id, item: res.data })
        })
      }
    }
  })
}
