<template>
  <div id="DonateView">
    <div id="bg__overlay"></div>
    <div
      class="boxContentDonate"
      v-if="!isPendingCampaign && dataInforCampaign != null"
    >
      <div class="col-custom col-custom-left">
        <div class="boxImage">
          <img
            :src="convert_image(dataInforCampaign.campaign_avatar)"
            alt=""
            class="imgCampaign"
          />
        </div>
      </div>
      <div class="col-custom col-custom-right">
        <div class="boxContentInput">
          <p class="titleText">
            Quyên góp cho
            <span class="nameCampaign">{{
              dataInforCampaign.campaign_name
            }}</span>
          </p>
          <div class="boxCheckCampaign">
            <p class="nameInput">Ẩn danh</p>
            <div class="boxToggle">
              <input type="checkbox" class="checkbox" />
              <div class="knobs"></div>
              <div class="layer"></div>
            </div>
          </div>

          <div class="boxCurrentMoney">
            <p class="titleText">Số liền</p>
            <p class="txtMoney">
              {{
                dataInforCampaign.dataDonate.Donate_max_money == 0
                  ? "&infin;"
                  : convert_money(dataInforCampaign.dataDonate.Donate_max_money)
              }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="boxLoading" v-else>
      <div class="lds-ripple dark">
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { campaignService, isPendingCampaign } from "@/services/campaignService";
import ConvertImage from "@/utils/convertImage";
import convertMoney from "@/utils/convertMoney";

export default {
  name: "DonateView",
  setup() {
    return { isPendingCampaign };
  },
  data() {
    return {
      dataInforCampaign: null,
    };
  },
  created() {
    this.intiDataMain();
  },
  methods: {
    async intiDataMain() {
      try {
        const dataRef = await campaignService.getInforDonateCampaign(
          this.$route.query._id
        );

        if (dataRef.success) {
          this.dataInforCampaign = dataRef.data[0];
        }
      } catch (error) {
        console.log("Loi donate : " + error.message);
      }
    },

    onHandleMoneyDonate(dataInforCampaign) {
      if (dataInforCampaign) {
        let temp = 0;
        dataInforCampaign.forEach((el) => {
          temp += el.Donor_money;
        });

        return temp;
      } else {
        return 0;
      }
    },
    convert_image: ConvertImage,
    convert_money: convertMoney,
  },
  watch: {},
};
</script>

<style></style>
