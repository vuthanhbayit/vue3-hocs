<template>
  <div>
    <CounterPlusOne></CounterPlusOne>
    <CounterPlusTwo></CounterPlusTwo>
  </div>
</template>

<script lang="ts" setup>
import withCounter from "@/components/counter/withCounter";
import CounterPlus from "@/components/counter/counter-plus.vue";

const CounterPlusOne = withCounter(CounterPlus, 1);
const CounterPlusTwo = withCounter(CounterPlus, 2);
</script>
