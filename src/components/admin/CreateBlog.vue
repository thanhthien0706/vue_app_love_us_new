<style></style>

<template>
  <div class="CreateBlog">
    <div class="boxHandleBlog">
      <ul class="listHandle">
        <li class="itemhandle">
          <div class="boxBtnHandle bgBoxAdmin">
            <fa :icon="['fas', 'pen-ruler']" class="ic_handle" />
            <p class="textHandle">Lưu nháp</p>
          </div>
        </li>
        <li class="itemhandle">
          <div
            class="boxBtnHandle btnPost bgBoxAdmin"
            :class="{
              disabled:
                dataFormBlog.title == '' ||
                dataFormBlog.content == '' ||
                dataFormBlog.main_image == '' ||
                !dataFormBlog.list_category.length,
            }"
          >
            <fa :icon="['fas', 'paper-plane']" class="ic_handle" />
            <p class="textHandle">Đăng bài</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="formCreateBog">
      <form action="javascript:void(0)" @submit.prevent class="formMain">
        <div class="boxform bgBoxAdmin">
          <input
            type="text"
            placeholder="Tiêu đề"
            class="inputForm"
            v-model="dataFormBlog.title"
          />
        </div>
        <div class="boxform bgBoxAdmin">
          <ul
            class="listCategoryUl"
            v-if="dataFormBlog.list_category.length > 0"
          >
            <li
              class="itemCategory"
              v-for="(item, index) in dataFormBlog.list_category"
              :key="index"
            >
              <p class="textCategory">{{ item }}</p>
              <fa
                :icon="['fas', 'xmark']"
                class="ic_category"
                @click="onRemoveCategory(index)"
              />
            </li>
          </ul>

          <input
            type="text"
            placeholder="Gắn thẻ bài viết của bạn. Nhiều nhất 5 thẻ. Ít nhất 1 thẻ"
            class="inputForm"
            v-model="itemCategory"
            @keyup.enter="onAddCategory"
          />
        </div>

        <div class="boxBtnAddAvt">
          <label for="inputAvtBlogs" class="bgBoxAdmin btnAddImage">
            <p class="text">Thêm ảnh đại diện</p>
            <input
              type="file"
              name=""
              id="inputAvtBlogs"
              class="inputAvtBlog"
              accept=".jpg, .jpeg, .png"
              @change="onAddAvt"
            />
          </label>

          <img
            src="@/assets/images/img_avatar.png"
            alt=""
            class="imgAvt"
            v-if="currentAvtBlog != ''"
          />
          <p class="showEntry" v-else>Chưa có ảnh đại diện</p>
        </div>

        <div class="boxEditor bgBoxAdmin">
          <QuillEditor
            theme="snow"
            toolbar="full"
            contentType="html"
            placeholder="Viết bài của bạn ở đây..."
            v-model:content="dataFormBlog.content"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default {
  name: "CreateBlog",
  components: { QuillEditor },

  data() {
    return {
      itemCategory: "",
      currentAvtBlog: "",

      dataFormBlog: {
        title: "",
        main_image: "",
        content: "",
        list_category: [],
      },
    };
  },
  methods: {
    onAddAvt(event) {
      const file = event.target.files[0];
      this.dataFormBlog.main_image = file;
      this.currentAvtBlog = URL.createObjectURL(file);
    },

    onRemoveCategory(index) {
      this.dataFormBlog.list_category.splice(index, 1);
    },

    onAddCategory() {
      if (this.itemCategory != "") {
        this.dataFormBlog.list_category.push(this.itemCategory);
        this.itemCategory = "";
      }
    },
  },
};
</script>
