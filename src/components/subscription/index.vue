<template>
  <div>
    <BlogListWrapper></BlogListWrapper>
    <CommentListWrapper></CommentListWrapper>
    <ArticleDetailWrapper :id="1"></ArticleDetailWrapper>
  </div>
</template>

<script lang="ts" setup>
import withSubscription from "@/components/subscription/withSubscription";
import BlogList from "@/components/subscription/blog-list.vue";
import CommentList from "@/components/subscription/comment-list.vue";
import ArticleDetail from "@/components/subscription/article-detail.vue";
import { sleep } from "@vt7/utils";

const mockBlogs = async () => {
  await sleep(1000);

  return [
    { id: 1, title: "mot" },
    { id: 2, title: "hai" },
    { id: 3, title: "ba" },
  ];
};

const mockComments = async () => {
  await sleep(2000);

  throw new Error("Loi roi");
};

const mockArticle = async ({ id }: { id: number }) => {
  console.log({ id });

  await sleep(3000);

  return {
    id,
    title: "Bai viet hay",
  };
};

const BlogListWrapper = withSubscription(BlogList, mockBlogs);
const CommentListWrapper = withSubscription(CommentList, mockComments);
const ArticleDetailWrapper = withSubscription(ArticleDetail, mockArticle);
</script>
