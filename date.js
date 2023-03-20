/*
 * @Author: YuhaoWU
 * @Date: 2023-01-30 16:42:19
 * @LastEditors: YuhaoWU
 * @LastEditTime: 2023-03-20 19:38:43
 * @Description:
 */
//jshint esversion:6

// module.exports, exports可以省略！
// 到处匿名函数，赋值传给module.exports的属性
exports.getDate = function () {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return today.toLocaleDateString("en-US", options);
};

exports.getDay = function () {
  const today = new Date();

  const options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);
};
