<template>
  <div id="AnimalView">
    <div class="drak_overlay"></div>
    <div class="InnerMainContent">
      <!-- <div class="boxMainContent"> -->
      <div class="boxFindAnimalMain">
        <div class="boxSearch">
          <fa :icon="['fas', 'magnifying-glass']" class="ic-search" />
          <input type="text" placeholder="Tìm kiếm" class="inputSearch" />
        </div>
      </div>

      <!-- <AnimalDetailMainInfoVue /> -->

      <AnimalDetailMainInfoVue />

      <div class="boxImageMainAnimal">
        <img
          src="@/assets/images/page/animal/sao-la.jpg"
          alt=""
          class="mainImage"
        />
      </div>

      <AnimalDetailBottomVue />
    </div>
    <!-- </d iv> -->
  </div>
</template>

<script>
import AnimalDetailBottomVue from "@/components/frontend/AnimalDetailBottom.vue";
import AnimalDetailMainInfoVue from "@/components/frontend/AnimalDetailMainInfo.vue";

export default {
  name: "AnimalView",
  components: { AnimalDetailBottomVue, AnimalDetailMainInfoVue },
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
