import axios from "axios";
import { ref } from "vue";

const isPending = ref(null);

const blogService = {
  // [create blog] /blog/create
  async createBlog(dataBlog) {
    isPending.value = true;
    try {
      const dataRef = await axios.post("/blog/create", dataBlog);

      return dataRef.data;
    } catch (err) {
      console.log("Error Blog: " + err);
    } finally {
      isPending.value = false;
    }
  },

  // [GET BLOG ADMIN WITH ID] /blog/me/:idUser

  async getBlogMeById(idUser) {
    try {
      const dataRef = await axios.get(`/blog/me/${idUser}`);

      return dataRef.data;
    } catch (err) {
      console.log("Error Blog: " + err);
    }
  },
};

export { blogService, isPending };
