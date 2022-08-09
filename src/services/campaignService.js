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

  async getDetailCampaign(idCampaign, province) {
    isPendingCampaign.value = true;
    try {
      const dataRef = await axios.get(
        `/campaign/get-campaign/${idCampaign}/${province}`
      );

      return dataRef.data;
    } catch (error) {
      console.log("Error Blog: " + error);
    } finally {
      isPendingCampaign.value = false;
    }
  },

  async joinCampaign(idCampaign, idUser) {
    try {
      const dataRef = await axios.post(
        `/campaign/join-campaign/${idCampaign}/${idUser}`
      );

      return dataRef.data;
    } catch (error) {
      console.log("Error : " + error);
    }
  },

  async getInforDonateCampaign(idCampaign) {
    isPendingCampaign.value = true;
    try {
      const dataRef = await axios.get(`/campaign/donate/${idCampaign}`);

      return dataRef.data;
    } catch (error) {
      console.log("Error campaign: " + error);
    } finally {
      isPendingCampaign.value = false;
    }
  },
};

export { campaignService, isPendingCampaign };
