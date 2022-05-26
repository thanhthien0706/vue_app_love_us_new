<style></style>

<template>
  <div class="box__blog__main">
    <div class="list__blog__box">
      <p class="title">Top Blogs</p>
      <swiper
        class="swiper swiper__custom"
        :modules="modules"
        :slides-per-view="2"
        :grid="{ rows: 2 }"
        :space-between="20"
        navigation
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
      >
        <swiper-slide class="slide" v-for="blog in dataBlogs" :key="blog.id">
          <router-link :to="{ name: blog.link }">
            <div class="box__blog__item">
              <div class="row align-items-center">
                <div class="col-md-7">
                  <p class="title">{{ sub_string(blog.name, 20) }}</p>
                  <p class="description">
                    {{ sub_string(blog.description, 90) }}
                  </p>
                  <p class="time">{{ blog.time }}</p>
                </div>
                <div class="col-md-5">
                  <div class="box__img__item__blog">
                    <img :src="blog.img" alt="" />
                    <div class="box__status">{{ blog.status }}</div>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </swiper-slide>
        <!-- <div class="swiper-button-next swiper-button-custom"></div>
        <div class="swiper-button-prev swiper-button-custom"></div> -->
      </swiper>
    </div>
  </div>
</template>

<script>
import { Pagination, Navigation, Grid, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SubString from "@/utils/sub_string";
import { mapState } from "vuex";

export default {
  name: "BlogSearch",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Grid, Autoplay],
    };
  },
  data() {
    return {
      descriptionBlog:
        " They are threatened by habitat loss following large–scale deforestation and commercial poaching for the wildlife trade They are threatened by habitat loss following large–scale deforestation and commercial poaching for the wildlife trade      ",
    };
  },
  methods: {
    sub_string: SubString,
  },
  computed: {
    ...mapState(["dataBlogs"]),
  },
};
</script>
