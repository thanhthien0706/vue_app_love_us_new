<template>
  <div id="boxMainCampaignDetail">
    <div id="bg__overlay"></div>
    <div class="container_1024 container_box">
      <div class="boxBack">
        <fa
          :icon="['fas', 'angle-left']"
          class="ic_back"
          @click="$router.go(-1)"
        />
        <p class="titlePage">Chiến dịch Us Love</p>
      </div>

      <div class="mainContentCampaign">
        <p class="nameCampaign">
          Cùng đem yêu thương đến bà Năm ở Quán trọ Trăng Khuyết Q.12
        </p>

        <div class="boxTime">
          <p class="time">
            {{ format_date("2022-07-05T14:42:00.592+00:00", "DD-MM-YYYY") }}
          </p>

          <div class="boxBtnShare">
            <button class="btnShare" @click.self="isShowShare = !isShowShare">
              Chia sẻ
              <fa :icon="['fas', 'share']" class="ic_share" />
            </button>

            <Transition
              enter-active-class="animate__animated animate__fadeInDown animate__faster"
              leave-active-class="animate__animated animate__fadeOutDown animate__faster"
            >
              <ul class="dropdownShareList" v-show="isShowShare">
                <li class="itemShare">
                  <fa :icon="['fas', 'link']" class="ic_item_share" />
                  <span class="nameItem">Sao chép liên kết</span>
                </li>
              </ul>
            </Transition>
          </div>
        </div>

        <div class="boxImgCampaign">
          <img
            src="https://meta.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg"
            alt=""
            class="image_campaign"
          />
        </div>

        <div class="row boxContentCustom">
          <div class="col-md-8">
            <ul class="boxListtabContent">
              <li
                class="itemTab"
                :class="{ active: currentTab == 'ItemTabDesc' }"
                @click="currentTab = 'ItemTabDesc'"
              >
                Mô tả
              </li>
              <li
                class="itemTab"
                :class="{ active: currentTab == 'ItemTableDonate' }"
                @click="currentTab = 'ItemTableDonate'"
              >
                Nhà hảo tâm
              </li>
              <li
                class="itemTab"
                :class="{ active: currentTab == 'ItemListImage' }"
                @click="currentTab = 'ItemListImage'"
              >
                Ảnh
              </li>
            </ul>

            <div class="boxShowMainContent">
              <keep-alive>
                <component :is="currentTab" />
              </keep-alive>
            </div>
          </div>
          <div class="col-md-4">
            <div class="boxInforRight">
              <p class="titleName">Tham gia chiến dịch</p>
              <div class="boxMember">
                <p>Thành viên</p>
                <p><span class="maxMember">1</span> / 300</p>
              </div>

              <div class="boxListMember">
                <ul class="listMember">
                  <li class="itemMember">
                    <div class="boxLeft">
                      <img
                        src="https://meta.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg"
                        alt=""
                        class="avatar"
                      />
                      <p class="name">Thanh thien</p>
                    </div>

                    <div class="boxRight">
                      <p class="date">07/06/2002</p>
                    </div>
                  </li>

                  <li class="itemMember">
                    <div class="boxLeft">
                      <img
                        src="https://meta.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg"
                        alt=""
                        class="avatar"
                      />
                      <p class="name">Thanh thien</p>
                    </div>

                    <div class="boxRight">
                      <p class="date">07/06/2002</p>
                    </div>
                  </li>
                </ul>
              </div>

              <button class="btnJoin">Tham gia ngay</button>
            </div>

            <div class="boxInforRight">
              <p class="titleName">Thông tin quyên góp</p>
              <div class="boxMoney">
                <span class="currentMoney">59.000đ</span> quyên góp /
                400.000.000đ
              </div>
              <div class="boxInforCounter">
                <div class="line"></div>
                <div class="row timeLineCounter">
                  <div class="col-md-4">
                    <div class="boxInnerContent">
                      <p class="titleText">Lượt</p>
                      <p class="counterText">7</p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="boxInnerContent">
                      <p class="titleText">Đạt được</p>
                      <p class="counterText">0.01%</p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="boxInnerContent">
                      <p class="titleText">Thời hạn</p>
                      <p class="counterText">34 ngày</p>
                    </div>
                  </div>
                </div>
              </div>
              <button class="btnDonate">Quyên góp</button>
            </div>
          </div>
        </div>
      </div>

      <div class="boxAnotherCampaign">
        <p class="titleText">Các chiến dịch khác</p>
        <div class="row boxShowAnothorCampaign">
          <div class="col-md-4">
            <!-- <ItemAnotherCampaign /> -->
          </div>
          <div class="col-md-4">2</div>
          <div class="col-md-4">3</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formatDate from "@/utils/formateDate";
import ItemTabDesc from "@/components/frontend/campaign/ItemTabDesc.vue";
import ItemTableDonate from "@/components/frontend/campaign/ItemTableDonate.vue";
import ItemListImage from "@/components/frontend/campaign/ItemListImage.vue";
// import ItemAnotherCampaign from "@/components/frontend/campaign/ItemAnotherCampaign.vue";

export default {
  name: "CampaignDetail",
  data() {
    return {
      currentTab: "ItemTabDesc",
      isShowShare: false,
    };
  },
  components: {
    ItemTabDesc,
    ItemTableDonate,
    ItemListImage,
    // ItemAnotherCampaign,
  },
  mounted() {
    this.baseMethod();
  },
  methods: {
    format_date: formatDate.basicFormat,
    baseMethod() {
      // Event close menu share
      document.body.addEventListener(
        "click",
        (e) => {
          e.preventDefault();
          this.isShowShare = false;
        },
        true
      );
    },
  },
};
</script>

<style></style>
