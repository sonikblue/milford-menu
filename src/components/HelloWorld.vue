<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    message: String,
  },
});
</script>

<template>
  <div>{{ message }}</div>
</template>
