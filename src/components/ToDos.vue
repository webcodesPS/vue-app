<template>
  <div class="todo">
    <h1>{{ header }}</h1>
    <form v-on:submit.prevent="">
      <input type="text" v-model="newTodoText">
      <button v-on:click="addNewTodo">add</button>
      <div class="row-item" v-for="(todo, index) in todos">
        <div>
          <p>{{ todo.text }}</p>
        </div>
        <button v-on:click="deleteTodo(todo)">remove</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { mapState } from 'vuex';
  import store from "../store";

@Component({
  computed: {
    ...mapState({
      header: 'headerState',
      todos: 'todosState'
    })
  }
})
export default class ToDos extends Vue {
  constructor() {
    super();
    if (localStorage.getItem('todos')) {
      store.state.todosState = JSON.parse(<string>localStorage.getItem('todos'));
    }
  }

  public newTodoText: string = "";
  public nextTodoId: number = 4;

  public addNewTodo() {
    store.state.todosState.push({
      id: this.nextTodoId++,
      text: this.newTodoText
    });
    localStorage.setItem('todos', JSON.stringify(store.state.todosState));
  }

  public deleteTodo(todo: any) {
    const todoIndex = store.state.todosState.indexOf(todo);
    store.state.todosState.splice(todoIndex, 1);
    localStorage.setItem('todos', JSON.stringify(store.state.todosState));
  }
}
</script>
<style scoped lang="scss">
  .todo {
    margin: 0 auto;
    width: 400px;
    text-align: left;
    input[type=text] {
      width: 295px;
      height: 24px;
      padding-left: 5px;
    }
    button {
      border: 0;
      width: 80px;
      height: 30px;
    }
    .row-item {
      text-align: left;
      border: solid 1px #e6e6e6;
      width: 382px;
      div {
        display: inline-flex;
        width: 302px;
        padding: 5px 0;
        p {
          margin: 0 0 0 5px;
        }
      }
    }
  }
</style>