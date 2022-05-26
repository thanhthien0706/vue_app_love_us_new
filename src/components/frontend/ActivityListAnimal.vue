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
              :slides-per-view="2"
              :centered-slides="true"
              :zoom="true"
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
                <div class="row">
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
                        <span>Phân bố: </span>{{ currentAnimal.quantity }}
                      </p>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="boxRightInner">
                      <img
                        :src="currentAnimal.listImage[0]"
                        alt=""
                        class="imgMain"
                      />
                      <div class="boxSlideImageAnimal">
                        <swiper
                          class="swiper swiperCustomAnimal"
                          :modules="modules"
                          :space-between="20"
                          :slides-per-view="3"
                          :centered-slides="true"
                        >
                          <swiper-slide
                            class="slide slideCustomAnimal"
                            v-for="(item, index) in currentAnimal.listImage"
                            :key="index"
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
  </div>
</template>

<script>
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import SubString from "@/utils/sub_string";

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
  },
  data() {
    return {
      currentAnimal: {
        listImage: [],
        name: "",
        description: "",
        species: "",
        habitat: "",
        quantity: "",
        distribution: "",
      },

      dataListAnimal: [
        {
          id: 0,
          listImage: [
            "https://afamilycdn.com/150157425591193600/2022/1/24/gau-meo-raccoon-9-1642973573609514622019.jpg",
            "https://sohanews.sohacdn.com/thumb_w/660/2019/10/1/photo-2-15698915098832125368891.jpg",
            "https://anphupet.com/wp-content/uploads/2021/01/gau-meo-dac-diem.jpg",
            "https://bizweb.dktcdn.net/100/344/040/articles/tt3.jpg?v=1548318379740",
          ],
          name: "Gấu mèo",
          description:
            "Gấu mèo (danh pháp hai phần: Procyon lotor) là một loài động vật có vú bản địa Bắc Mỹ. Đây là loài lớn nhất trong họ Gấu mèo (Procyonidae). Loài này có thân dài 40–70 cm, cân nặng 3,5–9 kg. Chúng hoạt động về đêm, chúng chủ yếu ăn thịt, với một chế độ ăn bao gồm khoảng 40% động vật không xương sống, 33% thức ăn thực vật và động vật có xương sống 27%. Bộ lông có màu xám, trong đó gần 90% là lông dưới dày đặc, cách ly chống lại thời tiết lạnh. Hai tính năng đặc biệt nhất của nó là cực kỳ khéo léo bàn chân trước của nó và mặt nạ trên khuôn mặt của nó, đó là các chủ đề trong thần thoại của một số bộ lạc da đỏ Mỹ. Gấu mèo được ghi nhận là có trí thông minh, với các nghiên cứu cho thấy rằng chúng có thể nhớ các cách để thực hiện nhiệm vụ lên đến ba năm sau đó.",
          species: "P.lotor",
          habitat: "rừng lá sớm rụng và rừng hỗn hợp của Bắc Mỹ",
          quantity: "3000",
          distribution:
            "Bắc Mỹ, mở rộng phạm vi đến khu vực miền núi, đầm lầy ven biển, và các khu vực đô thị, nơi chúng bị nhiều chủ nhà xem là loài gây hại",
        },
        {
          id: 1,
          listImage: [
            "https://cdn.pixabay.com/photo/2016/05/20/21/50/pigeon-1406081_960_720.jpg",
            "https://sohanews.sohacdn.com/thumb_w/660/2019/10/1/photo-2-15698915098832125368891.jpg",
            "https://anphupet.com/wp-content/uploads/2021/01/gau-meo-dac-diem.jpg",
            "https://bizweb.dktcdn.net/100/344/040/articles/tt3.jpg?v=1548318379740",
          ],
          name: "Gấu mèo",
          description:
            "Gấu mèo (danh pháp hai phần: Procyon lotor) là một loài động vật có vú bản địa Bắc Mỹ. Đây là loài lớn nhất trong họ Gấu mèo (Procyonidae). Loài này có thân dài 40–70 cm, cân nặng 3,5–9 kg. Chúng hoạt động về đêm, chúng chủ yếu ăn thịt, với một chế độ ăn bao gồm khoảng 40% động vật không xương sống, 33% thức ăn thực vật và động vật có xương sống 27%. Bộ lông có màu xám, trong đó gần 90% là lông dưới dày đặc, cách ly chống lại thời tiết lạnh. Hai tính năng đặc biệt nhất của nó là cực kỳ khéo léo bàn chân trước của nó và mặt nạ trên khuôn mặt của nó, đó là các chủ đề trong thần thoại của một số bộ lạc da đỏ Mỹ. Gấu mèo được ghi nhận là có trí thông minh, với các nghiên cứu cho thấy rằng chúng có thể nhớ các cách để thực hiện nhiệm vụ lên đến ba năm sau đó.",
          species: "P.lotor",
          habitat: "rừng lá sớm rụng và rừng hỗn hợp của Bắc Mỹ",
          quantity: "3000",
          distribution:
            "Bắc Mỹ, mở rộng phạm vi đến khu vực miền núi, đầm lầy ven biển, và các khu vực đô thị, nơi chúng bị nhiều chủ nhà xem là loài gây hại",
        },
        {
          id: 2,
          listImage: [
            "https://afamilycdn.com/150157425591193600/2022/1/24/gau-meo-raccoon-9-1642973573609514622019.jpg",
            "https://sohanews.sohacdn.com/thumb_w/660/2019/10/1/photo-2-15698915098832125368891.jpg",
            "https://anphupet.com/wp-content/uploads/2021/01/gau-meo-dac-diem.jpg",
            "https://bizweb.dktcdn.net/100/344/040/articles/tt3.jpg?v=1548318379740",
          ],
          name: "Gấu mèo",
          description:
            "Gấu mèo (danh pháp hai phần: Procyon lotor) là một loài động vật có vú bản địa Bắc Mỹ. Đây là loài lớn nhất trong họ Gấu mèo (Procyonidae). Loài này có thân dài 40–70 cm, cân nặng 3,5–9 kg. Chúng hoạt động về đêm, chúng chủ yếu ăn thịt, với một chế độ ăn bao gồm khoảng 40% động vật không xương sống, 33% thức ăn thực vật và động vật có xương sống 27%. Bộ lông có màu xám, trong đó gần 90% là lông dưới dày đặc, cách ly chống lại thời tiết lạnh. Hai tính năng đặc biệt nhất của nó là cực kỳ khéo léo bàn chân trước của nó và mặt nạ trên khuôn mặt của nó, đó là các chủ đề trong thần thoại của một số bộ lạc da đỏ Mỹ. Gấu mèo được ghi nhận là có trí thông minh, với các nghiên cứu cho thấy rằng chúng có thể nhớ các cách để thực hiện nhiệm vụ lên đến ba năm sau đó.",
          species: "P.lotor",
          habitat: "rừng lá sớm rụng và rừng hỗn hợp của Bắc Mỹ",
          quantity: "3000",
          distribution:
            "Bắc Mỹ, mở rộng phạm vi đến khu vực miền núi, đầm lầy ven biển, và các khu vực đô thị, nơi chúng bị nhiều chủ nhà xem là loài gây hại",
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
      console.log(index);
      this.currentAnimal = this.dataListAnimal[index];
    },
    sub_string: SubString,
  },
};
</script>
