<template>
<div class="container">
  <div class="container">
    <router-view @login="handleLogin"></router-view> <!-- Escuchar el evento 'login' -->
  </div>
</div>
</template>
<script lang="ts" src="./loginLayout.ts"></script>