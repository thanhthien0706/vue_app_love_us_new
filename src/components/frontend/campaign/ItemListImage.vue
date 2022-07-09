<template>
  <div id="ItemListImage">
    <div class="row row-custom">
      <div class="col-md-3 col-custom">
        <img
          src="https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg"
          alt=""
          class="imgDonate"
          @click="onShowPopupImage"
        />
      </div>
      <div class="col-md-3 col-custom">
        <img
          src="https://baoquocte.vn/stores/news_dataimages/dieulinh/012020/29/15/nhung-buc-anh-dep-tuyet-voi-ve-tinh-ban.jpg"
          alt=""
          class="imgDonate"
          @click="onShowPopupImage"
        />
      </div>
      <div class="col-md-3 col-custom">
        <img
          src="https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg"
          alt=""
          class="imgDonate"
        />
      </div>
      <div class="col-md-3 col-custom">
        <img
          src="https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg"
          alt=""
          class="imgDonate"
        />
      </div>
      <div class="col-md-3 col-custom">
        <img
          src="https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg"
          alt=""
          class="imgDonate"
        />
      </div>
    </div>

    <Transition
      enter-active-class="animate__animated animate__zoomIn animate__faster"
      leave-active-class="animate__animated animate__zoomOut animate__faster"
    >
      <div
        class="popupImageDonate"
        v-if="isShowPopup"
        @click.self="
          {
            isShowPopup = false;
          }
        "
      >
        <div class="boxShowImage">
          <img :src="linkImage" alt="" class="imageShowCurrent" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: "ItemListImage",
  data() {
    return {
      isShowPopup: false,
      linkImage: "",
    };
  },
  methods: {
    onShowPopupImage(event) {
      this.linkImage = event.target.src;
      this.isShowPopup = true;
    },
  },
};
</script>

<style></style>
