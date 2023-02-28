<script lang="ts">
import { defineComponent } from "vue";
import MenuPanel from "./components/MenuPanel.vue";

export default defineComponent({
  data() {
    return {
      // TODO: Wire in menu service. Create it here? What part of the lifecycle?
      menu: {
        mains: [
          { description: "Spaghetti Bolognese" },
          { description: "Jacket potato with beans and cheese" },
        ],
        desserts: [{ description: "Cinnamon roll" }],
      },
    };
  },
  components: {
    MenuPanel,
  },
});
</script>

<template>
  <header>
    <h1>Milford Menu</h1>
  </header>

  <main>
    <MenuPanel :menu="menu" />
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
  text-align: left;
}
</style>
