<style></style>

<template>
  <div class="CreateCampaignView">
    <div id="bg__overlay"></div>

    <div class="boxCreateInner">
      <div class="boxTimelineCreate">
        <ul class="ListTimeline">
          <li
            class="itemTimeline"
            :class="{ active: checkPassTimeline('pass1') }"
          >
            <div class="boxContent">
              <div class="circle">1</div>
              <p class="content">Nhập thông tin tổ chức</p>
            </div>
          </li>

          <li
            class="itemTimeline"
            :class="{ active: checkPassTimeline('pass2') }"
          >
            <hr class="line-dot" />
            <div class="boxContent">
              <div class="circle">2</div>
              <p class="content">Nhập thông tin chiến dịch</p>
            </div>
          </li>

          <li
            class="itemTimeline"
            :class="{ active: checkPassTimeline('pass3') }"
          >
            <hr class="line-dot" />
            <div class="boxContent">
              <div class="circle">3</div>
              <p class="content">Xác nhận</p>
            </div>
          </li>

          <li
            class="itemTimeline"
            :class="{ active: checkPassTimeline('pass4') }"
          >
            <hr class="line-dot" />
            <div class="boxContent">
              <div class="circle">4</div>
              <p class="content">Hoàn thành</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="mainShowComponent">
        <keep-alive>
          <component
            :is="currentComponent"
            @dataOrganize="setDataOrganize($event)"
            @onPreClickPageInforOrganize="
              currentComponent = 'CampaignInforOrganize'
            "
          />
        </keep-alive>

        <!-- <div class="boxButtonHandle">
          <button class="btnPre">Quay lại</button>
          <button class="btnContinue">{{ nameContinue }}</button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import CampaignInforOrganize from "@/components/frontend/campaign/CampaignInforOrganize.vue";
import CampaignInforNew from "@/components/frontend/campaign/CampaignInforNew.vue";

export default {
  name: "CreateCampaign",
  components: { CampaignInforOrganize, CampaignInforNew },
  data() {
    return {
      listPassCreate: [],
      currentComponent: "",
      nameContinue: "Tiếp theo",
      dataMainCreateCampaign: {
        organize: null,
      },
    };
  },
  mounted() {
    this.initDataMain();
  },
  methods: {
    initDataMain() {
      this.currentComponent = "CampaignInforOrganize";
    },
    setDataOrganize(event) {
      this.dataMainCreateCampaign.organize = { ...event };
      this.currentComponent = "CampaignInforNew";
    },
    checkPassTimeline(component) {
      if (this.listPassCreate.includes(component)) {
        {
          return true;
        }
      } else {
        return false;
      }
    },
  },
  watch: {
    currentComponent(newVal) {
      this.listPassCreate = [];

      if (newVal == "CampaignInforOrganize") {
        this.listPassCreate = ["pass1"];
      } else if (newVal == "CampaignInforNew") {
        this.listPassCreate = ["pass1", "pass2"];
      } else if (newVal == "test3") {
        this.listPassCreate = ["pass1", "pass2", "pass3"];
      } else if (newVal == "test4") {
        this.listPassCreate = ["pass1", "pass2", "pass3", "pass4"];
      }
    },
  },
};
</script>
