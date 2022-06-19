import axios from "axios";
import { ref } from "vue";

const isPending = ref(null);
const isPendingCheckAuth = ref(null);

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

  async checkStatusAuthAccount() {
    isPendingCheckAuth.value = true;
    try {
      const dataRef = await axios.get("/authen-account/check-authen-account");

      return dataRef.data;
    } catch (err) {
      console.log("Error Blog: " + err);
    } finally {
      isPendingCheckAuth.value = false;
    }
  },
};

export { authAccountService, isPending };
