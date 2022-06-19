<style></style>

<template>
  <div class="CampaignInforOrganize">
    <!-- <p class="titleText">Thông tin tổ chức</p>
    <p class="description">
      Để có thể xác minh chiến dịch và tăng độ uy tín của chiến dịch của bạn.
      Chúng tôi cần bạn nhập thông tin tổ chức hiện tại của bạn.
    </p> -->

    <form action="javascript:void(0)" @submit.prevent class="formInforInput">
      <div class="box_avater">
        <label for="inputFileAvater" v-if="dataOrganize.avatar == null">
          <fa :icon="['fas', 'user-plus']" />
          <input
            id="inputFileAvater"
            type="file"
            accept=".jpg, .jpeg, .png, .mp4"
            style="display: none"
            @change="onChageAvater"
        /></label>

        <label for="inputFileAvater" v-else>
          <img :src="currentAvtOrganize" alt="" class="img__avater" />
          <input
            id="inputFileAvater"
            type="file"
            accept=".jpg, .jpeg, .png"
            style="display: none"
            @change="onChageAvater"
        /></label>
        <p class="text">Ảnh đại diện tổ chức</p>
      </div>

      <div class="row boxLineForm">
        <div class="col-md-6">
          <div class="formGroup">
            <p class="nameInput">Tên tổ chức</p>
            <input type="text" class="inputText" v-model="dataOrganize.name" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="formGroup">
            <p class="nameInput">Liên kết tới tổ chức</p>
            <input type="text" class="inputText" v-model="dataOrganize.link" />
          </div>
        </div>
      </div>

      <div class="row boxLineForm">
        <div class="col-md-6">
          <div class="formGroup">
            <p class="nameInput">SĐT liên hệ</p>
            <input type="text" class="inputText" v-model="dataOrganize.phone" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="formGroup">
            <p class="nameInput">Địa chỉ</p>
            <input
              type="text"
              class="inputText"
              v-model="dataOrganize.address"
            />
          </div>
        </div>
      </div>

      <div class="boxLineForm">
        <div class="formGroup">
          <p class="nameInput">Mô tả</p>
          <textarea
            class="textareaInput"
            v-model="dataOrganize.description"
          ></textarea>
        </div>
      </div>
    </form>
  </div>

  <div class="boxButtonHandle">
    <button class="btnContinue" @click="onEmitInforOrganize">Tiếp theo</button>
  </div>
</template>

<script>
export default {
  name: "CampaignInforOrganize",
  data() {
    return {
      currentAvtOrganize: null,
      dataOrganize: {
        avatar: null,
        name: "",
        link: "",
        phone: "",
        address: "",
        description: "",
      },
    };
  },
  methods: {
    onChageAvater(event) {
      const file = event.target.files[0];
      this.dataOrganize.avatar = file;
      this.currentAvtOrganize = URL.createObjectURL(file);
    },
    onEmitInforOrganize() {
      this.$emit("dataOrganize", this.dataOrganize);
    },
  },
  computed: {},
};
</script>
