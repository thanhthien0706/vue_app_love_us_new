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
        <swiper-slide class="slide" v-for="blog in dataTopBlog" :key="blog.id">
          <router-link
            :to="{
              name: 'detail_blog',
              params: { slugBlog: blog.slug },
            }"
          >
            <div class="box__blog__item">
              <div class="row align-items-center">
                <div class="col-md-7">
                  <p class="title">{{ sub_string(blog.title, 18) }}</p>
                  <p
                    class="description"
                    v-html="sub_string(blog.content, 90)"
                  ></p>
                  <p class="time">{{ format_date(blog.createdAt) }}</p>
                </div>
                <div class="col-md-5">
                  <div class="box__img__item__blog">
                    <img :src="convert_image(blog.main_image)" alt="" />
                    <!-- <div class="box__status">{{ blog.status }}</div> -->
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
import FormatDate from "@/utils/fortmatDate";
import ConvertImage from "@/utils/convertImage";
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
    return {};
  },
  methods: {
    sub_string: SubString,
    format_date: FormatDate,
    convert_image: ConvertImage,
  },
  computed: {
    ...mapState(["dataTopBlog"]),
  },
};
</script>
