import axios from "axios";
import { ref } from "vue";

const isPending = ref(null);

const AnimalService = {
  async createAnimal(dataAnimal) {
    isPending.value = true;
    try {
      const dataRef = await axios.post(`animal`, dataAnimal);

      return dataRef.data;
    } catch (error) {
      console.log("Error animal: " + error);
    } finally {
      isPending.value = false;
    }
  },
};

export { AnimalService, isPending };
