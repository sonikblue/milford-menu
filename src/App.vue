<script lang="ts">
import MenuPanel from "./components/MenuPanel.vue";

export default {
  components: {
    MenuPanel,
  },
};
</script>

<template>
  <header>
    <h1>Milford Menu</h1>
  </header>

  <main>
    <MenuPanel menu="Menu goes here" />
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
