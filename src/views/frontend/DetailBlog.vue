<style></style>

<template>
  <DefaultFrontend_1>
    <div class="DetailBlog" v-if="isShow">
      <div class="headerBlog">
        <div class="icon" @click="$router.go(-1)">
          <fa :icon="['fas', 'angle-left']" class="ic_back" />
        </div>
        <div class="boxTitle">
          <h3 class="textTitle">{{ dataBlogDetail.title }}</h3>
          <p class="text_author">
            Tác giả:
            <span class="name">{{ dataBlogDetail.dataAuthor[0].name }}</span>
          </p>
        </div>
      </div>

      <div class="contentBlog">
        <div class="boxMainImage">
          <img
            :src="convert_image(dataBlogDetail.main_image)"
            alt=""
            class="imgMainBlog"
          />
        </div>
        <div class="boxContentMain" v-html="dataBlogDetail.content"></div>
      </div>

      <div class="boxFooterBlog">
        <hr class="boxHr" />

        <div class="boxListTag">
          <p class="nameTag">{{ $t("tag") }}:</p>
          <ul class="listTags">
            <li
              class="itemTag"
              v-for="(tag, index) in dataBlogDetail.list_category"
              :key="index"
            >
              <router-link :to="{ name: 'home' }">
                <p class="titleTag">{{ tag }}</p>
              </router-link>
            </li>
          </ul>
        </div>

        <div class="boxComment">
          <p class="titleBox">{{ $t("comments") }} (0)</p>
        </div>
      </div>
    </div>

    <div class="errorBox" v-else>
      <p class="">Bài viết không tồn tại</p>
    </div>
  </DefaultFrontend_1>
</template>

<script>
import DefaultFrontend_1 from "@/layouts/DefaultFrontend_1.vue";
import { blogService } from "@/services/blogService";
import ConvertImage from "@/utils/convertImage";

export default {
  name: "DetailBlog",
  components: { DefaultFrontend_1 },
  data() {
    return {
      isShow: true,
      dataBlogDetail: {},
    };
  },

  created() {
    this.initDataMain();
  },
  methods: {
    async initDataMain() {
      document.title = this.titlePage;
      const dataBLogDetial = await blogService.getBlogDetailWithSlug(
        this.$route.params.slugBlog
      );

      if (dataBLogDetial.success) {
        if (dataBLogDetial.data == null) {
          this.isShow = false;
        } else {
          this.dataBlogDetail = dataBLogDetial.data[0];
        }
      }
    },

    convert_image: ConvertImage,
  },
  computed: {
    titlePage() {
      const routeName = this.$route.meta.title;
      const params = this.$route.params.slugBlog;

      const title = `${this.$t(routeName)} - ${params}`;

      return title;
    },
  },
};
</script>
