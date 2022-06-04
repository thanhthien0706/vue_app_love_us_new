<style></style>

<template>
  <div class="ItemBlog bgBoxAdmin">
    <div class="row align-items-center">
      <div class="col-md-3">
        <div class="boxImage">
          <img
            :src="`${require('@/assets/images/page/' + dataItemBlog.avatar)}`"
            alt=""
            class="imgBlog"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="boxInforBlog">
          <p class="textTitleBlog">{{ dataItemBlog.titleBlog }}</p>
          <p
            class="textCotentBlog"
            v-html="sub_string(dataItemBlog.content, 400)"
          ></p>
          <div class="boxAuthor">
            <img
              :src="`${require('@/assets/images/' + dataItemBlog.avtAuthor)}`"
              alt=""
              class="img__group"
            />
            <p class="name__group">{{ dataItemBlog.nameAuthor }}</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="boxInnerButtnHandle">
          <ul class="listBtnHandle">
            <li
              :class="`itemBtn green ${item.color}`"
              v-for="item in listBtnHandleCurrent"
              :key="item.id"
            >
              <fa :icon="['fas', item.icon]" class="ic_handle" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubString from "@/utils/sub_string";

export default {
  name: "ItemBlog",
  props: ["dataItemBlog", "isShow"],
  data() {
    return {
      listBtnHandleCurrent: [],
      listBtnHandle: [
        {
          id: 0,
          color: "green",
          icon: "pen",
          showName: "edit",
        },
        {
          id: 1,
          color: "blue",
          icon: "eye",
          showName: "view",
        },
        {
          id: 2,
          color: "violet",
          icon: "comment",
          showName: "comment",
        },
        {
          id: 3,
          color: "orange",
          icon: "trash",
          showName: "delete",
        },
      ],
    };
  },
  mounted() {
    this.initDataMain();
  },
  methods: {
    initDataMain() {
      const typeIsShow = typeof this.isShow;

      if (typeIsShow == "object") {
        this.isShow.forEach((itemShow) => {
          this.listBtnHandle.forEach((item) => {
            if (item.showName == itemShow) {
              this.listBtnHandleCurrent.push(item);
            }
          });
        });
      } else if (typeIsShow == "string" && this.isShow == "full") {
        this.listBtnHandleCurrent = this.listBtnHandle;
      }
    },
    sub_string: SubString,
  },
};
</script>
