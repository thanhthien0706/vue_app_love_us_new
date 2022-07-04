import moment from "moment";

const formatDate = {
  basicFormat(date, type) {
    moment.locale("vi");
    return moment(date).format(type);
  },
};

export default formatDate;
