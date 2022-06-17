<style></style>

<template>
  <div class="box__auction__content backgroundMainItem">
    <div class="header__orga">
      <p class="title">Các chiến dịch</p>
      <input
        type="text"
        placeholder="Tìm chiến dịch"
        class="input__orga"
        v-model="query"
      />
    </div>
    <div class="campaign__table">
      <table>
        <tr>
          <th>Tên</th>
          <th>Logo</th>
          <th>Số lượng thành viên</th>
          <th>Địa điểm</th>
          <th>Mô tả hoạt động</th>
          <th>Trạng thái</th>
        </tr>
        <tr>
          <td>Clearup Sơn Trà</td>
          <td><img src="" alt="" /></td>
          <td>100</td>
          <td>Sơn Trà</td>
          <td>Dọn dẹp</td>
          <td class="btn btn-success">Đủ số lượng</td>
        </tr>
        <tr>
          <td>Dọn rác biển Mỹ An</td>
          <td><img src="" alt="" /></td>
          <td>100</td>
          <td>Sơn Trà</td>
          <td>Dọn dẹp</td>
          <td class="btn btn-warning">Chưa đủ SL</td>
        </tr>
        <tr>
          <td>Clearup Sơn Trà</td>
          <td><img src="" alt="" /></td>
          <td>100</td>
          <td>Sơn Trà</td>
          <td>Dọn dẹp</td>
          <td class="btn btn-success">Đủ số lượng</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import SubString from "@/utils/sub_string";
import { mapState } from "vuex";

export default {
  name: "EventCampaign",
  components: {},
  setup() {
    return {};
  },
  data() {
    return {
      descriptionBlog:
        " They are threatened by habitat loss following large–scale deforestation and commercial poaching for the wildlife trade They are threatened by habitat loss following large–scale deforestation and commercial poaching for the wildlife trade      ",
    };
  },
  methods: {
    sub_string: SubString,
  },
  computed: {
    ...mapState(["dataBlogs"]),
  },
};
</script>
