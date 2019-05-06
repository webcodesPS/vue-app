<template>
  <div class="todo">
    <h1>{{ header }}: {{ count }}</h1>
    <form v-on:submit.prevent="">
      <div class="row-add">
        <input type="text" v-model="newTodoText">
        <button v-on:click="addNewTodo">add</button>
      </div>
      <div class="row-item" v-for="(todo, index) in todos">
        <div>
          <input type="text" v-bind:value="todo.text" :disabled="true"/>
        </div>
        <button v-on:click="editTodo" v-bind:value="index">edit</button>
        <button v-on:click="deleteTodo(todo)">remove</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { mapState, mapGetters } from 'vuex';

@Component({
  name: 'ToDos',
  computed: {
    ...mapState({
      header: 'headerState',
      todos: 'todosState'
    }),
    ...mapGetters({
        count: 'todosCount'
     })
  }
})
export default class ToDos extends Vue {
  constructor() {
    super();
    if (localStorage.getItem('todos')) {
      this.$store.state.todosState = JSON.parse(<string>localStorage.getItem('todos'));
    }
  }

  public newTodoText: string = "";

  public addNewTodo(): void {
    this.$store.commit('addNewTodo', this.newTodoText);
  }

  public deleteTodo(todo: any) {
    this.$store.commit('deleteTodo', todo);
  }

  public editTodo(event: any) {
    this.$store.commit('editTodo', event);
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
      height: 26px;
      padding-left: 5px;
      border-top: 1px solid darkgrey;
      border-right: 0;
      border-bottom: 1px solid darkgrey;
      border-left: 1px solid darkgrey;
    }
    button {
      border: 0;
      width: 80px;
      height: 30px;
      border-top: 1px solid darkgrey;
      border-right: 0;
      border-bottom: 1px solid darkgrey;
      border-left: 1px solid darkgrey;
      cursor: pointer;
    }
    .row-add {
      margin-bottom: 5px;
      button:hover {
        background-color: #90f19c;
      }
      input:focus {
        box-shadow: 0 0 5px #fff;
        -webkit-box-shadow: 0 0 5px #fff
      }
    }
    .row-item {
      text-align: left;
      width: 382px;
      div {
        display: inline-flex;
        width: 222px;
        padding: 5px 0;
        p {
          margin: 0 0 0 5px;
        }
      }
      input:focus {
        box-shadow: 0 0 5px #fff;
        -webkit-box-shadow: 0 0 5px #fff
      }
      & button:nth-child(2):hover {
        background-color: #f8ffbf;
      }
      & button:nth-child(3):hover {
        background-color: #ffc1ad;
      }

    }
  }
</style>