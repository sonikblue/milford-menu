<script lang="ts">
import type { Menu } from "@/types/menu";
import { defineComponent, type PropType } from "vue";
import MenuSection from "./MenuSection.vue";

export default defineComponent({
  components: {
    MenuSection,
  },
  props: {
    menu: { type: Object as PropType<Menu>, required: true },
  },
});
</script>

<template>
  <MenuSection :items="menu.mains">Main Courses</MenuSection>
  <MenuSection :items="menu.desserts">Desserts</MenuSection>
</template>
