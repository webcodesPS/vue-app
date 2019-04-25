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
    }
});
