<style></style>

<template>
  <AdminDefault1>
    <div class="boxMainBlogs">
      <ChartBlog />
    </div>
  </AdminDefault1>
</template>

<script>
import AdminDefault1 from "@/layouts/admin_default_1.vue";
import ChartBlog from "@/components/admin/ChartBlog.vue";

export default {
  name: "AdminBlogs",
  components: { AdminDefault1, ChartBlog },
};
</script>
