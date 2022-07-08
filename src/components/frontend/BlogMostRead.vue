<style></style>

<template>
  <div class="box__blog__main" v-if="dataBlogMostRead != null">
    <p class="header__title">Các bài viết</p>
    <div class="blog__main row backgroundMainItem align-items-center">
      <div class="col-md-6">
        <div class="d-flex flex-column">
          <div class="box__header__main__blog d-flex align-items-center">
            <p class="status">Đọc nhiều</p>
            <p class="time">{{ format_date(dataBlogMostRead.createdAt) }}</p>
          </div>
        </div>
        <p class="title__blog__main">
          {{ sub_string(dataBlogMostRead.title, 80) }}
        </p>
        <div class="boxContent">
          <p
            class="text__blog"
            v-html="sub_string(dataBlogMostRead.content, 250)"
          ></p>
          <router-link
            :to="{
              name: 'detail_blog',
              params: { slugBlog: dataBlogMostRead.slug },
            }"
            class="link__read__more"
            >Đọc tiếp</router-link
          >
        </div>
      </div>
      <div class="col-md-6">
        <div class="box__image__main">
          <img
            :src="convert_image(dataBlogMostRead.main_image)"
            alt=""
            class="img__blog__main"
          />
        </div>
      </div>
    </div>

    <!-- <h1 class="">Blog mới nhất</h1> -->
    <div class="list__blog__box backgroundMainItem">
      <div class="slide" v-for="blog in dataTopBlog" :key="blog.id">
        <router-link
          :to="{
            name: 'detail_blog',
            params: { slugBlog: blog.slug },
          }"
        >
          <div class="box__blog__item">
            <div class="row align-items-center">
              <div class="col-md-4">
                <div class="box__img__item__blog">
                  <img :src="convert_image(blog.main_image)" alt="" />
                  <div class="box__status">{{ blog.status }}</div>
                </div>
              </div>
              <div class="col-md-8">
                <p class="title">
                  {{ sub_string(blog.title, 80) }}
                </p>
                <p
                  class="description"
                  v-html="sub_string(blog.content, 90)"
                ></p>
                <p class="time">
                  {{ format_date(blog.createdAt) }}
                  <button class="btnXembaiviet">Xem bài viết</button>
                </p>
                <div></div>
              </div>
            </div>
            <hr class="new5" />
          </div>
        </router-link>
      </div>
    </div>
    <!--  -->

    <!-- <div class="boxListBlogImage">
      <div class="row">
        <div class="col-md-4" v-for="blog in dataTopBlog" :key="blog.id">
          <div class="colInner backgroundMainItem">
            <img
              :src="convert_image(blog.main_image)"
              alt=""
              class="blog__img"
            />
            <div class="boxInforContent">
              <p class="titleBlog">{{ sub_string(blog.title, 40) }}</p>

              <p class="description" v-html="sub_string(blog.content, 70)"></p>

              <p class="timeCreate">
                Thời gian tạo:
                <span class="time"> {{ format_date(blog.createdAt) }}</span>
              </p>
              <router-link
                :to="{
                  name: 'detail_blog',
                  params: { slugBlog: blog.slug },
                }"
              >
                <div style="text-align: center">
                  <button class="btnXembaiviet">Xem bài viết</button>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>

  <div class="" v-else>
    <p class="text-center">Dữ liệu đang được cập nhật</p>
  </div>
</template>

<script>
import { Pagination, Navigation, Grid, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SubString from "@/utils/sub_string";
import FormatDate from "@/utils/fortmatDate";
import ConvertImage from "@/utils/convertImage";
import { mapState } from "vuex";

export default {
  name: "BlogMostRead",
  components: {},
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
    format_date: FormatDate,
    convert_image: ConvertImage,
  },
  computed: {
    ...mapState(["dataBlogMostRead", "dataTopBlog"]),
  },
};
</script>
