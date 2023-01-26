<template>
  <Hola />
</template>

<script lang="ts">
  import Vue from 'vue'
  import HelloWorld from './Hola.vue'
import Hola from './Hola.vue';

  export default Vue.extend({
    name: 'Home',

    components: {
    HelloWorld,
    Hola
},
  })
</script>
