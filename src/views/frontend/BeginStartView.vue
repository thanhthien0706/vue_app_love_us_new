<style></style>

<template>
  <div id="beginStartView">
    <BeginVideo
      v-if="isShowVideo"
      :isShowVideo="isShowVideo"
      @onBackPage="handleBackPage"
    />
    <BeginFirst :isShowFirst="isShowFirst" @onPlayVideo="handlePlayVideo" />
  </div>
</template>

<script>
import BeginFirst from "@/components/BeginView/BeginFirst.vue";
import BeginVideo from "@/components/BeginView/BeginVideo.vue";

export default {
  name: "BeginStartView",
  components: { BeginFirst, BeginVideo },
  data() {
    return {
      isShowFirst: true,
      isShowVideo: false,
    };
  },
  methods: {
    handlePlayVideo() {
      this.isShowVideo = true;
      this.isShowFirst = false;
    },
    handleBackPage() {
      this.isShowVideo = false;
      this.isShowFirst = true;
    },
  },
};
</script>
