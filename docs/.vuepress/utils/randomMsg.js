const msgs = [
    '我爸是李刚',
    '先定个小目标，比如挣它一个亿',
    '好久不见，你在哪里',
    '老同学，今天看见你发现又变漂亮了',
    '兄弟，好久不见，好不容易才找到你',
    '如果有一天我下去了，我一定会上来找你的',
    '你头像看起来气质很不错，可以认识一下吗',
    '很高兴认识你，我觉得这是我今天最大的幸运',
    '你说说，现在的天气，自来水都可以直接泡方便面',
    '你好，今天看见你就觉得缘分，结果上来就搜到了',
    '妞，我又没有传染病你老躲着我干嘛啊，再聊会呗',
    '我要让全世界的人知道，你这个磨人的小妖精被我承包了'
]
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min)

const randomMsg = function () {
    const index = randomInt(0, 11)
    return msgs[index]
}

export default randomMsg
