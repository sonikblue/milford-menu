<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    menu: String, // TODO: This needs to be our Menu type
  },
});
</script>

<template>
  <div>{{ menu }}</div>
</template>
