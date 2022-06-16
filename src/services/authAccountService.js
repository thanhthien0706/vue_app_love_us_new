import axios from "axios";
import { ref } from "vue";

const isPending = ref(null);

const authAccountService = {
  async sendInforAuthen(idUser, formImage) {
    isPending.value = true;
    try {
      const dataRef = await axios.post(
        `/authen-account/send-infor-auth/${idUser}`,
        formImage
      );

      return dataRef.data;
    } catch (err) {
      console.log("Error Blog: " + err);
    } finally {
      isPending.value = false;
    }
  },
};

export { authAccountService, isPending };
