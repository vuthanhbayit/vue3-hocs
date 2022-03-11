<template>
  <div>
    <div>counter: {{ counter }}</div>
    <button @click="increment">inc</button>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  counter: Number,
  increment: Function,
});
</script>
