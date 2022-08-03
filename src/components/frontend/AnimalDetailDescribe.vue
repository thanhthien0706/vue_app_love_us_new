<template>
  <div id="AnimalDetailSlideMain">
    <p class="mainNameAnimal">{{ dataAnimal.name }}</p>
    <p class="subContent">
      {{ dataAnimal.subContent }}
    </p>
    <button class="btnRead" @click="emitShowReadMoreAnimal">Đọc tiếp</button>
  </div>
</template>

<script>
export default {
  name: "AnimalDetailSlideMain",
  data() {
    return {
      dataAnimal: {
        name: "Sao la",
        subContent:
          ' Sao la (danh pháp khoa học: Pseudoryx nghetinhensis) hay còn được gọi là "Kỳ lân Châu Á" là một trong những loài thú hiếm nhất trên thế giới sinh sống trong vùng núi rừng Trường Sơn tại Việt Nam và Lào',
      },
    };
  },

  methods: {
    emitShowReadMoreAnimal() {
      this.$emit("emitShowReadMoreAnimal", this.dataAnimal);
    },
  },
};
</script>

<style></style>
