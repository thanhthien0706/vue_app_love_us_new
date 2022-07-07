<style></style>

<template>
  <section class="section">
    <h1>Các chủ đề nổi bật</h1>
    <div class="grid">
      <div class="item">
        <div class="item__details">Bảo vệ động vật</div>
      </div>
      <div class="item item--large">
        <div class="item__details">Các hoạt động tình nguyện</div>
      </div>
      <div class="item item--medium">
        <div class="item__details">Tin tức môi trường sống</div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import SubString from "@/utils/sub_string";
import FormatDate from "@/utils/fortmatDate";
import ConvertImage from "@/utils/convertImage";

export default {
  name: "BlogImage",
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
