#### Ở đây, ta có 2 component tương tự nhau là `comment-list.vue` và `blog-list.vue`

Component: `comment-list.vue`
```vue
<template>
  <div>
    <h1>Đây là danh sách comment</h1>

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
import { defineComponent, onBeforeUnmount, ref, watchEffect } from "vue";

export default defineComponent({
  name: "comment-list",

  setup() {
    const data = ref([]);
    const isError = ref<Error | undefined>();
    const isLoading = ref(false);

    const fetchData = async () => {
      try {
        isError.value = undefined;
        isLoading.value = true;

        data.value = await DataSource.getComments();
      } catch (e) {
        isError.value = e;
      } finally {
        isLoading.value = false;
      }
    };

    const stop = watchEffect(fetchData);

    onBeforeUnmount(stop);

    return { data, isError, isLoading };
  },
});
</script>
```


Component: `blog-list.vue`
```vue
<template>
  <div>
    <h1>Đây là danh sách blog</h1>

    <div v-if="isLoading">...Loading</div>
    <div v-else-if="isError">Error</div>
    <div v-else>
      <div v-for="item in data" :key="item.id">
        <span>blog: {{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, ref, watchEffect } from "vue";

export default defineComponent({
  name: "blog-list",

  setup() {
    const data = ref([]);
    const isError = ref<Error | undefined>();
    const isLoading = ref(false);

    const fetchData = async () => {
      try {
        isError.value = undefined;
        isLoading.value = true;

        data.value = await DataSource.getBlogs();
      } catch (e) {
        isError.value = e;
      } finally {
        isLoading.value = false;
      }
    };

    const stop = watchEffect(fetchData);

    onBeforeUnmount(stop);

    return { data, isError, isLoading };
  },
});
</script>
```

2 components này khác template và khác methods get data là `DataSource.getComments()` và `DataSource.getBlogs()`.
