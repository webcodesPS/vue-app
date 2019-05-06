import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        headerState: "To Dos",
        todosState: [
            { id: 0, text: "Lorem ipsum dolor..." },
            { id: 1, text: "Lorem ipsum dolor..." },
            { id: 2, text: "Lorem ipsum dolor..." }
        ]
    },
    getters: {
        todosCount: state => {
            return state.todosState.length;
        }
    },
    mutations: {
        addNewTodo: (state, text) => {
            // console.log(text, state.todosState.length)
            state.todosState.push({
                id: state.todosState.length,
                text: text
            });
            localStorage.setItem('todos', JSON.stringify(state.todosState));
            console.log(state.todosState);
        },
        deleteTodo: (state, todo) => {
            state.todosState.splice(state.todosState.indexOf(todo), 1);
            localStorage.setItem('todos', JSON.stringify(state.todosState));
        },
        editTodo: (state, event) => {
            const input = event.target.parentElement.children[0].children;
            state.todosState[event.target.value].text = input[0].value;
            // console.log(input[0].value, event.target.value)
            let isDisabled = input[0].disabled ? false : true;
            input[0].disabled = isDisabled;
            input[0].focus();
            event.target.innerHTML = isDisabled ? "edit" : "confirm";
            event.target.style.backgroundColor = isDisabled ? null : "#90f19c";
            // localStorage.setItem('todos', JSON.stringify(state.todosState));
        }
    },
    actions: {}
});
//# sourceMappingURL=store.js.map