<style></style>

<template>
  <div class="BlogDraft">
    <ul class="listBlog">
      <li class="itemblog" v-for="item in dataBlogs" :key="item.id">
        <ItemBlog :dataItemBlog="item" :isShow="listShow" />
      </li>
    </ul>
  </div>
</template>

<script>
import ItemBlog from "@/components/admin/ItemBlog.vue";
import { blogService } from "@/services/blogService";
import { mapState } from "vuex";

export default {
  name: "BlogDraft",
  components: { ItemBlog },

  data() {
    return {
      listShow: ["edit", "delete"],

      dataBlogs: [],
    };
  },

  mounted() {
    this.initDataMain();
  },
  methods: {
    async initDataMain() {
      const dataBlog = await blogService.getBlogMeById(
        this.dataUserCurrent._id
      );

      if (dataBlog.success) {
        console.log(dataBlog.data);
        // this.dataBlogs = dataBlog.data;
      }
    },
  },
  computed: {
    ...mapState(["dataUserCurrent"]),
  },
};
</script>
