<template>
  <DefaultFrontend_1>
    <div id="BlogPage" class="animate__animated animate__fadeIn">
      <section class="sc__blogs mt-50">
        <blog-image />
      </section>
      <section class="sc__blogs mt-50">
        <blog-most-read />
      </section>
      <section class="sc__blogs mt-50">
        <!-- <BlogSearch /> -->
      </section>
    </div>
  </DefaultFrontend_1>
</template>

<script>
import DefaultFrontend_1 from "@/layouts/DefaultFrontend_1.vue";
import BlogImage from "@/components/frontend/BlogImage.vue";
import BlogMostRead from "@/components/frontend/BlogMostRead.vue";
// import BlogSearch from "@/components/frontend/BlogSearch.vue";
// import BlogSlide from "@/components/frontend/BlogSlide.vue";
export default {
  name: "BlogView",
  components: {
    DefaultFrontend_1,
    BlogImage,
    BlogMostRead,
    // BlogPost,
    // BlogSearch,
    // BlogSlide,
  },
};
</script>
