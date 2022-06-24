<style></style>

<template>
  <div class="ContentChat" v-if="this.dataGroupChat">
    <div class="headerNameGroup">
      <div class="boxInforGroup">
        <img
          :src="convert_image(this.dataGroupChat.avatar)"
          alt=""
          class="imageAvatarGroup"
        />
        <div class="boxRightInner">
          <p class="nameGroup">{{ this.dataGroupChat.name }}</p>
          <p class="textMessage">
            {{ this.dataGroupChat.list_member.length }} thành viên
          </p>
        </div>
      </div>

      <div class="boxHandleGroup">
        <ul class="listHandle">
          <li class="itemHandle">
            <fa :icon="['fas', 'phone']" class="ic_handle" />
          </li>
          <li class="itemHandle">
            <fa :icon="['fas', 'video']" class="ic_handle" />
          </li>
          <li class="itemHandle">
            <fa :icon="['fas', 'circle-exclamation']" class="ic_handle" />
          </li>
        </ul>
      </div>
    </div>
    <div class="contentGroupChat">
      <ul class="listMessenger" v-if="listMessenger !== []">
        <li
          class="itemMessenger"
          v-for="item in listMessenger"
          :key="item._id"
          :class="{ me: item.id_sender == $store.state.dataUserCurrent._id }"
        >
          <div class="boxInnerMessenger">
            <img
              :src="convert_image(item.dataSender[0].avatar)"
              alt=""
              class="imageAvatar"
            />
            <div class="boxContent">
              <p class="nameSender">{{ item.dataSender[0].name }}</p>
              <p class="content">{{ item.content }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="footerGroupChat">
      <div class="boxHandleSend">
        <ul class="listHandleSend">
          <li class="itemHandleSend">
            <fa :icon="['fas', 'images']" class="ic_handle_send" />
          </li>
        </ul>
      </div>

      <div class="boxSendChat">
        <input
          type="text"
          placeholder="Aa"
          class="inputContentChat"
          v-model="content"
          @keypress.enter="onSendMessenger"
        />
        <fa
          :icon="['fas', 'paper-plane']"
          class="ic_send_chat"
          @click="onSendMessenger"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ConvertImage from "@/utils/convertImage";
import SubString from "@/utils/sub_string";
import { chatService } from "@/services/chatService";

export default {
  name: "ContentChat",
  props: ["dataGroupChat"],
  data() {
    return {
      listMessenger: [],
      content: "",
    };
  },
  created() {},
  mounted() {
    this.listenMessengerFromServer();
  },
  methods: {
    async initDataMessenger() {
      const dataListMessenger = await chatService.getMessenger(
        this.dataGroupChat.id,
        "",
        0
      );

      if (dataListMessenger.success) {
        this.listMessenger = dataListMessenger.data;
      }
    },

    onSendMessenger() {
      console.log(this.content);
      this.$socket.emit("groupchat:sendMess", {
        content: this.content,
        to: this.dataGroupChat.id,
        from: this.$store.state.dataUserCurrent._id,
      });
    },

    listenMessengerFromServer() {
      this.$socket.on("serverGroupChat:sendMess", (data) => {
        console.log(data);
      });
    },

    convert_image: ConvertImage,
    sub_string: SubString,
  },

  watch: {
    dataGroupChat(newVal) {
      if (newVal) {
        this.initDataMessenger();
      }
    },
  },
};
</script>
