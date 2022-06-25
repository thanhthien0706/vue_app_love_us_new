import axios from "axios";
import { ref } from "vue";

const isPendingCampaign = ref(null);

const campaignService = {
  async createCampaign(formCampaign) {
    isPendingCampaign.value = true;
    try {
      const dataRef = await axios.post("/campaign/create", formCampaign, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return dataRef.data;
    } catch (error) {
      console.log("Error Blog: " + error);
    } finally {
      isPendingCampaign.value = false;
    }
  },
};

export { campaignService, isPendingCampaign };
