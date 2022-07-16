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
    },
    newTodo(state, todo){
        return state.todos.unshift(todo)
    },
    // newTodo:(state, todo) => state.todos.unshift(todo)
};
const actions = {
    async fetchTodos(context){
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        context.commit('setTodos',response.data)
    },
    async addTodo({commit}, title){
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts",(
            {title, completed: false}
        ));
        commit('newTodo',response.data)
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}