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
              <li class="itemTab active">Mô tả</li>
              <li class="itemTab">Nhà Hảo tâm</li>
              <li class="itemTab">Ảnh</li>
            </ul>

            <div class="boxShowMainContent">
              <keep-alive>
                <component :is="currentTab" />
              </keep-alive>
            </div>
          </div>
          <div class="col-md-4">2</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formatDate from "@/utils/formateDate";
import ItemTabDesc from "@/components/frontend/campaign/ItemTabDesc.vue";

export default {
  name: "CampaignDetail",
  data() {
    return {
      currentTab: "ItemTabDesc",
      isShowShare: false,
    };
  },
  components: { ItemTabDesc },
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
