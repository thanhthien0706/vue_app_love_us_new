<template>
  <AdminDefault1>
    <div id="AdminAnimalView">
      <ul class="tabShowView">
        <li class="itemTab active">Động vật</li>
        <li class="itemTab">Thêm động vật</li>
      </ul>
      <hr class="lineHr" />
    </div>
  </AdminDefault1>
</template>

<script>
import AdminDefault1 from "@/layouts/admin_default_1.vue";

export default {
  name: "AdminAnimal",
  components: { AdminDefault1 },
};
</script>

<style></style>
