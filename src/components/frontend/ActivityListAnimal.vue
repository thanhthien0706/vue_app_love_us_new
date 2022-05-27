<template>
  <div id="ActivityListAnimal" class="">
    <p class="header__title">Danh sách động vật</p>
    <div class="boxMainContent">
      <div class="boxHeaderMain">
        <div class="d-flex justify-content-end align-items-center">
          <!-- <ul class="list__tab">
            <li
              class="item__tab"
              v-for="(item, index) in dataTab"
              :key="item.id"
              :class="{ active: index == currentTab }"
              @click="onChageCampaign(index)"
            >
              {{ item.name }}
            </li>
          </ul> -->
          <input
            type="text"
            placeholder="Môi trường , lớp, loài"
            class="input__search"
          />
        </div>
      </div>

      <div class="boxSlideShowAnimal">
        <div class="d-flex align-items-center">
          <div class="leftInner">
            <swiper
              class="swiper swiperCustom"
              :modules="modules"
              direction="vertical"
              :space-between="30"
              :slides-per-view="3"
              :centered-slides="true"
              :autoplay="{
                delay: 1500,
                disableOnInteraction: false,
              }"
            >
              <swiper-slide
                class="slide slideCustom"
                v-for="(item, index) in dataListAnimal"
                :key="item.id"
                @click="onSendAnimal(index)"
              >
                <div class="boxInnerItemAnimal">
                  <img :src="item.listImage[0]" alt="" class="imgAnimal" />
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="rightInner">
            <div class="backgroundMainItem">
              <div class="boxInnerInfor">
                <div class="row align-items-center">
                  <div class="col-md-7">
                    <div class="boxLeftInner">
                      <p class="titleName">{{ currentAnimal.name }}</p>
                      <p class="description">
                        {{ sub_string(currentAnimal.description, 300) }}
                      </p>
                      <p class="inforAnimal">
                        <span>Giống loài: </span>{{ currentAnimal.species }}
                      </p>
                      <p class="inforAnimal">
                        <span>Môi trường sống: </span
                        >{{ currentAnimal.habitat }}
                      </p>
                      <p class="inforAnimal">
                        <span>Phân bố: </span>{{ currentAnimal.distribution }}
                      </p>
                      <p class="inforAnimal">
                        <span>Số lượng: </span>{{ currentAnimal.quantity }}
                      </p>
                      <p class="inforAnimal">
                        <span>Lớp: </span>{{ currentAnimal.classAnimal }}
                      </p>

                      <div class="btnSeenInforAnimal">
                        <button
                          class="btnSeen btnSeenClass"
                          @click="onShowPopupClassAnimal"
                        >
                          Xem theo lớp
                        </button>
                        <button class="btnSeen btnSeenDetail">
                          Xem Chi tiết
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="boxRightInner">
                      <img
                        :src="currentAnimal.listImage[0]"
                        alt=""
                        class="imgMain"
                        ref="imageCurrentAnimal"
                      />
                      <div class="boxSlideImageAnimal">
                        <swiper
                          class="swiper swiperCustomAnimal"
                          :modules="modules"
                          :space-between="20"
                          :slides-per-view="3"
                          :centered-slides="true"
                          :autoplay="{
                            delay: 1500,
                            disableOnInteraction: false,
                          }"
                        >
                          <swiper-slide
                            class="slide slideCustomAnimal"
                            v-for="(item, index) in currentAnimal.listImage"
                            :key="index"
                            @click="onChangeImageCurrentAnimal(index)"
                          >
                            <img :src="item" alt="" />
                          </swiper-slide>
                        </swiper>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <activity-popup-class-animal
      :statusShowPopup="statusShowPopup"
      @closePopup="onClosePopup"
    />
  </div>
</template>

<script>
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import SubString from "@/utils/sub_string";
import ActivityPopupClassAnimal from "@/components/frontend/ActivityPopupClassAnimal.vue";

