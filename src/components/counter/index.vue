<template>
  <div>
    <CounterPlusOne></CounterPlusOne>
    <CounterPlusTwo></CounterPlusTwo>
    <CounterPlusThree></CounterPlusThree>
    <CounterPlusFour></CounterPlusFour>
    <CounterPlusFive></CounterPlusFive>
    <CounterPlusSix></CounterPlusSix>
  </div>
</template>

<script lang="ts" setup>
import withCounter from "@/components/counter/withCounter";
import CounterPlus from "@/components/counter/counter-plus.vue";

const CounterPlusOne = withCounter(CounterPlus, 1);
const CounterPlusTwo = withCounter(CounterPlus, 2);
const CounterPlusThree = withCounter(CounterPlus, 3);
const CounterPlusFour = withCounter(CounterPlus, 4);
const CounterPlusFive = withCounter(CounterPlus, 5);
const CounterPlusSix = withCounter(CounterPlus, 6);
</script>
