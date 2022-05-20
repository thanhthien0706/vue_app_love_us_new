<style></style>
<template>
  <div class="boxMenuMain fixed-element">
    <div class="item__header item__header--logo">
      <router-link :to="{ name: 'home' }" class="logo__link">
        <img src="@/assets/images/heart-logo.png" alt="" class="logo__image" />
        <p class="logo__text">
          <span class="logo__text--emphasize">Us</span>Love
        </p>
      </router-link>
    </div>

    <nav id="nav__menu" class="">
      <ul class="list__menu">
        <li
          class="item__menu"
          v-for="item in dataMenu"
          :key="item.id"
          :class="{ active: item.link === this.$route.name }"
        >
          <router-link :to="{ name: item.link }" class="item_link">
            <img
              :src="`${require('@/assets/images/icon/menu/' + item.image)}`"
              alt=""
              class="item__menu__icon"
            />
            <p class="item__menu__text">{{ $t(item.name) }}</p>
          </router-link>
        </li>

        <li class="item__hr">
          <hr />
        </li>
        <li
          class="item__menu"
          v-for="item in dataListPersonal"
          :key="item.id"
          :class="{ active: item.link === this.$route.name }"
        >
          <router-link :to="{ name: item.link }" class="item_link">
            <img
              :src="`${require('@/assets/images/icon/menu/' + item.image)}`"
              alt=""
              class="item__menu__icon"
            />
            <p class="item__menu__text">{{ $t(item.name) }}</p>
          </router-link>
        </li>
      </ul>

      <div class="logout__box">
        <div
          class="logout__box__inner"
          v-if="check_user_login"
          @click="onLogout"
        >
          <img
            src="@/assets/images/icon/menu/log-out.png"
            alt=""
            class="icon__logout"
          />
          <p class="text__logout">{{ $t("signout") }}</p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import checkUserLogin from "@/utils/checkUserLogin";
import { authService } from "@/services/authService";
import { mapActions } from "vuex";

export default {
  name: "MenuDefault",

  data() {
    return {
      dataMenu: [
        {
          id: 0,
          link: "home",
          image: "home.png",
          name: "home",
        },
        {
          id: 1,
          link: "convey",
          image: "paw.png",
          name: "actives",
        },
        {
          id: 2,
          link: "convey",
          image: "event.png",
          name: "events",
        },
        {
          id: 3,
          link: "convey",
          image: "report.png",
          name: "reports",
        },
        {
          id: 4,
          link: "convey",
          image: "blog.png",
          name: "blogs",
        },
      ],

      dataListPersonal: [
        {
          id: 0,
          link: "convey",
          image: "user.png",
          name: "person",
        },
        {
          id: 1,
          link: "convey",
          image: "group.png",
          name: "group",
        },
      ],
    };
  },

  methods: {
    ...mapActions(["getDataUser"]),
    onLogout() {
      authService.logoutAccount();
      authService.initAuthHeader();
      this.getDataUser();
    },
  },

  computed: {
    getCheckRouterActive() {
      return this.$route.name;
    },
    check_user_login: checkUserLogin,
  },
};
</script>
