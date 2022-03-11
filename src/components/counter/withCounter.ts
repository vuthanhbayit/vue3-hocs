import { useCounter } from "@vueuse/core";
import { h } from "vue";
import type { DefineComponent } from "vue";

export default function (WrappedComponent: DefineComponent, number: number) {
  return {
    name: "WithCounter",

    setup() {
      const { count, inc } = useCounter();

      const increment = () => inc(number);

      return () => h(WrappedComponent, { counter: count.value, increment });
    },
  };
}
