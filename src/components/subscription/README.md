#### Ở đây, ta có 3 component tương tự nhau là `comment-list.vue`, `blog-list.vue` và `article-detail.vue`

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


Component: `article-detail.vue`
```vue
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
import { defineComponent, onBeforeUnmount, ref, watchEffect } from "vue";

export default defineComponent({
  name: "article-detail",
  
  props: {
    id: Number
  },

  setup(props) {
    const data = ref([]);
    const isError = ref<Error | undefined>();
    const isLoading = ref(false);

    const fetchData = async () => {
      try {
        isError.value = undefined;
        isLoading.value = true;

        data.value = await DataSource.getArticle(props.id);
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

</script>
```

3 components này khác template và khác methods get data là `DataSource.getComments()`, `DataSource.getBlogs()` và `DataSource.getArticle(props.id)`.

Tuy nhiên cách viết lại có điểm chung: 
- Các data `data`, `isError`, `isLoading` giống nhau.
- Được `fetchData` khi mount và dữ liệu thay đổi
- Được `stop` khi unmount.