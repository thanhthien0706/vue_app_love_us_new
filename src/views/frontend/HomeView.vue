<template>
  <DefaultFrontend_1>
    <div id="HomePage" class="animate__animated animate__fadeIn">
      <section class="sc_slide_main">
        <HomeSlide />
      </section>
    </div>
  </DefaultFrontend_1>
</template>

<script>
import DefaultFrontend_1 from "@/layouts/DefaultFrontend_1.vue";
import HomeSlide from "@/components/frontend/HomeSlide.vue";

export default {
  name: "HomeView",
  components: { DefaultFrontend_1, HomeSlide },
};
</script>
