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
    ...mapActions(["getDataUser", "getBlogMostRead"]),
    initMain() {
      this.getDataUser();
      this.getBlogMostRead();
    },
  },
};
</script>

<style lang="scss" src="@/assets/styles/main.scss"></style>
