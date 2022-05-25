<style></style>

<template>
  <div class="box__blog__main">
    <p class="header__title">Blog động vật</p>
    <div class="blog__main row backgroundMainItem">
      <div class="col-md-6">
        <div class="d-flex flex-column">
          <div class="box__header__main__blog d-flex align-items-center">
            <p class="status">Most read</p>
            <p class="time">Friday the 13th,2022</p>
          </div>
        </div>
        <p class="title__blog__main">
          {{
            sub_string(
              "Top 6 tips on how to be a wildlife-friendly traveller",
              80
            )
          }}
        </p>
        <p class="text__blog">
          {{ sub_string(descriptionBlog, 250) }}
          <router-link :to="{ name: 'home' }" class="link__read__more"
            >Đọc tiếp</router-link
          >
        </p>
      </div>
      <div class="col-md-6">
        <div class="box__image__main">
          <img
            src="@/assets/images/page/Rectangle_1.png"
            alt=""
            class="img__blog__main img__blog__main--main"
          />
          <!-- <img
            src="https://upanh123.com/wp-content/uploads/2020/09/hinh-anh-con-voi-khong-lo_111944888.jpg"
            alt=""
            class="img__blog__main img__blog__main--sub"
          /> -->
        </div>
      </div>
    </div>

    <div class="list__blog__box">
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
            <div class="box__blog__item backgroundMainItem">
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
  name: "BlogHome",
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
