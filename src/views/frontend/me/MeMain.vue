<style></style>

<template>
  <DefaultFrontend_1>
    <div class="MeMainBox">
      <div class="headerMe">
        <div class="boxAvatar">
          <img :src="convert_image(avaterUser)" alt="" class="imgAvatar" />
          <label for="inputChangeAvatar">
            <fa :icon="['fas', 'camera']" class="ic_camera" />
            <input
              type="file"
              class="d-none"
              accept=".jpg, .jpeg, .png"
              id="inputChangeAvatar"
              @change="onChangeAvatar"
            />
          </label>
        </div>
        <div class="boxStatistical">
          <ul class="listStatistical">
            <li class="itemStatistical">
              <div class="colItemInne backgroundMainItem">
                <div class="boxInforLeft">
                  <p class="countNumber">20</p>
                  <p class="nameStatistics">Hoạt động</p>
                </div>
                <div class="boxInforRight">
                  <fa
                    :icon="['fas', 'child-reaching']"
                    class="ic_statistic orange"
                  />
                </div>
              </div>
            </li>

            <li class="itemStatistical">
              <div class="colItemInne backgroundMainItem">
                <div class="boxInforLeft">
                  <p class="countNumber">20</p>
                  <p class="nameStatistics">Quyên góp</p>
                </div>
                <div class="boxInforRight">
                  <fa
                    :icon="['fas', 'hand-holding-dollar']"
                    class="ic_statistic violet"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="boxTabMe">
        <ul class="listTab">
          <li class="itemTab" v-for="item in listTabMe" :key="item.id">
            <div
              class="boxInnerTab"
              :class="{ active: item.component == currentComponent }"
              @click="currentComponent = item.component"
            >
              {{ item.name }}
            </div>
          </li>
        </ul>

        <keep-alive>
          <component :is="currentComponent" />
        </keep-alive>
      </div>
    </div>
  </DefaultFrontend_1>
</template>

<script>
import DefaultFrontend_1 from "@/layouts/DefaultFrontend_1.vue";
import { mapState } from "vuex";
import ConvertImage from "@/utils/convertImage";
import MeInformation from "@/components/frontend/me/MeInformation.vue";

export default {
  name: "MeMain",
  components: { DefaultFrontend_1, MeInformation },
  data() {
    return {
      avaterUser: null,
      currentComponent: "MeInformation",
      listTabMe: [
        {
          id: 0,
          name: "Thông tin",
          component: "MeInformation",
        },

        {
          id: 1,
          name: "Xác minh",
          component: "test",
        },

        {
          id: 2,
          name: "Hoạt động",
          component: "event",
        },
      ],
    };
  },
  mounted() {
    this.intiDataMain();
  },
  methods: {
    intiDataMain() {
      this.avaterUser = this.dataUserCurrent.avatar;
    },
    onChangeAvatar(event) {
      const file = event.target.files[0];
      console.log(file);
    },
    convert_image: ConvertImage,
  },
  computed: {
    ...mapState(["dataUserCurrent"]),
  },
};
</script>
