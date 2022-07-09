<template>
  <div class="ItemAnotherCampaign">
    <div class="boxImage">
      <img
        src="https://sites.google.com/site/hinhanhdep24h/_/rsrc/1436687439788/home/hinh%20anh%20thien%20nhien%20dep%202015%20%281%29.jpeg"
        alt=""
        class="imgCampaign"
      />
    </div>

    <div class="boxContentMain">
      <p class="titleCampaign">{{ sub_string(text, 64) }}</p>
      <div class="boxOrganizeShow">
        <div class="boxLeft">
          <img
            src="https://sites.google.com/site/hinhanhdep24h/_/rsrc/1436687439788/home/hinh%20anh%20thien%20nhien%20dep%202015%20%281%29.jpeg"
            alt=""
            class="avatar"
          />
          <p class="name">Hand in hand</p>
        </div>
        <div class="boxRight">
          <p class="time">Còn 33 ngày</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubString from "@/utils/sub_string";

export default {
  name: "ItemAnotherCampaign",
  data() {
    return {
      text: "Gây quỹ tặng 40 nụ cười thay đổi cuộc đời cho các em bé hở môi, hàm ếch",
    };
  },
  methods: {
    sub_string: SubString,
  },
};
</script>

<style></style>
