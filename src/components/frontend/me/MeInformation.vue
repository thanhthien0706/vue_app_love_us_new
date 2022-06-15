<style></style>

<template>
  <div class="boxMainInfor">
    <div class="innerInfor">
      <p class="titleInfor">Thông tin cá nhân</p>

      <form action="javascript:void(0)" class="formInforMe">
        <div class="formGroupMain">
          <div class="form__input__group">
            <fa :icon="['fas', 'user']" class="icon_input" />
            <input
              type="text"
              placeholder="Tên người dùng"
              class="input__infor"
              autocomplete="off"
            />
          </div>
        </div>

        <div class="formGroupMain">
          <div class="form__input__group">
            <fa :icon="['fas', 'envelope']" class="icon_input" />
            <input
              type="email"
              placeholder="Email"
              class="input__infor"
              autocomplete="off"
              disabled
            />
          </div>
        </div>

        <div class="formGroupMain">
          <div class="row">
            <div class="col-md-7">
              <div class="form__input__group">
                <fa :icon="['fas', 'cake-candles']" class="icon_input" />
                <input
                  type="date"
                  placeholder="Ngày sinh"
                  class="input__infor"
                  autocomplete="off"
                />
              </div>
            </div>
            <div class="col-md-5">
              <div class="form__input__group">
                <fa :icon="['fas', 'hourglass']" class="icon_input" />
                <input
                  type="text"
                  placeholder="Tuổi"
                  class="input__infor"
                  autocomplete="off"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="formGroupMain">
          <div class="form__input__group">
            <fa :icon="['fas', 'phone']" class="icon_input" />
            <input
              type="text"
              placeholder="Nhập số điện thoại"
              class="input__infor"
              autocomplete="off"
            />
          </div>
        </div>

        <div class="formGroupMain">
          <div class="form__input__group">
            <fa :icon="['fas', 'location']" class="icon_input" />
            <input
              type="text"
              placeholder="Nhập nhập địa chỉ"
              class="input__infor"
              autocomplete="off"
            />
          </div>
        </div>

        <div class="form__btn__group">
          <div class="box__button" @click="onSubmitRegister" v-if="!isPending">
            <div class="inner__slide">
              <fa :icon="['fas', 'angles-right']" class="icon__slide__btn" />
            </div>
            <a href="javascript:void(0)" class="btn__submit__register"
              >Sửa thông tin!</a
            >
          </div>

          <div class="box_loading" v-else>
            <img
              src="@/assets/images/icon/loading_icon.gif"
              alt=""
              class="icon_loading"
            />
            <p class="text_loading">Đang xử lý</p>
          </div>
        </div>
      </form>

      <p class="titleInfor">Bảo mật</p>

      <form action="javascript:void(0)" class="formInforMe">
        <div class="formGroupMain">
          <div class="form__input__group">
            <fa :icon="['fas', 'key']" class="icon_input" />
            <input
              type="password"
              placeholder="mật khẩu cũ"
              class="input__infor"
              autocomplete="off"
            />
          </div>
        </div>

        <div class="formGroupMain">
          <div class="form__input__group">
            <fa :icon="['fas', 'key']" class="icon_input" />
            <input
              type="password"
              placeholder="mật khẩu mới"
              class="input__infor"
              autocomplete="off"
            />
          </div>
        </div>

        <div class="formGroupMain">
          <div class="form__input__group">
            <fa :icon="['fas', 'key']" class="icon_input" />
            <input
              type="password"
              placeholder="Nhập lại mật khẩu mới"
              class="input__infor"
              autocomplete="off"
            />
          </div>
        </div>

        <div class="form__btn__group">
          <div class="box__button" @click="onSubmitRegister" v-if="!isPending">
            <div class="inner__slide">
              <fa :icon="['fas', 'angles-right']" class="icon__slide__btn" />
            </div>
            <a href="javascript:void(0)" class="btn__submit__register"
              >Đổi mật khẩu!</a
            >
          </div>

          <div class="box_loading" v-else>
            <img
              src="@/assets/images/icon/loading_icon.gif"
              alt=""
              class="icon_loading"
            />
            <p class="text_loading">Đang xử lý</p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeInformation",
  data() {
    return {
      isPending: false,
    };
  },
};
</script>
