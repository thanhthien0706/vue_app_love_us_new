<template>
  <div id="AnimalDetailMainInfo">
    <div class="boxMainContentInner">
      <div class="boxLeftMain">
        <ul class="listHandleSlide">
          <li class="btnHandleItem btnPrev">
            <fa :icon="['fas', 'angle-up']" class="ic_handle ic_prev" />
          </li>
          <li class="itemDot">
            <fa :icon="['fas', 'circle']" class="ic_dot" />
          </li>
          <li class="itemDot active">
            <fa :icon="['fas', 'circle']" class="ic_dot" />
          </li>
          <li class="itemDot">
            <fa :icon="['fas', 'circle']" class="ic_dot" />
          </li>
          <li class="btnHandleItem btnNext">
            <fa :icon="['fas', 'angle-down']" class="ic_handle ic_next" />
          </li>
        </ul>
      </div>
      <div class="boxRightMain">
        <Transition
          enter-active-class="animate__animated animate__slideInDown animate__fast"
          leave-active-class="animate__animated animate__slideOutDown animate__fast"
        >
          <component :is="currentComponent"></component>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script>
import AnimalDetailSlideMainVue from "@/components/frontend/AnimalDetailSlideMain.vue";

export default {
  name: "AnimalDetailMainInfo",
  components: { AnimalDetailSlideMainVue },
  data() {
    return {
      currentComponent: "AnimalDetailSlideMainVue",
    };
  },
};
</script>

<style></style>
