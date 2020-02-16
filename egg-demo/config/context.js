// eslint-disable-next-line strict
module.exports = {
    get isIOS() { //get表示通过这个isIOS得到什么记得添加
      const iosReg = /iphone|ipad|ipod/i; //正则
      return iosReg.test(this.get('user-agent'));
         //User Agent显示使用的浏览器类型及版本、操作系统及版本、浏览器内核、等信息的标识。
    },
  };