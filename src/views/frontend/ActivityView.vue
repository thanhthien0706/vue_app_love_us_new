<style></style>

<template>
  <DefaultFrontend_1>
    <div id="ActivesPage" class="animate__animated animate__fadeIn">
      <!-- BOX HEADER START -->
      <div id="box__header__ac">
        <div class="row align-items-center">
          <div class="col-md-4">
            <img
              src="@\assets\images\page\vet_actives.png"
              alt=""
              class="img__bird__header"
            />
          </div>
          <div class="col-md-8">
            <div class="box__header__ac__inner__right">
              <h2 class="title">
                <span>Môi Trường Hôm Nay</span> – Cuộc Sống Ngày Mai
              </h2>
              <p class="slogan">
                Một hành động nhỏ của bạn có thể giết chết thiên nhiên , nhưng
                cũng có thể cứu lấy thiên nhiên.
              </p>
              <p class="speech">Hãy hành động , đừng lưỡng lự</p>
              <div class="btn__header__box">
                <fa :icon="['fas', 'arrow-right']" class="icon__arrow__right" />
                <p>Tôi có thể làm gì ?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- BOX HEADER END -->

      <!-- TREE START -->
      <div id="box__tree__ac">
        <!-- <BoxTree /> -->
      </div>
      <!-- TREE END -->

      <!-- GAME START -->
      <section class="sc__gameActivity">
        <activity-game />
      </section>
      <!-- GAME END -->
    </div>
  </DefaultFrontend_1>
</template>

<script>
import DefaultFrontend_1 from "@/layouts/DefaultFrontend_1.vue";
import ActivityGame from "@/components/frontend/ActivityGame.vue";
// import BoxTree from "@/components/frontend/activity/box_tree.vue";

export default {
  name: "ActivesPage",
  components: { DefaultFrontend_1, ActivityGame },
};
</script>