export default {
  name: "ActivityListAnimal",
  setup() {
    return {
      modules: [Autoplay, Navigation],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    ActivityPopupClassAnimal,
  },
  data() {
    return {
      statusShowPopup: false,
      currentAnimal: {
        listImage: [],
        name: "",
        description: "",
        species: "",
        habitat: "",
        quantity: "",
        distribution: "",
        classAnimal: "",
      },

      dataListAnimal: [
        {
          id: 0,
          listImage: [
            "https://nld.mediacdn.vn/2013/11-chot-ee76b.jpg",
            "https://thesaigontimes.vn/Uploads/Articles/50059/e86f1_seu-o-tram-chim-tam-nong.jpg",
            "https://ktmt.vnmediacdn.com/images/2021/01/09/9-1610186880-seu-dau-do.jpg",
            "https://thesaigontimes.vn/Uploads/Articles/50059/e86f1_seu-o-tram-chim-tam-nong.jpg",
          ],
          name: "Sếu đầu đỏ",
          description:
            "Sếu đầu đỏ, hay còn gọi là sếu cổ trụi, danh pháp ba phần: Grus antigone sharpii[2], là một phân loài của loài sếu sarus. Đây là phân loài chim quý hiếm tại miền nam Việt Nam, nằm trong Sách đỏ Việt Nam và Sách đỏ IUCN thế giới. Sếu đầu đỏ phương Đông trưởng thành cao khoảng 150–180 cm; sải cánh từ 220–250 cm và có trọng lượng trung bình 8–10 kg, là loài lớn nhất trong họ sếu.",
          species: "G. a. sharpii",
          habitat:
            "Đầm lầy, các vùng nước nông, các vùng đất ngập nước chua phèn có nhiều cỏ năn.",
          quantity: "Khoảng 11 cá thể",
          classAnimal: "Lớp chim",
          distribution:
            "Việt Nam, Lào, Campuchia, Myanmar, Thái Lan và Vân Nam",
        },
        {
          id: 1,
          listImage: [
            "https://cdn.pixabay.com/photo/2016/05/20/21/50/pigeon-1406081_960_720.jpg",
            "https://www.thespruce.com/thmb/aRa8MwXZTmoeQ80Zy5jLXuYygZM=/1500x1000/filters:fill(auto,1)/mourning-dove-58a6daf65f9b58a3c9161352.jpg",
            "https://feederwatch.org/wp-content/uploads/2021/02/MD-7-1024x683.jpg",
            "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/60386921/1800",
          ],
          name: "Bồ cầu nâu",
          description:
            "Bồ câu nâu (danh pháp hai phần: Columba punicea) là một loài chim trong họ Columbidae. Chiều dài của bồ câu nâu là từ 36 - 40,5 cm. Bồ câu đực khi trưởng thành có phần đầu màu xám trắng còn phần trên thì có màu nâu tía với độ bóng màu xanh lá cây mờ nhạt trên cổ, thân và lưng có màu xanh nhưng óng ánh hơn, mông sẫm và đuôi có màu xám phủ hết mông, cổ họng và phần dưới có màu xám. Còn con cái thì có phần đầu màu nâu xám và nâu.",
          species: "Columbiformes",
          habitat: "rừng thường xanh nguyên sinh hoặc thứ sinh",
          classAnimal: "Lớp chim",
          quantity: "3.750-14.999 cá thể",
          distribution:
            "Bắc Ấn Độ, Bangladesh, Myanmar, Thái Lan, Lào, Campuchia và Việt Nam",
        },
        {
          id: 2,
          listImage: [
            "https://i-vnexpress.vnecdn.net/2013/11/14/Saola-010-in-viet-nam-1992-ap-9875-1384401101_m_460x0.jpg",
            "https://vnn-imgs-f.vgcloud.vn/2021/07/09/15/google-phoi-hop-bao-ton-loai-dong-vat-hoang-da-quy-hiem-bac-nhat-viet-nam.jpg",
            "https://photo-cms-anninhthudo.zadn.vn/w600/Uploaded/2022/206/2019_10_29/4-vuon-di-san-asean-moi-tai-viet-nam_13.jpg",
            "https://vcdn-vnexpress.vnecdn.net/2017/07/11/saola-6599-1499739855.jpg",
          ],
          name: "Sao la",
          classAnimal: "Lớp thú",
          description:
            "Sao la, được mệnh danh là 'Kỳ lân châu Á', là một trong những loài thú lớn đặc hữu có nguy cơ tuyệt chủng cao nhất trên thế giới. Cho đến nay chưa có nhà sinh vật học nào từng nhìn thấy Sao la ngoài tự nhiên, và những hình ảnh hoang dã hiếm hoi của loài này có được là nhờ vào hệ thống bẫy ảnh do các nhà bảo tồn thiết lập trong các khu rừng tại Lào và Việt Nam. Chính vì sự quý hiếm và bí ẩn đó mà ít người biết được tính cấp thiết của việc bảo vệ những cá thể Sao la cuối cùng, cũng như sự quan trọng của việc dành nguồn lực cho công tác bảo tồn trước khi loài này hoàn toàn biến mất",
          species: "P.nghetinhensis",
          habitat:
            "Nơi có suối có độ cao trên 200 – 600 m trên mực nước biển dọc dãy Trường Sơn",
          quantity: "50 cá thể",
          distribution: "rừng Trường Sơn tại Việt Nam và Lào",
        },
        {
          id: 3,
          listImage: [
            "https://vcdn-vnexpress.vnecdn.net/2021/09/06/vuon-den-ma-trang-7322-1628607-5767-5110-1630922830.jpg",
            "https://image.xahoi.com.vn/resize_480x600/news/2012/5/25/vuon2.jpg",
            "https://photo-cms-sggp.zadn.vn/Uploaded/2022/duaeymdrei/2021_08_11/untitled-1_riht.jpg",
            "https://kenh14cdn.com/Images/Uploaded/Share/2011/07/25/110725kpvuonbacma-1.jpg",
          ],
          name: "Vượn đen má trắng",
          classAnimal: "Lớp thú",
          description:
            "Vượn đen má trắng (danh pháp khoa học: Nomascus leucogenys) là loài vượn bản địa của Việt Nam, Lào và tỉnh Vân Nam thuộc Trung Quốc. Loài này có quan hệ họ hàng gần gũi với loài Nomascus siki. Các con cái của hai loài này hầu như không phân biệt với nhau. Bộ gen của N. leucogenys đã được lập trình tự và công bố năm 2011. Một quần thể 455 con vượn đen má trắng gồm nhiều đàn nhỏ đã được phát hiện năm 2011 tại Vườn quốc gia Pù Mát, tỉnh Nghệ An, Việt Nam, gần biên giới với Lào. Quần thể này nằm cách xa khu dân cư và chiếm 2/3 số lượng vượn đen má trắng tại Việt Nam. Tính đến năm 2011, số lượng vượn má trắng đã giảm hơn 80% trong 45 năm.",
          species: "N. leucogenys",
          habitat: "rừng rậm",
          quantity: "Khoảng 60 cá thể",
          distribution: "Việt Nam, Lào và tỉnh Vân Nam thuộc Trung Quốc",
        },
      ],
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.currentAnimal = this.dataListAnimal[0];
    },
    onSendAnimal(index) {
      this.currentAnimal = this.dataListAnimal[index];
    },
    onClosePopup() {
      this.statusShowPopup = false;
    },
    onShowPopupClassAnimal() {
      this.statusShowPopup = true;
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    },
    onChangeImageCurrentAnimal(index) {
      this.$refs.imageCurrentAnimal.src = this.currentAnimal.listImage[index];
    },
    sub_string: SubString,
  },
};
</script>
