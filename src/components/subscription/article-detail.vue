<template>
  <div>
    <h1>Đây là chi tiết bài viết</h1>

    <div v-if="isLoading">...Loading</div>
    <div v-else-if="isError">Error</div>
    <div v-else>
      {{ data }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "article-detail",

  props: {
    data: Object,
    isLoading: Boolean,
    isError: Boolean,
  },
});
</script>
