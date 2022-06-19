<template>
  <router-view />
</template>

<script>
import { mapActions } from "vuex";
// import handleLanguage from "@/utils/handleLanguage";

export default {
  setup() {},
  created() {
    this.initMain();
  },
  methods: {
    ...mapActions([
      "getDataUser",
      "getBlogMostRead",
      "getTopBlog",
      "getAllLocationsVietNam",
      "getAllBankVietNam",
    ]),
    initMain() {
      this.getDataUser();
      this.getBlogMostRead();
      this.getTopBlog();
      this.getAllLocationsVietNam();
      this.getAllBankVietNam();
    },
  },
};
</script>

<style lang="scss" src="@/assets/styles/main.scss"></style>
