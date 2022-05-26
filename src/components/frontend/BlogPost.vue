<style></style>

<template>
  <div class="box__blog__main">
    <div class="blog__main row">
      <div class="col-md-6">
        <div class="box__image__main">
          <img
            src="@/assets/images/page/Rectangle_1.png"
            alt=""
            class="img__blog__main img__blog__main--main"
          />
        </div>
      </div>
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
    </div>
  </div>
</template>

<script>
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SubString from "@/utils/sub_string";
import { mapState } from "vuex";
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
  },
  computed: {
    ...mapState(["dataBlogs"]),
  },
};
</script>
