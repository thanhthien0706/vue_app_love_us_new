<template>
  <div id="AnimalViewNew">
    <div class="bg__overlay"></div>
    <div class="boxInnerMain">
      <p class="nameAnimal">Sao la</p>
      <div class="boxRowInnerMain">
        <div class="colInner__right">
          <div class="boxInforAnimal">
            <p class="textInfor">
              Giống loài: <span class="content">G. a. sharpii</span>
            </p>
            <p class="textInfor">
              Giống loài: <span class="content">G. a. sharpii</span>
            </p>
          </div>

          <div class="boxInnerMap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15342.382949192348!2d108.24962605!3d15.982474249999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314210991363505d%3A0x3224482e2456e30a!2zVHLGsOG7nW5nIE3huqdtIG5vbiBOZ8O0aSBTYW8gWGFuaA!5e0!3m2!1svi!2s!4v1658248064921!5m2!1svi!2s"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="map_img"
            ></iframe>
          </div>
        </div>
        <div class="colInner__middle">2</div>
        <div class="colInner__left">
          <swiper
            class="swiper swiper__custom"
            :pagination="true"
            :slides-per-view="1"
            :modules="modules"
          >
            <swiper-slide class="slide slideCustom">
              <div class="boxInforContent">
                <p class="titleBox">Mô tả</p>
                <p class="content">
                  Khoảng những năm 1980, vấn đề lớn nhất đe dọa vẹt là tốc độ
                  nhanh chóng của nạn phá rừng và đánh bẫy trái phép. Dẫn đến
                  sụt giảm loài này nhanh chóng. Từ năm 2004, loài vẹt đuôi dài
                  đã gần như bị tuyệt chủng. Đây là loài chim nhỏ có đuôi dài,
                  màu xanh (ở phần thân và đuôi),
                </p>
              </div>
            </swiper-slide>
            <swiper-slide class="slide slideCustom">Slide 2</swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

export default {
  name: "AnimalViewNew",
  setup() {
    return {
      modules: [Pagination],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style></style>
