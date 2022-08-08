import axios from "axios";

const donateService = {
  async createDonate(formData) {
    try {
      const dataRef = await axios.post("/donate/create", formData, {
        header: { "Content-Type": "multipart/form-data" },
      });

      return dataRef.data;
    } catch (error) {
      console.log("Error Blog: " + error);
    }
  },
};

export { donateService };
