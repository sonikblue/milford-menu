<script lang="ts">
import { defineComponent, type PropType } from "vue";
import MenuPanel from "./components/MenuPanel.vue";
import type { MenuService } from "./service/menuService";

export default defineComponent({
  props: {
    menuService: {
      type: Object as PropType<MenuService>,
      required: true,
    },
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
    <MenuPanel :menu="menuService.todaysMenu()" />
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
