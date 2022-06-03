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
          <div class="boxBtnHandle btnPost bgBoxAdmin">
            <fa :icon="['fas', 'paper-plane']" class="ic_handle" />
            <p class="textHandle">Đăng bài</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="formCreateBog">
      <form action="javascript:void(0)" @submit.prevent class="formMain">
        <div class="boxform bgBoxAdmin">
          <input type="text" placeholder="Tiêu đề" class="inputForm" />
        </div>
        <div class="boxform">
          <input
            type="text"
            placeholder="Gắn thẻ bài viết của bạn. Nhiều nhất 5 thẻ. Ít nhất 1 thẻ"
            class="inputForm"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateBlog",
};
</script>
