import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        headerState: "To Dos",
        todosState: [
            { id: 1, text: "Lorem ipsum dolor sit amet"},
            { id: 2, text: "Lorem ipsum dolor sit amet"},
            { id: 3, text: "Lorem ipsum dolor sit amet"}
        ]
    },
    getters: {
        todosCount: state => {
            return state.todosState.length;
        }
    },
    mutations: {
        addNewTodo: (state: any, text) => {
            state.todosState.push({
                text: text
            });
            localStorage.setItem('todos', JSON.stringify(state.todosState));
        },
        deleteTodo: (state, todo) => {
           state.todosState.splice(state.todosState.indexOf(todo), 1);
           localStorage.setItem('todos', JSON.stringify(state.todosState));
        },
        editTodo: (state, event) => {
            const input  = event.target.parentElement.children[0].children;
            let alt = input[0].disabled ? false : true;
            input[0].disabled = alt;
            event.target.innerHTML = alt ? "edit" : "confirm";
            localStorage.setItem('todos', JSON.stringify(state.todosState));
        }
    },
    actions: {}
});
