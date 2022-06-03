<style></style>

<template>
  <div class="ItemBlog bgBoxAdmin">
    <div class="row align-items-center">
      <div class="col-md-3">
        <div class="boxImage">
          <img
            :src="`${require('@/assets/images/page/' + dataItemBlog.avatar)}`"
            alt=""
            class="imgBlog"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="boxInforBlog">
          <p class="textTitleBlog">{{ dataItemBlog.titleBlog }}</p>
          <p class="textCotentBlog" v-html="dataItemBlog.content"></p>
          <div class="boxAuthor">
            <img
              :src="`${require('@/assets/images/' + dataItemBlog.avtAuthor)}`"
              alt=""
              class="img__group"
            />
            <p class="name__group">{{ dataItemBlog.nameAuthor }}</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="boxInnerButtnHandle">
          <ul class="listBtnHandle">
            <li class="itemBtn green">
              <fa :icon="['fas', 'pen']" class="ic_handle" />
            </li>

            <li class="itemBtn blue">
              <fa :icon="['fas', 'eye']" class="ic_handle" />
            </li>

            <li class="itemBtn violet">
              <fa :icon="['fas', 'comment']" class="ic_handle" />
            </li>

            <li class="itemBtn orange">
              <fa :icon="['fas', 'trash']" class="ic_handle" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemBlog",
  props: ["dataItemBlog"],
  mounted() {},
};
</script>
