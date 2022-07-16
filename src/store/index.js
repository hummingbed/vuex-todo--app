import { createStore } from 'vuex'
import todos from './modules/todos'

export default createStore({
  modules: {
    todos
  }
})

// import Vuex from 'vuex'
// import Vue from 'vue'
// import todos from './modules/todos'
// import { createStore } from 'vuex'

// Vue.use(Vuex);

// export default createStore({
//   modules:{
//     todos
//   }
// })

