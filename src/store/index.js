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
    dataBlogSlide: [
      {
        id: 0,
        img: "https://photo-cms-tpo.zadn.vn/w890/Uploaded/2022/cq-fkxdsoz/2021_11_18/anh-bia-3705.jpg",
        category: "Tình nguyện",
        description:
          "Tham gia chuyển đi lần này nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn nnnnnnnnnnnnnn nnnnnnnnnnnnnnnnnnnnn nnnnnnnnnnnnn",
        name: "1 nhóm các bạn sinh viên tham gia di chuyển động vật quý hiểm",
        time: "10:00pm",
        date: "Jan 7th, 2022",
        thu: "Thursday",
        status: "New",
        location: "Son Tra - Da Nang",
        organizer: "Pet Coffee",
      },

      {
        id: 1,
        img: "https://upanh123.com/wp-content/uploads/2020/09/hinh-anh-con-voi-khong-lo_111944888.jpg",
        category: "Dọn rác",
        description:
          "We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well.",
        name: "Pet Coffee Shop Day",
        time: "10:00pm",
        date: "Jan 7th, 2022",
        thu: "Thursday",
        status: "New",
        location: "Thành phố Hồ Chí Minh",
        organizer: "Pet Coffee",
      },

      {
        id: 2,
        img: "https://tanbaocorp.vn/public/manipulate/800x500/article-images/1584515515-bao-ton-dong-vat-hoang-da-tai-vipearl.jpg",
        category: "Bảo vệ động vật",
        description:
          "Chương trình bảo vệ động vật tại Vinpearl quy tụ gồm nhiều tổ chức từ thiện và các bạn tình nguyện viên đông đảo tham dự",
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
        img: "https://upanh123.com/wp-content/uploads/2020/09/hinh-anh-con-voi-khong-lo_111944888.jpg",
        category: "Tố giác",
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
        img: "https://upanh123.com/wp-content/uploads/2020/09/hinh-anh-con-voi-khong-lo_111944888.jpg",
        category: "Events",
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
        img: "https://upanh123.com/wp-content/uploads/2020/09/hinh-anh-con-voi-khong-lo_111944888.jpg",
        category: "Thông tin ",
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
        img: "https://static.ybox.vn/2015/07/b8384bec407fd290bd1a47c63e77b346.jpg",
        category: "Tình nguyện",
        description:
          "Bạn yêu thiên nhiên? Bạn muốn góp phần bảo vệ động vật hoang dã Việt Nam? Bạn muốn trở nên tự tin, năng động hơn? Bạn muốn giao lưu với mạng lưới tình nguyện viên năng động nhiệt tình đến từ nhiều trường đại học khác nhau?Còn chờ gì nữa, nhanh tay đăng ký tham gia để có cơ hội trở thành Tình nguyện viên của Tổ chức Bảo vệ Động vật hoang.",
        name: "Chương trình tình nguyện SOS animals 2022",
        time: "10:00pm",
        date: "Jan 7th, 2022",
        thu: "Thursday",
        status: "New",
        location: "Son Tra - Da Nang",
        organizer: "Pet Coffee",
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
