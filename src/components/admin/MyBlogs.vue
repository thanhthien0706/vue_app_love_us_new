<style></style>

<template>
  <div class="MyBlogs">
    <div class="boxTab">
      <ul class="listTap">
        <li
          class="itemTab"
          v-for="item in listTab"
          :key="item.id"
          :class="{ active: item.isComponent == currentTab }"
          @click="changeComponent(item.isComponent)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>

    <KeepAlive>
      <component :is="currentTab" :dataBlogs="dataBlogs" />
    </KeepAlive>
  </div>
</template>

<script>
import AllBlog from "@/components/admin/AllBlog.vue";
import CreateBlog from "@/components/admin/CreateBlog.vue";
import BlogDraft from "@/components/admin/BlogDraft.vue";

export default {
  name: "MyBlogs",
  components: { AllBlog, CreateBlog, BlogDraft },
  data() {
    return {
      currentTab: "AllBlog",
      listTab: [
        {
          id: 0,
          isComponent: "AllBlog",
          name: "Bài viết",
        },
        {
          id: 1,
          isComponent: "BlogDraft",
          name: "Nháp",
        },
        {
          id: 2,
          isComponent: "CreateBlog",
          name: "Tạo bài viết",
        },
      ],
      dataBlogs: [
        {
          id: 0,
          avatar: "campaign_1.png",
          titleBlog: "Name blog animal hihi haha",
          content:
            "<p>They are threatened by habitat loss following large–scale deforestation and commercial poaching for the wildlife trade They are threatened by habitat loss following large–scalve deforestation and commercial poaching for the wildlife trade and commercial poaching for the wildlife trade and commercial poaching for the wildlife trade.....</p>",
          avtAuthor: "img_avatar.png",
          nameAuthor: "Thành Thiện pro",
        },

        {
          id: 1,
          avatar: "campaign_1.png",
          titleBlog: "Name blog animal hihi haha",
          content:
            "<p>They are threatened by habitat loss following large–scale deforestation and commercial poaching for the wildlife trade They are threatened by habitat loss following large–scalve deforestation and commercial poaching for the wildlife trade and commercial poaching for the wildlife trade and commercial poaching for the wildlife trade.....</p>",
          avtAuthor: "img_avatar.png",
          nameAuthor: "Thành Thiện pro",
        },
        {
          id: 2,
          avatar: "campaign_1.png",
          titleBlog: "Name blog animal hihi haha",
          content:
            "<p>They are threatened by habitat loss following large–scale deforestation and commercial poaching for the wildlife trade They are threatened by habitat loss following large–scalve deforestation and commercial poaching for the wildlife trade and commercial poaching for the wildlife trade and commercial poaching for the wildlife trade.....</p>",
          avtAuthor: "img_avatar.png",
          nameAuthor: "Thành Thiện pro",
        },
        {
          id: 3,
          avatar: "campaign_1.png",
          titleBlog: "Name blog animal hihi haha",
          content:
            "<p>They are threatened by habitat loss following large–scale deforestation and commercial poaching for the wildlife trade They are threatened by habitat loss following large–scalve deforestation and commercial poaching for the wildlife trade and commercial poaching for the wildlife trade and commercial poaching for the wildlife trade.....</p>",
          avtAuthor: "img_avatar.png",
          nameAuthor: "Thành Thiện pro",
        },
      ],
    };
  },
  methods: {
    changeComponent(component) {
      this.currentTab = component;
    },
  },
};
</script>
