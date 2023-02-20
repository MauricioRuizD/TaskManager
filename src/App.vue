<template>
  <div class="app">
    <router-view />
  </div>
</template>
<script src="./app.ts" lang="ts"></script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
  height: 35px;
}

nav a {
  font-weight: bold;
  color: #ee3b0f;
}

nav a.router-link-exact-active {
  color: #03658c;
}
div.spacer {
  font-size: 0;
  height: 20px;
  line-height: 0;
}
</style>
