<style></style>

<template>
  <AdminDefault1>
    <div id="AdminCampaignView">
      <section class="sc_statistical">
        <div class="row">
          <div class="col-md-3">
            <div class="boxStatisInner bgBoxAdmin">
              <div class="boxInforLeft">
                <p class="countNumber">200</p>
                <p class="nameStatistics">Chiến dịch</p>
              </div>
              <div class="boxInforRight">
                <fa :icon="['fas', 'check-double']" class="ic_statistic blue" />
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="boxStatisInner bgBoxAdmin">
              <div class="boxInforLeft">
                <p class="countNumber">200</p>
                <p class="nameStatistics">Bị cấm</p>
              </div>
              <div class="boxInforRight">
                <fa :icon="['fas', 'ban']" class="ic_statistic orange" />
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="boxStatisInner bgBoxAdmin">
              <div class="boxInforLeft">
                <p class="countNumber">200</p>
                <p class="nameStatistics">Quyên góp</p>
              </div>
              <div class="boxInforRight">
                <fa
                  :icon="['fas', 'hand-holding-dollar']"
                  class="ic_statistic violet"
                />
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="boxStatisInner bgBoxAdmin">
              <div class="boxInforLeft">
                <p class="countNumber">200</p>
                <p class="nameStatistics">Quyên góp</p>
              </div>
              <div class="boxInforRight">
                <fa
                  :icon="['fas', 'hand-holding-dollar']"
                  class="ic_statistic violet"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="boxChartBlogs bgBoxAdmin mt_40">
          <BarChart :chartData="dataChart" />
        </div>
      </section>

      <section class="sc_tabManagerCampaign">
        <ul class="listTab">
          <li class="itemTab" :class="{ active: currentTab == 'wait_censor' }">
            Kiểm duyệt
          </li>
          <li class="itemTab" :class="{ active: currentTab == 'happenning' }">
            Chiến dịch
          </li>
        </ul>

        <Transition>
          <CampaignTableDataVue />
        </Transition>
      </section>
    </div>
  </AdminDefault1>
</template>

<script>
import CampaignTableDataVue from "@/components/admin/CampaignTableData.vue";
import AdminDefault1 from "@/layouts/admin_default_1.vue";
import { BarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
  name: "AdminCampaign",
  components: { AdminDefault1, BarChart, CampaignTableDataVue },
  data() {
    return {
      currentTab: "wait_censor",
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
            label: "Chiến dịch",
            data: [0, 0, 0, 0, 0, 10, 0, 50, 100, 0, 0, 0],
            backgroundColor: ["#42c636"],
          },
        ],
      },
    };
  },
};
</script>
