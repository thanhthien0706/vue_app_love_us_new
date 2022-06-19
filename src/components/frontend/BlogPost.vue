<style></style>

<template>
  <div class="box__blog__main">
    <div class="blog__main row">
      <div class="col-md-6">
        <div class="box__image__main">
          <img
            :src="convert_image(dataBlogMostRead.main_image)"
            alt=""
            class="img__blog__main img__blog__main--main"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="d-flex flex-column">
          <div class="box__header__main__blog d-flex align-items-center">
            <p class="status">Đọc nhiều nhất</p>
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
    </div>
  </div>
</template>

<script>
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { mapState } from "vuex";
import SubString from "@/utils/sub_string";
import FormatDate from "@/utils/fortmatDate";
import ConvertImage from "@/utils/convertImage";

export default {
  name: "BlogPost",
  components: {},
  setup() {
    return {};
  },
  data() {
    return {
      descriptionBlog:
        "Information about the status of rare and endangered animal species needs to be protected by organizations that plan to protect them.",
    };
  },
  methods: {
    sub_string: SubString,
    format_date: FormatDate,
    convert_image: ConvertImage,
  },
  computed: {
    ...mapState(["dataBlogMostRead"]),
  },
};
</script>
