<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  background: mediumpurple;

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #5fffb9;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #384a5e;
      &.router-link-exact-active {
        color: #5fffbb;
      }
    }
  }
}
</style>
