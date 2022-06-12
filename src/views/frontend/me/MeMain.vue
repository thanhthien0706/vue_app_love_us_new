<style></style>

<template>
  <DefaultFrontend_1>
    <div class="MeMainBox">
      <div class="headerMe">
        <div class="boxAvatar">
          <img
            src="https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?cs=srgb&dl=pexels-pixabay-414102.jpg&fm=jpg"
            alt=""
            class="imgAvatar"
          />
          <fa :icon="['fas', 'camera']" class="ic_camera" />
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
                  <fa :icon="['fas', 'wave-pulse']" class="ic_statistic" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </DefaultFrontend_1>
</template>

<script>
import DefaultFrontend_1 from "@/layouts/DefaultFrontend_1.vue";

export default {
  name: "MeMain",
  components: { DefaultFrontend_1 },
};
</script>
