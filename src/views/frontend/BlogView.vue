<template>
  <DefaultFrontend_1>
    <div id="BlogPage" class="animate__animated animate__fadeIn">
      <section class="sc__blogs mt-50">
        <BlogPost />
      </section>
      <section class="sc__blogs_slide mt-50">
        <BlogSlide />
      </section>
      <section class="sc__blogs mt-50">
        <BlogSearch />
      </section>
    </div>
  </DefaultFrontend_1>
</template>

<script>
import DefaultFrontend_1 from "@/layouts/DefaultFrontend_1.vue";
import BlogPost from "@/components/frontend/BlogPost.vue";
import BlogSearch from "@/components/frontend/BlogSearch.vue";
import BlogSlide from "@/components/frontend/BlogSlide.vue";
export default {
  name: "BlogView",
  components: {
    DefaultFrontend_1,
    BlogPost,
    BlogSearch,
    BlogSlide,
  },
};
</script>
