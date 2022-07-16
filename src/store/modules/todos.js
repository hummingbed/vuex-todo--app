import axios from 'axios';

const state = {
    todos: []
};

const getters = {
    allTodos(state) {
        return state.todos
    } 
};

const mutations = {
    setTodos(state, todos){
        return state.todos = todos
    }
};
const actions = {
    async fetchTodos({commit}){
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        commit('setTodos',response.data)
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}