<template>
  <h1>

    <div v-for="todo in todos">{{ todo.text }}</div>

    <button v-on:click="add">add</button>
  </h1>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class ToDos extends Vue {

  public todos: any = [
    {
      text: "Do the dishes"
    },
    {
      text: "Take out the trash"
    },
    {
      text: "Mow the lawn"
    }
  ];

  add() {
      console.log('aaaaaa');
  }
}
</script>
