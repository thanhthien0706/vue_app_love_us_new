<template>
  <AdminDefault1>
    <div id="AdminAuthAccount">
      <AuthAccountInfor :isDisableBtn="isDisableBtn" />

      <hr class="line" />

      <div class="tabMainBox">
        <ul class="listTab">
          <li
            class="itemTab"
            :class="{ active: isShowTab == false }"
            @click="isShowTab = false"
          >
            Chưa xác thực
          </li>
          <li
            class="itemTab"
            :class="{ active: isShowTab == true }"
            @click="isShowTab = true"
          >
            Đã xác thực
          </li>
        </ul>

        <keep-alive>
          <AuthAccountTable
            :isPending="isPending"
            :listDataAccounts="listDataAccounts"
            :isSetShow="isShowTab"
            @onEmitSearchAccount="lsEmitSearchAccount($event)"
          />
        </keep-alive>
      </div>
    </div>
  </AdminDefault1>
</template>

<script>
import AdminDefault1 from "@/layouts/admin_default_1.vue";
import AuthAccountInfor from "@/components/admin/AuthAccountInfor.vue";
import AuthAccountTable from "@/components/admin/AuthAccountTable.vue";
import { authAccountService, isPending } from "@/services/authAccountService";

export default {
  name: "AdminAuthAccount",
  setup() {
    return { isPending };
  },
  components: { AdminDefault1, AuthAccountInfor, AuthAccountTable },
  data() {
    return {
      arr: null,
      listDataAccounts: null,
      isShowTab: false,
      isDisableBtn: true,
      isSetShow: null,
    };
  },
  created() {
    this.initGetDataAccounts(false);
  },
  methods: {
    async initGetDataAccounts(status) {
      const datas = await authAccountService.getAllAuthAccount(status);

      if (datas.success) {
        if (datas.data.length) {
          this.listDataAccounts = datas.data;
        } else {
          this.listDataAccounts = null;
        }
      }
    },

    async lsEmitSearchAccount(data) {
      let query;
      // if (data.search) {
      query = `status=${data.status}&name=${data.search}&phone=${data.search}&email=${data.search}`;
      // } else {
      //   query = `status=${data.status}`;
      // }  else  32
      const datas = await authAccountService.searhcAccountConditions(query);

      console.log(query);
      if (datas.success) {
        if (datas.data.length) {
          this.listDataAccounts = datas.data;
        } else {
          this.listDataAccounts = null;
        }
      }
    },
  },
  watch: {
    isShowTab(newVal) {
      if (newVal == false) {
        this.initGetDataAccounts(false);
      } else if (newVal == true) {
        this.initGetDataAccounts(true);
      }
    },
  },
};
</script>

<style></style>
