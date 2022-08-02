<template>
  <div id="AnimalView">
    <div class="drak_overlay"></div>
    <div class="InnerMainContent">
      <div class="boxFindAnimalMain">
        <div class="boxSearch">
          <fa :icon="['fas', 'magnifying-glass']" class="ic-search" />
          <input type="text" placeholder="Tìm kiếm" class="inputSearch" />
        </div>
      </div>

      <AnimalDetailBottomVue />
    </div>
  </div>
</template>

<script>
import AnimalDetailBottomVue from "@/components/frontend/AnimalDetailBottom.vue";

export default {
  name: "AnimalView",
  components: { AnimalDetailBottomVue },
  data() {
    return {
      img_current: "",
    };
  },
  methods: {
    onShowImage(src) {
      this.img_current = src;
    },
    closeShowImage() {
      this.img_current = "";
    },
  },
};
</script>

<style></style>
