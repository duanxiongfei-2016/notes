/*
 * @Author: 段雄飞
 * @Date: 2019-11-25 09:38:00
 * @Last Modified by: 段雄飞
 * @Last Modified time: 2019-11-25 09:38:24
 */
const filters = {
  /**
   * 货币格式化  1000000  转换成  1,000,000.00元这样子
   */
  formatMoney(Vue) {
    return Vue.filter('formatMoney', s => {
      if (/[^0-9\.]/.test(s)) return s;
      s = s.toString().replace(/^(\d*)$/, '$1.');
      s = (s + '00').replace(/(\d*\.\d\d)\d*/, '$1');
      s = s.replace('.', ',');
      var re = /(\d)(\d{3},)/;
      while (re.test(s)) s = s.replace(re, '$1,$2');
      s = s.replace(/,(\d\d)$/, '.$1');
      return s.replace(/^\./, '0.') + ' 元';
    });
  },
  /**
   * 手机号码脱敏显示 中间4位数子变为*
   */
  formatTel(Vue) {
    return Vue.filter('formatTel', tel => {
      if (tel) return `${tel.substr(0, 3)}****${tel.substr(-4, 4)}`;
    });
  }
};

export default filters;
