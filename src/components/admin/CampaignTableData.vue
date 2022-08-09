<template>
  <div id="CampaignTableDataView">
    <div class="boxHeaderMain">
      <div class="boxDropdown">
        <!-- <select class="slDropdown">
          <option>choa thien</option>
          <option>Hello ban toi</option>
        </select> -->
      </div>

      <div class="boxFilter">
        <input
          type="text"
          class="searchFilterAuth"
          placeholder="Tìm theo tên, email, điện thoại"
          v-model="searchText"
          @input="onEmitSearchAccount"
        />

        <div class="boxSortFilter">
          <button class="btnSort" v-if="true">
            <fa :icon="['fas', 'arrow-up-short-wide']" class="ic_sort" />
            <p>Mới nhất</p>
          </button>

          <button class="btnSort" v-else>
            <fa :icon="['fas', 'arrow-down-short-wide']" class="ic_sort" />
            <p>Cũ nhất</p>
          </button>
        </div>
      </div>
    </div>

    <div class="boxTableCampaign">
      <div class="boxLoadingData" v-if="isPending">
        <div class="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>

      <div class="" v-else>
        <p class="text-center" v-if="listDataCampaign">
          Không có chiến dịch nào
        </p>

        <table class="table table_custom" v-else>
          <thead class="thead_custom">
            <tr class="tr_custom">
              <th scope="col">#</th>
              <th scope="col">Tên</th>
              <th scope="col">Ảnh</th>
              <th scope="col">Tổ chức</th>
              <th scope="col">Địa điểm</th>
              <th scope="col">Hình thức</th>
              <th scope="col">Thời gian</th>
              <th scope="col">Xử lý</th>
            </tr>
          </thead>

          <tbody class="tbody_custom">
            <tr class="tr_custom">
              <th scope="row">1</th>
              <td>Dân vận</td>
              <td>
                <img
                  src="https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg"
                  alt=""
                  class="imageAvatarAccount"
                />
              </td>
              <td>Nhóm HIH</td>
              <td>Đà nẵng</td>
              <td>Online</td>
              <td>21/12/2022</td>
              <td>
                <div class="boxHandleBtn">
                  <button class="btnHandle green">
                    <fa :icon="['fas', 'eye']" class="ic_handle" />
                  </button>

                  <button class="btnHandle blue">
                    <fa :icon="['fas', 'check']" class="ic_handle" />
                  </button>

                  <button class="btnHandle orange">
                    <fa :icon="['fas', 'trash']" class="ic_handle" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CampaignTableData",
  data() {
    return {
      isPending: false,
      listDataCampaign: "",
      searchText: "",
    };
  },
  methods: {
    onEmitSearchAccount() {},
  },
};
</script>

<style></style>
