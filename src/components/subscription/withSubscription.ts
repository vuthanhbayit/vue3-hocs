import { h, onBeforeUnmount, ref, useAttrs, watchEffect } from "vue";

export default function <D>(
  WrappedComponent: any,
  getData: (props: any) => Promise<D>
) {
  return {
    name: "WithSubscription",

    setup() {
      const attrs = useAttrs();

      const data = ref<D>();
      const isError = ref(false);
      const isLoading = ref(false);

      const fetchData = async () => {
        try {
          isError.value = false;
          isLoading.value = true;

          data.value = await getData(attrs);
        } catch (e) {
          isError.value = true;
        } finally {
          isLoading.value = false;
        }
      };

      const stop = watchEffect(fetchData);

      onBeforeUnmount(stop);

      return () =>
        h(WrappedComponent, {
          data: data.value,
          isError: isError.value,
          isLoading: isLoading.value,
        });
    },
  };
}
