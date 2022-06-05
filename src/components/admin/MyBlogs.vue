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

    <KeepAlive include="CreateBlog">
      <Transition
        enter-active-class="animate__animated animate__fadeIn animate__fast"
        leave-active-class="animate__animated animate__fadeOut animate__fast"
      >
        <component
          :is="currentTab"
          :dataBlogs="dataBlogs"
          @onEditItemBlog="eventEditBlogs($event)"
        />
      </Transition>
    </KeepAlive>
  </div>
</template>

<script>
import CreateBlog from "@/components/admin/CreateBlog.vue";
import BlogDraft from "@/components/admin/BlogDraft.vue";
import BlogMePublic from "@/components/admin/BlogMePublic.vue";

export default {
  name: "MyBlogs",
  components: { CreateBlog, BlogDraft, BlogMePublic },
  data() {
    return {
      currentTab: "BlogMePublic",
      listTab: [
        {
          id: 0,
          isComponent: "BlogMePublic",
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
      dataEditBlogItem: {
        idBlog: "",
        status: "",
      },
    };
  },
  provide() {
    return {
      dataEditBlog: this.dataEditBlogItem,
    };
  },
  methods: {
    changeComponent(component) {
      this.currentTab = component;
    },
    eventEditBlogs(event) {
      this.dataEditBlogItem.idBlog = event;
      this.dataEditBlogItem.status = "edit";
      this.currentTab = "CreateBlog";
    },
  },
};
</script>
