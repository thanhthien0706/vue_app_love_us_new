<style></style>

<template>
  <div class="CreateCampaignView">
    <div id="bg__overlay"></div>

    <div class="boxMainFormCampaignn">
      <!-- <fa
        :icon="['fas', 'angle-left']"
        class="ic_back"
        @click="$router.go(-1)"
      /> -->

      <keep-alive>
        <component :is="currentComponent" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import CampaignCondition from "@/components/frontend/CampaignCondition.vue";

export default {
  name: "CreateCampaign",
  components: { CampaignCondition },
  data() {
    return {
      currentComponent: "CampaignCondition",
    };
  },
};
</script>
