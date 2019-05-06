<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ToDos />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ToDos from "@/components/ToDos.vue"; // @ is an alias to /src

@Component({
  components: {
      ToDos
  }
})
export default class Home extends Vue {

}
</script>

<style lang="scss">
  .home {
    img {
      height: 100px;
    }
  }
</style>