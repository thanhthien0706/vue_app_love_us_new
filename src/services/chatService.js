import axios from "axios";

const chatService = {
  async getMessenger(idGroupChat, limit, skip) {
    try {
      let query = `/campaign/messenger/${idGroupChat}`;
      if (limit) {
        query += `?limit=${limit}`;
      }
      if (skip) {
        query += `?skip=${skip}`;
      }

      const dataRef = await axios.get(query);

      return dataRef.data;
    } catch (error) {
      console.log("Error Blog: " + error);
    }
  },
};

export { chatService };
