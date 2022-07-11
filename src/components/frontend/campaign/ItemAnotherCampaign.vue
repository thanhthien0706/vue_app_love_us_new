<template>
  <div class="ItemAnotherCampaign">
    <div class="boxImage">
      <img
        :src="convert_image(dataCampaign.campaign_avatar)"
        alt=""
        class="imgCampaign"
      />
      <div class="boxQuickView">
        <fa :icon="['fas', 'eye']" class="ic_eye" />
      </div>
    </div>

    <div class="boxContentMain">
      <p class="titleCampaign">
        {{ sub_string(dataCampaign.campaign_name, 60) }}
      </p>
      <div class="boxOrganizeShow">
        <div class="boxLeft">
          <img
            :src="convert_image(dataCampaign.dataOrganization[0].CO_avatar)"
            alt=""
            class="avatar"
          />
          <p class="name">
            {{ sub_string(dataCampaign.dataOrganization[0].CO_name, 60) }}
          </p>
        </div>
        <div class="boxRight">
          <p class="time">
            {{ convert_to_week(dataCampaign.campaign_start_time) }}
          </p>
        </div>
      </div>

      <div class="boxShowMember">
        <p class="name">Thành viên</p>
        <p class="counter">
          <span class="counterCurrent">{{
            dataCampaign.dataInforMembers.length
          }}</span>
          /
          {{
            dataCampaign.dataMembers[0].CM_max_members == 0
              ? "&infin;"
              : dataCampaign.dataMembers[0].CM_max_members
          }}
        </p>
      </div>

      <div class="boxMainTimeline">
        <p class="money">
          <span class="currentMonney">{{
            onHandleMoneyDonate(dataCampaign.dataInforDonor)
          }}</span>
          /
          {{
            dataCampaign.dataDonate[0].Donate_max_money == 0
              ? "&infin;"
              : convert_money(dataCampaign.dataDonate[0].Donate_max_money)
          }}
        </p>

        <div class="lineShow">
          <div class="lineInner"></div>
        </div>

        <div class="row rowCounterCustom align-items-center">
          <div class="col-md-4">
            <div class="boxContentInner">
              <p class="nameCounterText">Lượt</p>
              <p class="numberText">2.8.42</p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="boxContentInner">
              <p class="nameCounterText">Đạt được</p>
              <p class="numberText">2.8.42</p>
            </div>
          </div>

          <div class="col-md-4">
            <button class="btnDonate">Quyên góp</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConvertImage from "@/utils/convertImage";
import SubString from "@/utils/sub_string";
import formatDate from "@/utils/formateDate";
import convertMoney from "@/utils/convertMoney";

export default {
  name: "ItemAnotherCampaign",
  props: ["dataCampaign"],
  data() {
    return {
      text: "Gây quỹ tặng 40 nụ cười thay đổi cuộc đời cho các em bé hở môi, hàm ếch",
    };
  },
  methods: {
    onHandleMoneyDonate(dataDonate) {
      if (dataDonate.length) {
        console.log("vao if");
      } else {
        return "0đ";
      }
    },
    sub_string: SubString,
    convert_image: ConvertImage,
    convert_to_week: formatDate.convertToWeek,
    convert_money: convertMoney,
  },
};
</script>

<style></style>
