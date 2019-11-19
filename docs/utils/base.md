# 工具函数

## 数据类型判断

- **getRawType：获取数据类型，返回结果为 `Number`、`String`、`Object`、`Array`等**

```js
function getRawType(value) {
    return Object.prototype.toString.call(value).slice(8, -1)
}
// getoRawType([]) ==> Array
```

- **isObject`：判断数据是不是Object类型的数据**

```js
function isObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]"
}
```

- **isArray：判断数据是不是数组类型的数据**

```js
function isArray(obj) {
    return Object.prototype.toString.call(arr) === "[object Array]"
}
```

::: tip
这里为什么要这么判断？因为使用 `typeof` 去判断复杂数据类型的时候.

```js
typeof([])  // "object"
typeof({})  // "object"
```

:::

- **isRegExp：判断数据是不是正则对象**

```js
function isRegExp(value) {
    return Object.prototype.toString.call(value) === '[object RegExp]'
}
```

- **isDate：判断数据是不是时间对象**

```js
function isDate(value) {
    return Object.prototype.toString.call(value) === '[object Date]'
}
```

## 克隆(拷贝)

- **Object.assign：对象属性复制，浅拷贝**

```js
Object.assign = Object.assign || function(){
    if(arguments.length == 0) throw new TypeError('Cannot convert undefined or null to object');

    let target = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        key
    args.forEach(function(item){
        for(key in item){
            item.hasOwnProperty(key) && ( target[key] = item[key] )
        }
    })
    return target
}
```

> 使用 `Object.assign` 可以浅克隆一个对象

```js
let newObj = Object.assign({}, target)
```

- **clone：克隆数据，深拷贝**

> 简单的深拷贝可以使用 `JSON.parse()` 和 `JSON.stringify()`

```js
let cloneData = JSON.parse(JSON.stringify(target))
```

> 这里列出了原始类型，时间、正则、错误、数组、对象的深拷贝，其他的可自行补充

```js
function clone(value, deep){
    if(isPrimitive(value)){
        return value
    }

    if (isArrayLike(value)) { //是类数组
        value = Array.prototype.slice.call(value)
        return value.map(item => deep ? clone(item, deep) : item)
       }else if(isPlainObject(value)){ //是对象
           let target = {}, key;
          for (key in value) {
            value.hasOwnProperty(key) && ( target[key] = deep ? clone(value[key], deep) : value[key] )
        }
    }

    let type = getRawType(value)

    switch(type){
        case 'Date':
        case 'RegExp': 
        case 'Error': value = new window[type](value); break;
    }
    return value
}
```

## 识别各种浏览器及平台

```js
// 运行环境是浏览器
let inBrowser = typeof window !== 'undefined';
// 运行环境是微信
let inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
let weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
// 浏览器 UA 判断
let UA = inBrowser && window.navigator.userAgent.toLowerCase();
let isIE = UA && /msie|trident/.test(UA);
let isIE9 = UA && UA.indexOf('msie 9.0') > 0;
let isEdge = UA && UA.indexOf('edge/') > 0;
let isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
let isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
let isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
```

## 获取浏览器信息

```js
function getExplorerInfo() {
    let t = navigator.userAgent.toLowerCase();
    return 0 <= t.indexOf("msie") ? { //ie < 11
        type: "IE",
        version: Number(t.match(/msie ([\d]+)/)[1])
    } : !!t.match(/trident\/.+?rv:(([\d.]+))/) ? { // ie 11
        type: "IE",
        version: 11
    } : 0 <= t.indexOf("edge") ? {
        type: "Edge",
        version: Number(t.match(/edge\/([\d]+)/)[1])
    } : 0 <= t.indexOf("firefox") ? {
        type: "Firefox",
        version: Number(t.match(/firefox\/([\d]+)/)[1])
    } : 0 <= t.indexOf("chrome") ? {
        type: "Chrome",
        version: Number(t.match(/chrome\/([\d]+)/)[1])
    } : 0 <= t.indexOf("opera") ? {
        type: "Opera",
        version: Number(t.match(/opera.([\d]+)/)[1])
    } : 0 <= t.indexOf("Safari") ? {
        type: "Safari",
        version: Number(t.match(/version\/([\d]+)/)[1])
    } : {
        type: t,
        version: -1
    }
}
// chrome下运行 {type: "Chrome", version: 77}

```

## 获取Url参数

```js
function GetUrlParam (url = document.location.toString()) {
    let arrObj = url.split("?")
    let params = Object.create(null)
    if (arrObj.length > 1){
        arrObj = arrObj[1].split("&")
        arrObj.forEach(item=>{
            item = item.split("=")
            params[item[0]] = item[1]
        })
    }
    return params
}
// ?a=1&b=2&c=3 ==> {a: "1", b: "2", c: "3"}
```

## 常用正则

```js
// 验证是否是身份证号码
function isIDCard (code) {
    const arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2] // 加权因子
    const arrValid = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2] // 校验码
    if (/^\d{17}\d|x$/i.test(code)) {
        let sum = 0
        // 对前17位数字与权值乘积求和
        for (let i = 0; i < Code.length - 1; i++) {
            sum += parseInt(code.substr(i, 1), 10) * arrExp[i]
        }
        // 计算模（固定算法）
        const idx = sum % 11
        // 检验第18为是否与校验码相等
        return arrValid[idx].toString() === code.substr(17, 1).toUpperCase()
    }
    return false
}
// 验证手机号码
const phoneREG = /^((13[0-9])|(14[5|7|9])|(15([0-3]|[5-9]))|(166)|(17[3,5,6,7,8])|(18[0-9])|(19[8,9]))\d{8}$/
// 验证密码 6-16位  必须包含数字和字母
const passwordREG = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
// 验证邮箱
const emailREG = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
// 验证姓名：中英文，不允许同时存在中英文，姓名中可接受空格，逗号，点，中文名不少于一个汉字，英文名不少于4个英文字母
const nameREG = /^([\u4e00-\u9fa5]{2,20}|[a-zA-Z\.\s]{4,20})$/
```

## 数据格式化

```js
// 货币格式化  1000000  转换成  1,000,000.00  这样子
function formatMoney (s) {
    if (/[^0-9\.]/.test(s)) return s
    s = s.toString().replace(/^(\d*)$/, '$1.')
    s = (s + '00').replace(/(\d*\.\d\d)\d*/, '$1')
    s = s.replace('.', ',')
    var re = /(\d)(\d{3},)/
    while (re.test(s)) s = s.replace(re, '$1,$2')
    s = s.replace(/,(\d\d)$/, '.$1')
    return s.replace(/^\./, '0.')
}
// 银行卡格式化 例如卡号 ‘21213213123131312334’ 变为 ‘2121 3213 1231 3131 2334’
function formatBankCard (cardNo = '') {
   return cardNo.replace(/\s/g, '').replace(/\d{4}/g, $0 => $0 + ' ').replace(/\s$/, '')
}
```
