<template>
  <AdminDefault1>
    <div id="AdminAuthAccount">
      <AuthAccountInfor />

      <hr class="line" />

      <div class="tabMainBox">
        <ul class="listTab">
          <li class="itemTab active">Chưa xác nhận</li>
          <li class="itemTab">Đã xác thực</li>
        </ul>

        <keep-alive>
          <component :is="currentComponent" />
        </keep-alive>
      </div>
    </div>
  </AdminDefault1>
</template>

<script>
import AdminDefault1 from "@/layouts/admin_default_1.vue";
import AuthAccountInfor from "@/components/admin/AuthAccountInfor.vue";
import AuthAccountUnconfirm from "@/components/admin/AuthAccountUnconfirm.vue";

export default {
  name: "AdminAuthAccount",
  components: { AdminDefault1, AuthAccountInfor, AuthAccountUnconfirm },
  data() {
    return {
      currentComponent: "AuthAccountUnconfirm",
    };
  },
};
</script>

<style></style>
