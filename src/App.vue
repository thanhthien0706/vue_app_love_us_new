<template>
  <router-view />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import handleLanguage from "@/utils/handleLanguage";

export default {
  setup() {},
  created() {
    this.initMain();
    this.initCreateGroupChat();
  },
  methods: {
    ...mapActions([
      "getDataUser",
      "getBlogMostRead",
      "getTopBlog",
      "getAllLocationsVietNam",
      "getAllBankVietNam",
      "getAllGroupChat",
    ]),
    initMain() {
      this.getDataUser();
      this.getBlogMostRead();
      this.getTopBlog();
      this.getAllLocationsVietNam();
      this.getAllBankVietNam();
      this.getAllGroupChat();
    },
    initCreateGroupChat() {
      if (this.getDataGroupChat) {
        // const newArrayGroup = this.getDataGroupChat.map((item) => {
        //   return {
        //     id: item.dataGroupChat[0]._id,
        //   };
        // });

        const newArrayGroup = [];
        this.getDataGroupChat.forEach((element) => {
          newArrayGroup.push(element.dataGroupChat[0]._id);
        });

        this.$socket.emit("groupchat:join", newArrayGroup);
      }
    },
  },
  computed: {
    ...mapGetters(["getDataGroupChat"]),
  },
  watch: {
    getDataGroupChat() {
      this.initCreateGroupChat();
    },
  },
};
</script>

<style lang="scss" src="@/assets/styles/main.scss"></style>
