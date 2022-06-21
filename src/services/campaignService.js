import axios from "axios";

const campaignService = {
  async createCampaign(formCampaign) {
    try {
      const dataRef = await axios.post("/campaign/create", formCampaign, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return dataRef.data;
    } catch (error) {
      console.log("Error Blog: " + error);
    }
  },
};

export { campaignService };
