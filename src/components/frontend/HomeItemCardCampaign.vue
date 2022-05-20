<style lang="scss"></style>

<template>
  <div
    class="card_campaigns"
    :style="{ backgroundImage: 'url(' + dataItemCampaign.img + ')' }"
  >
    <div class="box__card__inner">
      <div class="box__header__card">
        <div class="header__title__card">
          <p class="title__card">{{ sub_string(dataItemCampaign.name, 20) }}</p>
          <p class="time_card">{{ dataItemCampaign.date }}</p>
        </div>
        <p class="status__card">{{ dataItemCampaign.status }}</p>
      </div>
      <p class="description__card">
        {{ sub_string(dataItemCampaign.description, 250) }}
      </p>
      <div class="btn__card" @click="onEmitShowPopup(dataItemCampaign)">GO</div>
    </div>
    <!-- <div class="overlay"></div> -->
  </div>
</template>

<script>
import SubString from "@/utils/sub_string";

export default {
  name: "CardCampaigns",
  props: ["dataItemCampaign"],
  methods: {
    onEmitShowPopup(data) {
      this.$emit("show-popup", data);
    },
    sub_string: SubString,
  },
};
</script>
