<template>
  <div>
    <h1>Đây là danh sách blogs</h1>

    <div v-if="isLoading">...Loading</div>
    <div v-else-if="isError">Error</div>
    <div v-else>
      <div v-for="item in data" :key="item.id">
        <span>comment: {{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "blog-list",

  props: {
    data: Array,
    isLoading: Boolean,
    isError: Boolean,
  },
});
</script>
