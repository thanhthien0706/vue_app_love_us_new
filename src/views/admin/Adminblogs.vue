<style></style>

<template>
  <AdminDefault1>
    <div class="boxMainBlogs" v-if="isCheckPage">
      <p
        class="header__title text-center"
        v-if="$route.params.idAuthor == 'all'"
      >
        Tất cả bài viết
      </p>

      <p class="header__title text-center" v-else>Bài viết của tôi</p>

      <ChartBlog
        :listDataTopBlogs="listDataTopBlogs"
        :dataStatistic="dataStatistic"
        :dataChart="dataChart"
      />

      <component
        :is="currentComponent"
        :dataBlogs="dataBlogs"
        @onScrollTop="onScrollTop"
        @onCreateNewBlog="onCreateNewBlog"
      />

      <!-- <div class="boxHandlerBlog">
        <div class="handleBarBlog">
          <div class="boxSearch bgBoxAdmin">
            <fa :icon="['fas', 'search']" class="ic_search" />
            <input
              type="text"
              class="inputSearch"
              :placeholder="$t('search')"
            />
          </div>

          <ul class="listHandle">
            <li class="itemHandle">
              <div class="boxBtnHandle bgBoxAdmin">
                <fa :icon="['fas', 'plus']" class="ic_handle" />
                <p class="textHandle">Thêm blog mới</p>
              </div>
            </li>

            <li class="itemHandle">
              <div class="boxBtnHandle bgBoxAdmin">
                <fa :icon="['fas', 'filter']" class="ic_handle" />
                <p class="textHandle">Lọc</p>
              </div>
            </li>

            <li class="itemHandle">
              <div class="boxBtnHandle bgBoxAdmin">
                <fa :icon="['fas', 'trash']" class="ic_handle" />
                <p class="textHandle">Thùng rác</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="boxShowAllBlog">
          <ul class="listBlog">
            <li class="itemblog" v-for="item in dataBlogs" :key="item.id">
              <ItemBlog :dataItemBlog="item" />
            </li>
          </ul>
        </div>
      </div> -->
    </div>

    <div class="boxShowError text-center" v-else>
      <p>Trang không tồn tại</p>
    </div>
  </AdminDefault1>
</template>

<script>
import AdminDefault1 from "@/layouts/admin_default_1.vue";
import ChartBlog from "@/components/admin/ChartBlog.vue";
import AllBlog from "@/components/admin/AllBlog.vue";
import MyBlogs from "@/components/admin/MyBlogs.vue";

import { mapState } from "vuex";

export default {
  name: "AdminBlogs",
  components: { AdminDefault1, ChartBlog, AllBlog, MyBlogs },
  data() {
    return {
      currentComponent: "AllBlog",
      isCheckPage: true,

      listDataTopBlogs: [
        {
          id: 0,
          link: "home",
          avt: "img_avatar.png",
          nameBlog: "Name blog",
          numberReading: "300",
        },
        {
          id: 3,
          link: "home",
          avt: "img_avatar.png",
          nameBlog: "Name blog",
          numberReading: "300",
        },
        {
          id: 2,
          link: "home",
          avt: "img_avatar.png",
          nameBlog: "Name blog",
          numberReading: "300",
        },
      ],
      dataStatistic: {
        totalBlog: 20,
        totalComments: 30,
        totalReader: 40,
      },
      dataChart: {
        labels: [
          "Tháng 1",
          "Tháng 2",
          "Tháng 3",
          "Tháng 4",
          "Tháng 5",
          "Tháng 6",
          "Tháng 7",
          "Tháng 8",
          "Tháng 9",
          "Tháng 10",
          "Tháng 11",
          "Tháng 12",
        ],
        datasets: [
          {
            label: "Bài viết",
            data: [30, 40, 60, 70, 100, 30, 40, 60, 70, 5, 60, 70],
            backgroundColor: ["#42c636"],
          },
        ],
      },
      dataBlogs: [
        // {
        //   id: 0,
        //   avatar: "campaign_1.png",
        //   titleBlog: "Name blog animal hihi haha",
        //   content:
        //     "<p>They are threatened by habitat loss following large–scale deforestation and commercial poaching for the wildlife trade They are threatened by habitat loss following large–scalve deforestation and commercial poaching for the wildlife trade and commercial poaching for the wildlife trade and commercial poaching for the wildlife trade.....</p>",
        //   avtAuthor: "img_avatar.png",
        //   nameAuthor: "Thành Thiện pro",
        // },
        // {
        //   id: 1,
        //   avatar: "campaign_1.png",
        //   titleBlog: "Name blog animal hihi haha",
        //   content:
        //     "<p>They are threatened by habitat loss following large–scale deforestation and commercial poaching for the wildlife trade They are threatened by habitat loss following large–scalve deforestation and commercial poaching for the wildlife trade and commercial poaching for the wildlife trade and commercial poaching for the wildlife trade.....</p>",
        //   avtAuthor: "img_avatar.png",
        //   nameAuthor: "Thành Thiện pro",
        // },
        // {
        //   id: 2,
        //   avatar: "campaign_1.png",
        //   titleBlog: "Name blog animal hihi haha",
        //   content:
        //     "<p>They are threatened by habitat loss following large–scale deforestation and commercial poaching for the wildlife trade They are threatened by habitat loss following large–scalve deforestation and commercial poaching for the wildlife trade and commercial poaching for the wildlife trade and commercial poaching for the wildlife trade.....</p>",
        //   avtAuthor: "img_avatar.png",
        //   nameAuthor: "Thành Thiện pro",
        // },
        // {
        //   id: 3,
        //   avatar: "campaign_1.png",
        //   titleBlog: "Name blog animal hihi haha",
        //   content:
        //     "<p>They are threatened by habitat loss following large–scale deforestation and commercial poaching for the wildlife trade They are threatened by habitat loss following large–scalve deforestation and commercial poaching for the wildlife trade and commercial poaching for the wildlife trade and commercial poaching for the wildlife trade.....</p>",
        //   avtAuthor: "img_avatar.png",
        //   nameAuthor: "Thành Thiện pro",
        // },
      ],
    };
  },
  mounted() {},
  methods: {
    onScrollTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    onCreateNewBlog() {},
  },
  computed: {
    ...mapState(["dataUserCurrent"]),
  },
  watch: {
    "$route.params.idAuthor": {
      handler: function (idAuthor) {
        if (idAuthor == "all") {
          this.currentComponent = AllBlog;
        } else if (idAuthor == this.dataUserCurrent.slug) {
          this.currentComponent = MyBlogs;
        } else {
          this.isCheckPage = false;
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
