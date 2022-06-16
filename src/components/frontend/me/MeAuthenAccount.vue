<style></style>

<template>
  <div class="MeAuthenAccount" v-if="statusSend == 'unsent'">
    <Transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <keep-alive>
        <component
          :is="currentComponent"
          @imageSelfie="onImageSelfie($event)"
          @imagePreCard="onImagePreCard($event)"
          @imageAfterCard="onImageAfterCard($event)"
        />
      </keep-alive>
    </Transition>

    <ul class="listNavigation">
      <li
        class="itemNavi back"
        :class="{ hiden: currentComponent == 'MeAuthenFace' }"
        @click="onBackAuthen"
      >
        Quay lại
      </li>
      <li
        class="itemNavi continue"
        :class="{
          disabled: dataAuthenAccount.imageSelfie == null,
        }"
        @click="onNextAuthen"
      >
        {{ nameButton }}
      </li>
    </ul>
  </div>

  <div class="boxSuccesSendInfor" v-if="statusSend == 'sent_confirmation'">
    thành công
  </div>

  <NotifiView ref="componentNotifi" />
</template>

<script>
import MeAuthenFace from "@/components/frontend/me/MeAuthenFace.vue";
import MeAuthenIndentityCard from "@/components/frontend/me/MeAuthenIndentityCard.vue";
import { authAccountService } from "@/services/authAccountService";

export default {
  name: "MeAuthenAccount",
  components: { MeAuthenFace, MeAuthenIndentityCard },
  data() {
    return {
      currentComponent: "MeAuthenFace",
      nameButton: "Tiếp theo",
      statusSend: "unsent",
      // unsent
      // verified
      // sent confirmation
      dataAuthenAccount: {
        imageSelfie: null,
        list_card: [],
      },
    };
  },
  methods: {
    onImageSelfie(event) {
      this.dataAuthenAccount.imageSelfie = event;
    },
    onImagePreCard(event) {
      this.dataAuthenAccount.list_card[0] = event;
    },
    onImageAfterCard(event) {
      this.dataAuthenAccount.list_card[1] = event;
    },
    async onNextAuthen() {
      if (
        this.dataAuthenAccount.imageSelfie &&
        this.currentComponent == "MeAuthenFace"
      ) {
        this.currentComponent = "MeAuthenIndentityCard";
      } else if (
        this.currentComponent == "MeAuthenIndentityCard" &&
        this.dataAuthenAccount.list_card.length == 2
      ) {
        const formData = new FormData();

        formData.append(
          "listImageAuthenAccount[]",
          this.dataAuthenAccount.imageSelfie
        );
        formData.append(
          "listImageAuthenAccount[]",
          this.dataAuthenAccount.list_card[0]
        );
        formData.append(
          "listImageAuthenAccount[]",
          this.dataAuthenAccount.list_card[1]
        );

        const dataRef = await authAccountService.sendInforAuthen(
          this.$store.state.dataUserCurrent._id,
          formData
        );

        if (dataRef) {
          this.$refs.componentNotifi.onCreateNotification({
            status: "success",
            message: "Gửi thông tin xác thực thành công",
            theme: "",
          });
          this.statusSend = "sent_confirmation";
        } else if (dataRef.code == "authen_exist") {
          this.$refs.componentNotifi.onCreateNotification({
            status: "warning",
            message: "Bạn đã gửi thông tin xác thực",
            theme: "",
          });
        } else {
          this.$refs.componentNotifi.onCreateNotification({
            status: "destructive",
            message: "Gửi thông tin xác thực không thành công",
            theme: "",
          });
        }
      }
    },
    onBackAuthen() {
      if (this.currentComponent != "MeAuthenFace") {
        this.currentComponent = "MeAuthenFace";
      }
    },
  },

  watch: {
    currentComponent(newVal) {
      if (newVal == "MeAuthenIndentityCard") {
        this.nameButton = "Gửi thông tin";
      } else if (newVal == "MeAuthenFace") {
        this.nameButton = "Tiếp theo";
      }
    },
  },
};
</script>
