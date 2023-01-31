<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";

export default {
  components: {
    HelloWorld,
  },
};
</script>

<template>
  <header>
    <h1>Milford Menu</h1>
  </header>

  <main>
    <HelloWorld message="Hello Milford!" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  text-align: center;
}

header h1 {
  color: red;
}

main {
  text-align: center;
}
</style>
