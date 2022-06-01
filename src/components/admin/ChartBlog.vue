<style></style>

<template>
  <div class="chart_blog">
    <div class="row">
      <div class="col-md-3">
        <div class="boxTopMostRead bgBoxAdmin">
          <p class="header__title">{{ $t("top_most_read") }}</p>
          <ul class="listTopBlog">
            <li
              class="itemTopBlog"
              v-for="item in listDataTopBlogs"
              :key="item.id"
            >
              <div class="boxItemBlogs">
                <div class="boxNameBlogs">
                  <img
                    :src="`${require('@/assets/images/' + item.avt)}`"
                    alt=""
                    class="imgBlog"
                  />
                  <router-link :to="{ name: item.link }" class="linkBlog">
                    <p class="nameBlog">{{ item.nameBlog }}</p>
                  </router-link>
                </div>
                <p class="countBlogs">{{ item.numberReading }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-9">2</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChartBlog",
  data() {
    return {
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
    };
  },
};
</script>
