<script lang="ts">
import type { MenuItem } from "@/types/menu";
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  props: {
    items: { type: Array as PropType<Array<MenuItem>>, required: true },
  },
});
</script>

<template>
  <h2>
    <slot></slot>
  </h2>

  <ul>
    <li v-for="(item, index) in items" :key="index">
      {{ item.description }}
    </li>
  </ul>
</template>
