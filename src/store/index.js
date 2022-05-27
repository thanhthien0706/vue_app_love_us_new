import { createStore } from "vuex";
import { authService } from "@/services/authService";

export default createStore({
  state: {
    statusShowPopup: false,
    dataCurrentCampaign: null,
    dataUserCurrent: null,
    dataListAnimal: [
      {
        id: 0,
        listImage: [
          "https://nld.mediacdn.vn/2013/11-chot-ee76b.jpg",
          "https://thesaigontimes.vn/Uploads/Articles/50059/e86f1_seu-o-tram-chim-tam-nong.jpg",
          "https://ktmt.vnmediacdn.com/images/2021/01/09/9-1610186880-seu-dau-do.jpg",
          "https://thesaigontimes.vn/Uploads/Articles/50059/e86f1_seu-o-tram-chim-tam-nong.jpg",
        ],
        name: "Sếu đầu đỏ",
        main_img_not_bg: "seu_dau_do.jpg",
        description:
          "Sếu đầu đỏ, hay còn gọi là sếu cổ trụi, danh pháp ba phần: Grus antigone sharpii[2], là một phân loài của loài sếu sarus. Đây là phân loài chim quý hiếm tại miền nam Việt Nam, nằm trong Sách đỏ Việt Nam và Sách đỏ IUCN thế giới. Sếu đầu đỏ phương Đông trưởng thành cao khoảng 150–180 cm; sải cánh từ 220–250 cm và có trọng lượng trung bình 8–10 kg, là loài lớn nhất trong họ sếu.",
        species: "G. a. sharpii",
        habitat:
          "Đầm lầy, các vùng nước nông, các vùng đất ngập nước chua phèn có nhiều cỏ năn.",
        quantity: "Khoảng 11 cá thể",
        classAnimal: "Lớp chim",
        distribution: "Việt Nam, Lào, Campuchia, Myanmar, Thái Lan và Vân Nam",
      },
      {
        id: 1,
        listImage: [
          "https://cdn.pixabay.com/photo/2016/05/20/21/50/pigeon-1406081_960_720.jpg",
          "https://www.thespruce.com/thmb/aRa8MwXZTmoeQ80Zy5jLXuYygZM=/1500x1000/filters:fill(auto,1)/mourning-dove-58a6daf65f9b58a3c9161352.jpg",
          "https://feederwatch.org/wp-content/uploads/2021/02/MD-7-1024x683.jpg",
          "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/60386921/1800",
        ],
        main_img_not_bg: "bo_cau_nau.jpg",
        name: "Bồ cầu nâu",
        description:
          "Bồ câu nâu (danh pháp hai phần: Columba punicea) là một loài chim trong họ Columbidae. Chiều dài của bồ câu nâu là từ 36 - 40,5 cm. Bồ câu đực khi trưởng thành có phần đầu màu xám trắng còn phần trên thì có màu nâu tía với độ bóng màu xanh lá cây mờ nhạt trên cổ, thân và lưng có màu xanh nhưng óng ánh hơn, mông sẫm và đuôi có màu xám phủ hết mông, cổ họng và phần dưới có màu xám. Còn con cái thì có phần đầu màu nâu xám và nâu.",
        species: "Columbiformes",
        habitat: "rừng thường xanh nguyên sinh hoặc thứ sinh",
        classAnimal: "Lớp chim",
        quantity: "3.750-14.999 cá thể",
        distribution:
          "Bắc Ấn Độ, Bangladesh, Myanmar, Thái Lan, Lào, Campuchia và Việt Nam",
      },
      {
        id: 2,
        listImage: [
          "https://i-vnexpress.vnecdn.net/2013/11/14/Saola-010-in-viet-nam-1992-ap-9875-1384401101_m_460x0.jpg",
          "https://vnn-imgs-f.vgcloud.vn/2021/07/09/15/google-phoi-hop-bao-ton-loai-dong-vat-hoang-da-quy-hiem-bac-nhat-viet-nam.jpg",
          "https://photo-cms-anninhthudo.zadn.vn/w600/Uploaded/2022/206/2019_10_29/4-vuon-di-san-asean-moi-tai-viet-nam_13.jpg",
          "https://vcdn-vnexpress.vnecdn.net/2017/07/11/saola-6599-1499739855.jpg",
        ],
        main_img_not_bg: "sao-la.jpg",
        name: "Sao la",
        classAnimal: "Lớp thú",
        description:
          "Sao la, được mệnh danh là 'Kỳ lân châu Á', là một trong những loài thú lớn đặc hữu có nguy cơ tuyệt chủng cao nhất trên thế giới. Cho đến nay chưa có nhà sinh vật học nào từng nhìn thấy Sao la ngoài tự nhiên, và những hình ảnh hoang dã hiếm hoi của loài này có được là nhờ vào hệ thống bẫy ảnh do các nhà bảo tồn thiết lập trong các khu rừng tại Lào và Việt Nam. Chính vì sự quý hiếm và bí ẩn đó mà ít người biết được tính cấp thiết của việc bảo vệ những cá thể Sao la cuối cùng, cũng như sự quan trọng của việc dành nguồn lực cho công tác bảo tồn trước khi loài này hoàn toàn biến mất",
        species: "P.nghetinhensis",
        habitat:
          "Nơi có suối có độ cao trên 200 – 600 m trên mực nước biển dọc dãy Trường Sơn",
        quantity: "50 cá thể",
        distribution: "rừng Trường Sơn tại Việt Nam và Lào",
      },
      {
        id: 3,
        listImage: [
          "https://vcdn-vnexpress.vnecdn.net/2021/09/06/vuon-den-ma-trang-7322-1628607-5767-5110-1630922830.jpg",
          "https://image.xahoi.com.vn/resize_480x600/news/2012/5/25/vuon2.jpg",
          "https://photo-cms-sggp.zadn.vn/Uploaded/2022/duaeymdrei/2021_08_11/untitled-1_riht.jpg",
          "https://kenh14cdn.com/Images/Uploaded/Share/2011/07/25/110725kpvuonbacma-1.jpg",
        ],
        main_img_not_bg: "vuon_den.jpg",
        name: "Vượn đen má trắng",
        classAnimal: "Lớp thú",
        description:
          "Vượn đen má trắng (danh pháp khoa học: Nomascus leucogenys) là loài vượn bản địa của Việt Nam, Lào và tỉnh Vân Nam thuộc Trung Quốc. Loài này có quan hệ họ hàng gần gũi với loài Nomascus siki. Các con cái của hai loài này hầu như không phân biệt với nhau. Bộ gen của N. leucogenys đã được lập trình tự và công bố năm 2011. Một quần thể 455 con vượn đen má trắng gồm nhiều đàn nhỏ đã được phát hiện năm 2011 tại Vườn quốc gia Pù Mát, tỉnh Nghệ An, Việt Nam, gần biên giới với Lào. Quần thể này nằm cách xa khu dân cư và chiếm 2/3 số lượng vượn đen má trắng tại Việt Nam. Tính đến năm 2011, số lượng vượn má trắng đã giảm hơn 80% trong 45 năm.",
        species: "N. leucogenys",
        habitat: "rừng rậm",
        quantity: "Khoảng 60 cá thể",
        distribution: "Việt Nam, Lào và tỉnh Vân Nam thuộc Trung Quốc",
      },
    ],
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
