const convertMoney = (money) => {
  let parts = money.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parts.join(",") + "đ";
};

export default convertMoney;
