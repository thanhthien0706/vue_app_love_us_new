<template>
  <div class="screenInteract">
    <div
      class="screen__inner"
      :style="{
        width: `${
          ((((920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4 +
            16) *
          Math.sqrt(cardsContext.length)
        }px`,
      }"
    >
      <CardFlip
        v-for="(card, index) in cardsContext"
        :key="index"
        :ref="`card-${index}`"
        :imagBackFaceUrl="`${card}.png`"
        :card="{ index: index, value: card }"
        @onFlip="checkRule($event)"
        :cardsContext="cardsContext"
      />
    </div>
  </div>
</template>

<script>
import CardFlip from "./FlipcardCard.vue";
export default {
  name: "FlipcardInteractScreen",
  props: {
    cardsContext: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },

  components: {
    CardFlip,
  },

  data() {
    return {
      rules: [],
    };
  },

  methods: {
    checkRule(card) {
      if (this.rules.length === 2) return false;

      this.rules.push(card);
      if (
        this.rules.length === 2 &&
        this.rules[0].value === this.rules[1].value
      ) {
        console.log("right...");
        // add class "disabled" to components card
        this.$refs[`card-${this.rules[0].index}`][0].onEnabledDisabledModels();
        this.$refs[`card-${this.rules[1].index}`][0].onEnabledDisabledModels();
        // reset rules to []
        this.rules = [];

        const disabledElements = document.querySelectorAll(
          ".screenInteract .card.disabled"
        );

        if (
          disabledElements &&
          disabledElements.length === this.cardsContext.length - 2
        ) {
          setTimeout(() => {
            this.$emit("onFinish");
          }, 920);
        }
      } else if (
        this.rules.length === 2 &&
        this.rules[0].value !== this.rules[1].value
      ) {
        setTimeout(() => {
          this.$refs[`card-${this.rules[0].index}`][0].onFlipBackCard();
          this.$refs[`card-${this.rules[1].index}`][0].onFlipBackCard();
          // reset rules to []
          this.rules = [];
        }, 700);
      } else return false;
    },
  },
};
</script>

<style scoped lang="css">
.screenInteract {
  /* color: white; */
  min-width: 100%;
  min-height: 100%;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 2;
}

.screen__inner {
  /* width: 424px; */
  display: flex;
  flex-wrap: wrap;
  margin: 2rem auto;
}
</style>
