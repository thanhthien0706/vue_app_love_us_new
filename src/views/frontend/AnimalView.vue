<template>
  <div id="AnimalView">
    <div id="bg__overlay"></div>
    <div class="container_1024 boxContainerMain">
      <section class="scMainInfor">
        <div class="row row_custom align-items-center">
          <div class="col-md-5">
            <div class="boxInnerLeft">
              <img
                src="https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg"
                alt=""
                class="imgAnimal"
              />
              <div class="boxYouCan">
                Tôi làm được gì?
                <fa :icon="['fas', 'circle-plus']" class="iconPlust" />
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="boxInnerRight">
              <p class="textClassAnimal">Lớp chim</p>
              <h2 class="nameAnimal">Vẹt xanh đuôi đỏ</h2>
              <p class="textLocation">
                <fa :icon="['fas', 'location-dot']" class="ic_location" />
                Nha trang
              </p>
              <div class="row rowCounterAnimal">
                <div class="col-md-4">
                  <div class="itemCounter">
                    <p class="countText">3000</p>
                    <p class="nameText">Populations</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="itemCounter">
                    <p class="countText">06/07/2002</p>
                    <p class="nameText">First assessed</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="itemCounter">
                    <p class="countText">5,2 Feet</p>
                    <p class="nameText">Height Avg</p>
                  </div>
                </div>
              </div>

              <div class="boxInfor">
                <div class="itemInfor">
                  <p class="text_title">Trạng thái</p>
                  <p class="content_text">Được bảo vệ</p>
                </div>
                <div class="itemInfor">
                  <p class="text_title">Môi trường</p>
                  <p class="content_text">Rừng nhiệt đới</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="scMainInfor mt_40">
        <p class="title_section">Thông tin</p>
        <div class="boxContent mt_20">
          <div class="boxInforListInner">
            <p class="inforAnimal"><span>Giống loài: </span>G. a. sharpii</p>
            <p class="inforAnimal">
              <span>Môi trường sống: </span>Đầm lầy, các vùng nước nông, các
              vùng đất ngập nước chua phèn có nhiều cỏ năn.
            </p>
            <p class="inforAnimal">
              <span>Phân bố: </span>Việt Nam, Lào, Campuchia, Myanmar, Thái Lan
              và Vân Nam
            </p>
            <p class="inforAnimal"><span>Số lượng: </span>Khoảng 11 cá thể</p>
            <p class="inforAnimal"><span>Lớp: </span>Lớp chim</p>
          </div>
          <div class="boxInnerContent">
            <p class="titleInner">Trạng thái bảo tồn</p>
            <p class="contentInner">
              Khoảng những năm 1980, vấn đề lớn nhất đe dọa vẹt là tốc độ nhanh
              chóng của nạn phá rừng và đánh bẫy trái phép. Dẫn đến sụt giảm
              loài này nhanh chóng. Từ năm 2004, loài vẹt đuôi dài đã gần như bị
              tuyệt chủng. Đây là loài chim nhỏ có đuôi dài, màu xanh (ở phần
              thân và đuôi), thường được người ta nuôi làm cảnh nhưng hiện nay
              đã bị mất giống. Nguyên nhân là do nạn săn bắt, kinh doanh và nuôi
              nhốt nên chúng dễ bị mắc bệnh. Thống kê cho thấy, trong năm 2010,
              loài vẹt này chỉ còn 85 cá thể. Toàn bộ các con đực và cái đều lần
              lượt tham gia giao phối bởi tổ chức ICMBio và chính phủ Bảo tồn
              Thiên nhiên Brazil để duy trì khỏi nạn tuyệt chủng. Đến 2015, số
              lượng cá thể tăng lên gần 100 cá thể nhưng vẫn rất ít. Cá thể cuối
              cùng của loài vẹt xanh đuôi dài đã biến mất trong tự nhiên từ năm
              2001, nhưng các nhà bảo tồn vẫn nỗ lực tìm kiếm trong suốt 17 năm
              qua. Đến cuối cùng, họ buộc phải chấp nhận sự thật và phân loại
              chúng vào danh sách đã tuyệt chủng vào năm 2018.
            </p>
            <p class="titleInner">Phân bố</p>
            <p class="contentInner">
              Những con vẹt đuôi dài nguồn gốc ở Mexico, Trung Mỹ, Nam Mỹ, và
              trước đây là vùng biển Caribbean. Phần lớn các loài có liên quan
              đến môi trường rừng rậm, đặc biệt là rừng nhiệt đới, nhưng những
              loài khác thích môi trường sống như rừng hoặc thảo nguyên.
            </p>
          </div>
        </div>
      </section>

      <section class="scMainImage mt_40">
        <p class="title_section">Ảnh</p>
        <div class="boxGridCustom mt_20">
          <div class="row">
            <div
              class="col-md-3 colCustom"
              @click="
                onShowImage(
                  'https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?cs=srgb&dl=pexels-pixabay-414102.jpg&fm=jpg'
                )
              "
            >
              <img
                src="https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?cs=srgb&dl=pexels-pixabay-414102.jpg&fm=jpg"
                alt=""
                class="imgAnimal"
              />
            </div>
            <div class="col-md-3 colCustom">
              <img
                src="https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?cs=srgb&dl=pexels-pixabay-414102.jpg&fm=jpg"
                alt=""
                class="imgAnimal"
              />
            </div>
            <div class="col-md-3 colCustom">
              <img
                src="https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?cs=srgb&dl=pexels-pixabay-414102.jpg&fm=jpg"
                alt=""
                class="imgAnimal"
              />
            </div>
            <div class="col-md-3 colCustom">
              <img
                src="https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?cs=srgb&dl=pexels-pixabay-414102.jpg&fm=jpg"
                alt=""
                class="imgAnimal"
              />
            </div>
            <div class="col-md-3 colCustom">
              <img
                src="https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?cs=srgb&dl=pexels-pixabay-414102.jpg&fm=jpg"
                alt=""
                class="imgAnimal"
              />
            </div>
            <div class="col-md-3 colCustom">
              <img
                src="https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?cs=srgb&dl=pexels-pixabay-414102.jpg&fm=jpg"
                alt=""
                class="imgAnimal"
              />
            </div>
          </div>
        </div>

        <Transition
          enter-active-class="animate__animated animate__zoomIn"
          leave-active-class="animate__animated animate__zoomOut"
        >
          <div
            class="boxOverlayImage"
            v-if="img_current"
            @click.self="closeShowImage"
          >
            <div class="boxShowImage">
              <img :src="img_current" alt="" class="imageShowCurrent" />
            </div>
          </div>
        </Transition>
      </section>

      <!-- can be done START -->
      <section class="sc__canBeDone mt_40" ref="scCanBeDone">
        <activity-can-be-done />
      </section>
      <!-- can be done END -->
    </div>
  </div>
</template>

<script>
import ActivityCanBeDone from "@/components/frontend/ActivityCanBeDone.vue";

export default {
  name: "AnimalView",
  components: {
    ActivityCanBeDone,
  },
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
