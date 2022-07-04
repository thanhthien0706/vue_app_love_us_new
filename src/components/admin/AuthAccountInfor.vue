<template>
  <div id="AuthAccountInfor">
    <div class="boxImageAuth">
      <div class="row">
        <div class="col-md-6">
          <div class="boxImageInit">
            <fa :icon="['fas', 'image']" class="ic_image" v-if="isShow" />

            <img
              id="ImageShowSelfie"
              src="https://images.assetsdelivery.com/compings_v2/tuktukdesign/tuktukdesign1606/tuktukdesign160600119.jpg"
              alt=""
              class="imageShow"
              v-else
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="boxImageInit">
            <fa :icon="['fas', 'image']" class="ic_image" v-if="isShow" />

            <swiper
              class="swiper swiper__custom"
              :modules="modules"
              :slides-per-view="1"
              navigation
              v-else
            >
              <swiper-slide class="slide">
                <img
                  id="ImageShowIdentity_0"
                  src="https://luatvietphong.vn/wp-content/uploads/2021/08/4e7c9321359ffc9dc5db4bb1328e8ee7.jpg"
                  alt=""
                  class="imageShow"
                />
              </swiper-slide>

              <swiper-slide class="slide">
                <img
                  id="ImageShowIdentity_1"
                  src="https://images.assetsdelivery.com/compings_v2/tuktukdesign/tuktukdesign1606/tuktukdesign160600119.jpg"
                  alt=""
                  class="imageShow"
                />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>

    <div class="boxInforAccount">
      <p class="title_main">Thông tin tài khoản</p>

      <form
        action="javascript:void(0)"
        @submit.prevent
        class="formInforAccount"
      >
        <div class="row">
          <div class="col-md-4">
            <div class="boxform bgBoxAdmin">
              <input type="text" placeholder="---" class="inputForm" disabled />
            </div>
          </div>
          <div class="col-md-4">
            <div class="boxform bgBoxAdmin">
              <input type="text" placeholder="---" class="inputForm" disabled />
            </div>
          </div>
          <div class="col-md-4">
            <div class="boxform bgBoxAdmin">
              <input type="text" placeholder="---" class="inputForm" disabled />
            </div>
          </div>
          <div class="col-md-4">
            <div class="boxform bgBoxAdmin">
              <input type="text" placeholder="---" class="inputForm" disabled />
            </div>
          </div>
          <div class="col-md-4">
            <div class="boxform bgBoxAdmin">
              <input type="text" placeholder="---" class="inputForm" disabled />
            </div>
          </div>
          <div class="col-md-4">
            <div class="boxform bgBoxAdmin">
              <input type="text" placeholder="---" class="inputForm" disabled />
            </div>
          </div>
        </div>
      </form>
    </div>

    <div class="boxHandleAuth">
      <button class="successfully" :disabled="isDisableBtn">Xác nhận</button>
      <button class="cancelation" :disabled="isDisableBtn">Hủy bỏ</button>
    </div>
  </div>
</template>

<script>
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";

export default {
  name: "AuthAccountInfor",
  props: ["isDisableBtn"],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  data() {
    return {
      isShow: false,
    };
  },
  mounted() {
    this.initGlassImage();
  },
  methods: {
    initGlassImage() {
      this.ImageMagnify("ImageShowSelfie", 2);
      this.ImageMagnify("ImageShowIdentity_0", 2);
      this.ImageMagnify("ImageShowIdentity_1", 2);
    },
    ImageMagnify(idImage, zoom) {
      let img, glass, w, h, bw;
      img = document.getElementById(idImage);
      glass = document.createElement("div");
      glass.setAttribute("class", "img-magnifier-glass");
      img.parentElement.insertBefore(glass, img);
      glass.style.backgroundImage = `url('${img.src}')`;
      glass.style.backgroundRepeat = "no-repeat";
      glass.style.backgroundSize = `${img.width * zoom}px ${
        img.height * zoom
      }px`;
      bw = 3;
      w = glass.offsetWidth / 2;
      h = glass.offsetHeight / 2;

      glass.addEventListener("mousemove", moveMagnifier);
      img.addEventListener("mousemove", moveMagnifier);
      img.addEventListener("mouseout", () => {
        glass.style.display = "none";
      });

      glass.addEventListener("touchmove", moveMagnifier);
      img.addEventListener("touchmove", moveMagnifier);

      function moveMagnifier(e) {
        let pos, x, y;
        e.preventDefault();
        pos = getCursorPos(e);
        x = pos.x;
        y = pos.y;

        if (x > img.width - w / zoom) {
          x = img.width - w / zoom;
        }
        if (x < w / zoom) {
          x = w / zoom;
        }
        if (y > img.height - h / zoom) {
          y = img.height - h / zoom;
        }
        if (y < h / zoom) {
          y = h / zoom;
        }

        glass.style.left = x - w + "px";
        glass.style.top = y - h + "px";

        glass.style.backgroundPosition =
          "-" + (x * zoom - w + bw) + "px -" + (y * zoom - h + bw) + "px";
        glass.style.display = "block";
      }

      function getCursorPos(e) {
        var a,
          x = 0,
          y = 0;
        e = e || window.event;
        a = img.getBoundingClientRect();
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
      }
    },
  },
};
</script>

<style></style>
