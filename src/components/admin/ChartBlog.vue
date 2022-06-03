<style></style>

<template>
  <div class="chart_blog">
    <div class="row">
      <div class="col-md-3">
        <div class="boxTopMostRead bgBoxAdmin">
          <p class="header__title">{{ $t("top_most_read") }}</p>
          <ul class="listTopBlog">
            <li v-if="listDataTopBlogs.length <= 0" class="text-center">
              Chưa có bài viết nào
            </li>
            <li
              class="itemTopBlog"
              v-for="item in listDataTopBlogs"
              :key="item.id"
              v-else
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
      <div class="col-md-9">
        <div class="boxStatisticsNumber">
          <div class="row">
            <div class="col-md-3">
              <div class="colItemInne bgBoxAdmin">
                <div class="boxInforLeft">
                  <p class="countNumber">{{ dataStatistic.totalBlog }}</p>
                  <p class="nameStatistics">{{ $t("blog") }}</p>
                </div>
                <div class="boxInforRight">
                  <fa
                    :icon="['fas', 'file-circle-plus']"
                    class="ic_statistic orange"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="colItemInne bgBoxAdmin">
                <div class="boxInforLeft">
                  <p class="countNumber">{{ dataStatistic.totalComments }}</p>
                  <p class="nameStatistics">{{ $t("comments") }}</p>
                </div>
                <div class="boxInforRight">
                  <fa :icon="['fas', 'comment']" class="ic_statistic violet" />
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="colItemInne bgBoxAdmin">
                <div class="boxInforLeft">
                  <p class="countNumber">{{ dataStatistic.totalReader }}</p>
                  <p class="nameStatistics">{{ $t("reader") }}</p>
                </div>
                <div class="boxInforRight">
                  <fa :icon="['fas', 'user']" class="ic_statistic blue" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="boxChartBlogs bgBoxAdmin">
          <BarChart :chartData="dataChart" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { BarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default defineComponent({
  name: "ChartBlog",
  components: { BarChart },
  props: ["listDataTopBlogs", "dataStatistic", "dataChart"],
  data() {
    return {};
  },
  mounted() {},
});
</script>
