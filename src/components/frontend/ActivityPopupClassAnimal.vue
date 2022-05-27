<style></style>

<template>
  <Transition
    enter-active-class="animate__animated animate__zoomIn animate__faster"
    leave-active-class="animate__animated animate__zoomOut animate__faster"
  >
    <div
      id="ActivityPopupClassAnimal"
      v-if="statusShowPopup"
      @click.self="onClosePopup"
    >
      <div class="boxPopupInner"></div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "ActivityPopupClassAnimal",
  props: ["statusShowPopup"],
  methods: {
    onClosePopup() {
      this.$emit("closePopup");
    },
  },
};
</script>
