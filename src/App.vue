<template>
  <router-view />
</template>

<script>
import { mapActions } from "vuex";

export default {
  setup() {},
  created() {
    this.initMain();
  },
  methods: {
    ...mapActions(["getDataUser"]),
    initMain() {
      this.getDataUser();
    },
  },
};
</script>

<style lang="scss" src="@/assets/styles/main.scss"></style>
