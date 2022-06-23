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

  async getAllGroupChat() {
    try {
      const dataRef = await axios.get("/campaign/group-chat/get-all");

      return dataRef.data;
    } catch (error) {
      console.log("Error Blog: " + error);
    }
  },
};

export { campaignService, isPendingCampaign };
