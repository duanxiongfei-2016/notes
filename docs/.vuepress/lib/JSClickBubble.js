/*
 * @Descripttion: 一个用JS写的鼠标左击特效
 * @version: 
 * @Author: 段雄飞
 * @Date: 2019-11-26 17:13:15
 * @LastEditors: 段雄飞
 * @LastEditTime: 2019-11-27 09:26:56
 */

function getRandomColor(min, max) {
  var r = min + (Math.round(Math.random() * 1000) % (max - min));
  var g = min + (Math.round(Math.random() * 1000) % (max - min));
  var b = min + (Math.round(Math.random() * 1000) % (max - min));
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function getRandom(start = 0, end = 60, fixed = 0) {
    let differ = end - start 
    let random = Math.random()
    return (start + differ * random).toFixed(fixed)
}

function initBubble () {
  var click_cnt = 0;
  var $html = document.getElementsByTagName('html')[0];
  var $body = document.getElementsByTagName('body')[0];
  $html.onclick = function(e) {
    new Array(3).fill('').forEach(_ => {
      var $elem = document.createElement('b');
      $elem.style.color = getRandomColor(150, 255);
      $elem.style.zIndex = 9999;
      $elem.style.position = 'absolute';
      $elem.style['user-select'] = 'none';
      var x = e.pageX;
      var y = e.pageY;
      var yy = getRandom()
      $elem.style.left = x - getRandom(0, 80) + 'px';
      $elem.style.top = y - yy + 'px';
      clearInterval(anim);
      click_cnt = Math.floor(Math.random() * 100 + 1);
      switch (click_cnt) {
        case 10:
          $elem.innerText = '有你 再苦也值';
          break;
        case 20:
          $elem.innerText = '一吻已是万年';
          break;
        case 30:
          $elem.innerText = '许你一生承诺';
          break;
        case 40:
          $elem.innerText = '为你 放弃所有';
          break;
        case 50:
          $elem.innerText = '❤守护你❤';
          break;
        case 60:
          $elem.innerText = '❤你在 情在 人在❤';
          break;
        case 70:
          $elem.innerText = '❤爱你天长地久❤';
          break;
        case 80:
          $elem.innerText = '❤心相印 爱相随❤';
          break;
        case 90:
          $elem.innerText = '❤未来一起走❤';
          break;
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
          $elem.innerText = '❤暖暖❤';
          break;
        default:
          $elem.innerText = '❤';
          break;
      }
      $elem.style.fontSize = Math.random() * 10 + 14 + 'px';
      var increase = 0;
      var anim;
      setTimeout(function() {
        anim = setInterval(function() {
          if (++increase == 150) {
            clearInterval(anim);
            $body.removeChild($elem);
          }
          $elem.style.top = y - yy - increase + 'px';
          $elem.style.opacity = (150 - increase) / 120;
        }, 5);
      }, 70);
      $body.appendChild($elem);
    });
  };
};

initBubble()
