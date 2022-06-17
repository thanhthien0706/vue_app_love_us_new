<template>
  <div class="box__counter__auction">
    <div class="item__counter">
      <div class="box__img backgroundMainItem">
        <img src="@/assets/images/page/Veterinarian.png" alt="" />
      </div>
      <div class="box__content">
        <p class="title">{{ $t("totalauction") }}</p>
        <p class="number">10</p>
      </div>
    </div>

    <div class="item__counter">
      <div class="box__img backgroundMainItem">
        <img src="@/assets/images/page/animal-care.png" alt="" />
      </div>
      <div class="box__content">
        <p class="title">{{ $t("numberauctionsvalid") }}</p>
        <p class="number">32,900</p>
      </div>
    </div>

    <div class="item__counter">
      <div class="box__img backgroundMainItem">
        <img src="@/assets/images/page/alarm.png" alt="" />
      </div>
      <div class="box__content">
        <p class="title">{{ $t("totalamountauctioned") }}</p>
        <p class="number">418$</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventCount",
};
</script>

<style></style>
