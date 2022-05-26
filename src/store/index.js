import { createStore } from "vuex";
import { authService } from "@/services/authService";

export default createStore({
  state: {
    statusShowPopup: false,
    dataCurrentCampaign: null,
    dataUserCurrent: null,
    dataCharityOrganization: [
      {
        id: 0,
        link: "home",
        logo: "logo-env3.png",
        name: "Trung tâm giáo dục thiên nhiên",
        location: "Nha trang",
        description:
          "They are threatened by habitat loss following large–scale deforestation and commercial poaching for the wildlife trade",
      },

      {
        id: 1,
        link: "home",
        logo: "logo-env3.png",
        name: "Trung tâm giáo dục thiên nhiên",
        location: "Đà Nẵng",
        description:
          "They are threatened by habitat loss following large–scale deforestation and commercial poaching for the wildlife trade",
      },

      {
        id: 2,
        link: "home",
        logo: "logo-env3.png",
        name: "Trung tâm giáo dục thiên nhiên",
        location: "Huế",
        description:
          "They are threatened by habitat loss following large–scale deforestation and commercial poaching for the wildlife trade",
      },

      {
        id: 3,
        link: "home",
        logo: "logo-env3.png",
        name: "Trung tâm giáo dục thiên nhiên",
        location: "Quãng ngãi",
        description:
          "They are threatened by habitat loss following large–scale deforestation and commercial poaching for the wildlife trade",
      },
    ],
    dataMapVietName: [
      {
        id: 0,
        link: "home",
        description:
          "Miền Bắc Việt Nam là một khái niệm để chỉ vùng địa lý ở phía bắc nước Việt Nam. Tuy nhiên, tùy theo từng thời điểm lịch sử và thói quen sử dụng mà khái niệm này đôi lúc còn được dùng để chỉ các vùng lãnh thổ chính trị khác nhau một cách không chính thức. ",
        name: "Miền Bắc",
        img: "bgbac.png",
      },

      {
        id: 1,
        link: "home",
        description:
          "Miền Bắc Việt Nam là một khái niệm để chỉ vùng địa lý ở phía bắc nước Việt Nam. Tuy nhiên, tùy theo từng thời điểm lịch sử và thói quen sử dụng mà khái niệm này đôi lúc còn được dùng để chỉ các vùng lãnh thổ chính trị khác nhau một cách không chính thức. ",
        name: "Miền Trung",
        img: "bgtrung.png",
      },

      {
        id: 2,
        link: "home",
        description:
          "Miền Bắc Việt Nam là một khái niệm để chỉ vùng địa lý ở phía bắc nước Việt Nam. Tuy nhiên, tùy theo từng thời điểm lịch sử và thói quen sử dụng mà khái niệm này đôi lúc còn được dùng để chỉ các vùng lãnh thổ chính trị khác nhau một cách không chính thức. ",
        name: "Miền Nam",
        img: "bgnam.png",
      },
    ],
    dataCampaign: [
      {
        id: 0,
        img: "https://meta.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg",
        category: "Rừng",
        description:
          "We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well.",
        name: "Pet Coffee Shop Day",
        time: "10:00pm",
        date: "Jan 7th, 2022",
        thu: "Thursday",
        status: "New",
        location: "Son Tra - Da Nang",
        organizer: "Pet Coffee",
      },

      {
        id: 1,
        img: "https://meta.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg",
        category: "Rừng",
        description:
          "We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well.",
        name: "Pet Coffee Shop Day",
        time: "10:00pm",
        date: "Jan 7th, 2022",
        thu: "Thursday",
        status: "New",
        location: "Son Tra - Da Nang",
        organizer: "Pet Coffee",
      },

      {
        id: 2,
        img: "https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg",
        category: "Biển",
        description:
          "We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well.",
        name: "Pet Coffee Shop Day",
        time: "10:00pm",
        date: "Jan 7th, 2022",
        thu: "Thursday",
        status: "New",
        location: "Son Tra - Da Nang",
        organizer: "Pet Coffee",
      },

      {
        id: 3,
        img: "https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg",
        category: "Biển",
        description:
          "We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well.",
        name: "Pet Coffee Shop Day",
        time: "10:00pm",
        date: "Jan 7th, 2022",
        thu: "Thursday",
        status: "New",
        location: "Son Tra - Da Nang",
        organizer: "Pet Coffee",
      },

      {
        id: 4,
        img: "https://nhattientuu.com/wp-content/uploads/2020/08/hinh-anh-dep-1.jpg",
        category: "Sông",
        description:
          "We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well.",
        name: "Pet Coffee Shop Day",
        time: "10:00pm",
        date: "Jan 7th, 2022",
        thu: "Thursday",
        status: "New",
        location: "Son Tra - Da Nang",
        organizer: "Pet Coffee",
      },

      {
        id: 5,
        img: "https://nhattientuu.com/wp-content/uploads/2020/08/hinh-anh-dep-1.jpg",
        category: "Sông",
        description:
          "We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well.",
        name: "Pet Coffee Shop Day",
        time: "10:00pm",
        date: "Jan 7th, 2022",
        thu: "Thursday",
        status: "New",
        location: "Son Tra - Da Nang",
        organizer: "Pet Coffee",
      },

      {
        id: 6,
        img: "https://nhattientuu.com/wp-content/uploads/2020/08/hinh-anh-dep-1.jpg",
        category: "Sông",
        description:
          "We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well.",
        name: "Pet Coffee Shop Day",
        time: "10:00pm",
        date: "Jan 7th, 2022",
        thu: "Thursday",
        status: "New",
        location: "Son Tra - Da Nang",
        organizer: "Pet Coffee",
      },
    ],
    dataBlogs: [
      {
        id: 0,
        link: "home",
        name: "Finding your niche as a hihi haha hihi hahahahahah",
        description:
          "They are threatened by habitat loss following large–scale deforestation and commercial poaching for the wildlife hihi haha hnene asdfjasdfjasdjf",
        time: "Friday, 10:00pm WAT",
        status: "new",
        img: "https://upanh123.com/wp-content/uploads/2020/09/hinh-anh-con-voi-khong-lo_111944888.jpg",
      },

      {
        id: 1,
        link: "home",
        name: "Finding your niche as a hihi haha hihi hahahahahah",
        description:
          "They are threatened by habitat loss following large–scale deforestation and commercial poaching for the wildlife hihi haha hnene asdfjasdfjasdjf",
        time: "Friday, 10:00pm WAT",
        status: "new",
        img: "https://upanh123.com/wp-content/uploads/2020/09/hinh-anh-con-voi-khong-lo_111944888.jpg",
      },

      {
        id: 2,
        link: "home",
        name: "Finding your niche as a hihi haha hihi hahahahahah",
        description:
          "They are threatened by habitat loss following large–scale deforestation and commercial poaching for the wildlife hihi haha hnene asdfjasdfjasdjf",
        time: "Friday, 10:00pm WAT",
        status: "new",
        img: "https://upanh123.com/wp-content/uploads/2020/09/hinh-anh-con-voi-khong-lo_111944888.jpg",
      },

      {
        id: 3,
        link: "home",
        name: "Finding your niche as a hihi haha hihi hahahahahah",
        description:
          "They are threatened by habitat loss following large–scale deforestation and commercial poaching for the wildlife hihi haha hnene asdfjasdfjasdjf",
        time: "Friday, 10:00pm WAT",
        status: "new",
        img: "https://upanh123.com/wp-content/uploads/2020/09/hinh-anh-con-voi-khong-lo_111944888.jpg",
      },

      {
        id: 4,
        link: "home",
        name: "Finding your niche as a hihi haha hihi hahahahahah",
        description:
          "They are threatened by habitat loss following large–scale deforestation and commercial poaching for the wildlife hihi haha hnene asdfjasdfjasdjf",
        time: "Friday, 10:00pm WAT",
        status: "new",
        img: "https://upanh123.com/wp-content/uploads/2020/09/hinh-anh-con-voi-khong-lo_111944888.jpg",
      },
    ],
    dataBlog: [
      {
        id: 0,
        link: "home",
        logo: "logo-env3.png",
        name: "Phát triển nơi sinh sống cho loài khỉ",
        location: "Nha trang",
        description: "abc",
      },

      {
        id: 1,
        link: "home",
        logo: "logo-env3.png",
        name: "Bảo tồn cá heo",
        location: "Đà Nẵng",
        description: "bac",
      },

      {
        id: 2,
        link: "home",
        logo: "logo-env3.png",
        name: "Tê giác bên bờ vực tuyệt chủng",
        location: "Huế",
        description: "cab",
      },

      {
        id: 3,
        link: "home",
        logo: "logo-env3.png",
        name: "Con người và thiên nhiên",
        location: "Quãng ngãi",
        description: "da",
      },
    ],
  },
  getters: {},
  mutations: {
    setStatusShowPopup(state, status) {
      state.statusShowPopup = status;
    },
    setDataCurrentCampaign(state, data) {
      state.dataCurrentCampaign = data;
    },
    setDataUserCurrent(state, data) {
      state.dataUserCurrent = data;
    },
  },
  actions: {
    async getDataUser({ commit }) {
      const resData = await authService.getMe();
      if (resData.success) {
        commit("setDataUserCurrent", resData.data);
      } else {
        commit("setDataUserCurrent", null);
      }
    },
  },
  modules: {},
});
