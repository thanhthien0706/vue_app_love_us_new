<style></style>

<template>
  <div class="CampaignInforNew">
    <div class="row">
      <div class="col-md-6">
        <div class="boxLeft">
          <!-- <p class="titleText">Thông tin chiến dịch</p>
          <p class="description">
            Để mọi người biết thêm về chiến dịch của bạn, nên bạn phải nhập đầy
            đủ thông tin.
          </p> -->

          <form
            action="javascript:void(0)"
            @submit.prevent
            class="formInforInput"
          >
            <div class="boxLineForm">
              <div class="formGroup">
                <p class="nameInput">Tên chiến dịch</p>
                <input
                  type="text"
                  class="inputText"
                  v-model="dataCampaign.name"
                />
              </div>
            </div>

            <div class="row boxLineForm">
              <div class="col-md-6">
                <div class="formGroup">
                  <p class="nameInput">Ngày bắt đầu</p>
                  <input
                    type="date"
                    class="inputText"
                    v-model="dataCampaign.start_time"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="formGroup">
                  <p class="nameInput">Ngày kết thúc</p>
                  <input
                    type="date"
                    class="inputText"
                    v-model="dataCampaign.end_time"
                  />
                </div>
              </div>
            </div>

            <div class="row boxLineForm">
              <div class="col-md-4">
                <div class="formGroup">
                  <p class="nameInput">Tỉnh/Thành phố</p>
                  <select
                    name=""
                    class="selectLocation"
                    v-model="dataCampaign.province"
                  >
                    <option
                      v-for="option in listProvinces"
                      :value="option.code"
                      :key="option.code"
                    >
                      {{ option.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-4">
                <div class="formGroup">
                  <p class="nameInput">Quận huyện</p>
                  <select
                    name=""
                    class="selectLocation"
                    v-model="dataCampaign.district"
                  >
                    <option
                      v-for="option in listDistricts"
                      :value="option.id"
                      :key="option.id"
                    >
                      {{ option.name }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-md-4">
                <div class="formGroup">
                  <p class="nameInput">Xã/Phường</p>
                  <select
                    name=""
                    class="selectLocation"
                    v-model="dataCampaign.ward"
                  >
                    <option
                      v-for="option in listWards"
                      :value="option.id"
                      :key="option.id"
                    >
                      {{ option.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div class="boxLineForm">
              <div class="formGroup">
                <p class="nameInput">Địa chỉ cụ thể</p>
                <input
                  type="text"
                  class="inputText"
                  v-model="dataCampaign.location_detail"
                />
              </div>
            </div>

            <div class="boxLineForm">
              <div class="formGroup">
                <p class="nameInput">Mô tả chiến dịch</p>
                <textarea
                  class="textareaInput"
                  v-model="dataCampaign.description"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="col-md-6">
        <div class="boxLineForm">
          <div class="formGroup">
            <div class="boxCheckMaxMember">
              <p class="nameInput">Giới hạn thành viên</p>
              <div class="boxToggle">
                <input type="checkbox" class="checkbox" v-model="limitMenber" />
                <div class="knobs"></div>
                <div class="layer"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="boxLineForm" v-show="limitMenber">
          <div class="formGroup">
            <input
              type="number"
              class="inputText"
              v-model="dataCampaign.limitMember"
            />
          </div>
        </div>

        <div class="boxLineForm">
          <div class="formGroup">
            <div class="boxCheckMaxMember">
              <p class="nameInput">Nhận quyên góp</p>
              <div class="boxToggle">
                <input
                  type="checkbox"
                  class="checkbox"
                  v-model="statusDonate"
                />
                <div class="knobs"></div>
                <div class="layer"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="row boxLineForm" v-show="statusDonate">
          <div class="col-md-6">
            <div class="formGroup">
              <p class="nameInput">Số tiền</p>
              <input
                type="number"
                class="inputText"
                v-model="dataDonate.maxMoney"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="formGroup">
              <p class="nameInput">Số ngày quyên góp</p>
              <input
                ref="inputDateDonate"
                type="number"
                class="inputText"
                v-model="dataDonate.dateDonate"
                @input="checkDateDonate(dataDonate.dateDonate)"
              />
            </div>
          </div>
        </div>

        <div class="boxShowDataDonate" v-show="statusDonate">
          <div class="boxLineForm">
            <div class="formGroup">
              <p class="nameInput">Số tài khoản</p>
              <input
                type="text"
                class="inputText"
                v-model="dataCampaign.accountNumberBank"
              />
            </div>
          </div>

          <div class="boxLineForm">
            <div class="formGroup">
              <p class="nameInput">Chủ tài khoản</p>
              <input
                type="text"
                class="inputText"
                v-model="dataCampaign.nameAccountBank"
              />
            </div>
          </div>

          <div class="boxLineForm">
            <div class="formGroup">
              <p class="nameInput">Ngân hàng</p>
              <select
                name=""
                class="selectLocation"
                v-model="dataDonate.bankCode"
              >
                <option
                  v-for="option in listBanks"
                  :value="option.bankCode"
                  :key="option.bankCode"
                >
                  {{ option.shortName }} - {{ option.vn_name }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="boxButtonHandle">
    <button class="btnPre" @click="onPreClickPage">Quay lại</button>
    <button class="btnContinue">Tiếp theo</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import DistanceBetweenDate from "@/utils/distanceBetweenDate";

export default {
  name: "CampaignInforNew",
  data() {
    return {
      listBanks: [],
      listProvinces: [],
      listDistricts: [],
      listWards: [],
      listCity: [],
      limitMenber: false,
      statusDonate: false,
      dataCampaign: {
        avatar: null,
        name: "",
        start_time: "",
        end_time: "",
        province: "",
        district: "",
        ward: "",
        location_detail: "",
        description: "",
        limitMember: 0,
      },
      dataDonate: {
        maxMoney: 0,
        dateDonate: 0,
        accountNumberBank: "",
        bankCode: "",
        nameAccountBank: "",
      },
    };
  },
  created() {
    this.initLocationVietNam();
    this.initBankVietNam();
  },
  mounted() {},
  methods: {
    initDataMain() {},
    initLocationVietNam() {
      if (this.dataLocationVietNam) {
        const newArray = this.dataLocationVietNam.map((item) => {
          return {
            code: item.code,
            name: item.name,
          };
        });

        this.listProvinces = newArray;
      }
    },
    initBankVietNam() {
      if (this.dataBankVietNam) {
        const newArray = this.dataBankVietNam.map((item) => {
          return {
            en_name: item.en_name,
            vn_name: item.vn_name,
            cardLength: item.cardLength,
            bankCode: item.bankCode,
            shortName: item.shortName,
          };
        });

        this.listBanks = newArray;
      }
    },
    onPreClickPage() {
      this.$emit("onPreClickPageInforOrganize");
    },
    checkDateDonate(text) {
      if (
        this.dataCampaign.start_time == "" ||
        this.dataCampaign.end_time == ""
      ) {
        this.$refs.inputDateDonate.style.outlineColor = "#f44336";
      } else {
        const date = this.distance_between_date(
          this.dataCampaign.start_time,
          this.dataCampaign.end_time
        );

        if (Number(text) > date) {
          this.$refs.inputDateDonate.style.outlineColor = "#f44336";
        } else {
          this.$refs.inputDateDonate.style.outlineColor = "#42c636";
        }
      }
    },
    filterDistricts(province) {
      const newListDistricts = this.dataLocationVietNam.filter((item) => {
        return item.code === province;
      });
      this.listDistricts = newListDistricts[0].districts;
    },

    filterWards(district) {
      const newListWards = this.listDistricts.filter((item) => {
        return item.id === district;
      });
      this.listWards = newListWards[0].wards;
    },
    distance_between_date: DistanceBetweenDate,
  },
  computed: {
    ...mapState(["dataLocationVietNam", "dataBankVietNam"]),
  },
  watch: {
    "$store.state.dataLocationVietNam"() {
      this.initLocationVietNam();
    },
    "$store.state.dataBankVietNam"() {
      this.initBankVietNam();
    },
    "dataCampaign.province"(newval) {
      this.filterDistricts(newval);
    },
    "dataCampaign.district"(newval) {
      this.filterWards(newval);
    },
    // "dataDonate.dateDonate"() {
    //   this.checkDateDonate();
    // },
  },
};
</script>
