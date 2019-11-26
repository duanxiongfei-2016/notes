# 数据双向绑定实现原理

## Object.defineProperty()

实现mvvm的双向绑定，是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。就必须要实现以下几点：

> - 实现一个数据监听器Observer，能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者
> - 实现一个指令解析器Compile，对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数
> - 实现一个Watcher，作为连接Observer和Compile的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数，从而更新视图

![yy](https://upload-images.jianshu.io/upload_images/8560482-d18d5fe20c1ade5c.png)

数据的每次读和写能够被我们看的见，即我们能够知道数据什么时候被读取了或数据什么时候被改写了，我们将其称为数据变的‘可观测’。

要将数据变的‘可观测’，我们就要借助前面提到的`Object.defineProperty`方法了

1. 首先，我们定义一个数据对象car

```js
let car = {
    brand': '宝马',
    price': 3000
}
```

我们定义了这个`car`。现在我们可以通过`car.brand`和`car.price`直接读写这个`car`对应的属性值。但是，当这个`car`的属性被读取或修改时，我们并不知情。那么应该如何做才能够让`car`主动告诉我们，它的属性被修改了呢？

2. 接下来，我们使用`Object.defineProperty()`改写上面的例子

```js
let car = {}
let val = 3000
Object.defineProperty(car, 'price', {
    configurable: true, //  表示能否通过delete将属性删除，能否把属性修改为数据属性
    enumerable: true, // 表示属性可否被枚举(即是否可以通过for in循环返回)
    get () {
        console.log('price属性被读取了')
        return val
    },
    set (newVal) {
        console.log('price属性被修改了')
       val = newVal
    }
})
```

通过`Object.defineProperty()`方法给`car`定义了一个`price`属性，并把这个属性的读和写分别使用`get()`和`set()`进行拦截，每当该属性进行读或写操作的时候就会触发`get()`和`set()`,操作结果如下

```powershell
> car.price
    price属性被读取了        VM10874:5
    3000
> car.price = 5000
    price属性被修改了        VM10874:9
    5000
```

可以看到，`car`已经可以主动告诉我们它的属性的读写情况了，这也意味着，这个`car`的数据对象已经是“可观测”的了。

3. 为了把`car`的所有属性都变得可观测，我们可以编写如下两个函数：

```js
/**
 * 把一个对象的每一项都转化成可观测对象
 * @param { Object } obj 对象
 */
function observable (obj) {
    if (!obj || typeof obj !== 'object') {
        return
    }
    let keys = Object.keys(obj)
    keys.forEach(key =>{
        defineReactive(obj, key, obj[key])
    })
    return obj
}

/**
 * 使一个对象转化成可观测对象
 * @param { Object } obj 对象
 * @param { String } key 对象的key
 * @param { Any } val 对象的某个key的值
 */
function defineReactive (obj, key, val) {
    Object.defineProperty(obj, key, {
        get () {
            console.log(`${key}属性被读取了`)
            return val
        },
        set (newVal) {
            console.log(`${key}属性被修改了`)
            val = newVal
        }
    })
}
```

现在，我们就可以这样定义`car`, `car`的两个属性都变得可观测了

```js
let car = observable({
    brand: 'BMW',
    price: 3000
})
```

## Dep订阅器

> 完成了数据的'可观测'，即我们知道了数据在什么时候被读或写了，那么，我们就可以在数据被读或写的时候通知那些依赖该数据的视图更新了，为了方便，我们需要先将所有依赖收集起来，一旦数据发生变化，就统一通知更新。其实，这就是典型的“发布订阅者”模式，数据变化为“发布者”，依赖对象为“订阅者”。

现在，我们需要创建一个依赖收集容器，也就是消息订阅器Dep，用来容纳所有的“订阅者”。订阅器Dep主要负责收集订阅者，然后当数据变化的时候后执行对应订阅者的更新函数。

1. 创建消息订阅器`Dep`

```js
class Dep {
    constructor(){
        this.subs = []
    },
    //增加订阅者
    addSub(sub){
        this.subs.push(sub)
    },
    //判断是否增加订阅者
    depend () {
        if (Dep.target) {
            this.addSub(Dep.target)
        }
    },
    //通知订阅者更新
    notify () {
        this.subs.forEach(sub =>{
            sub.update()
        })
    }
}
Dep.target = null
```

2. 有了订阅器`Dep`，再将`defineReactive`函数进行改造一下，向其植入订阅器

```js
function defineReactive (obj, key, val) {
    let dep = new Dep()
    Object.defineProperty(obj, key, {
        get () {
            dep.depend()
            console.log(`${key}属性被读取了`)
            return val;
        },
        set (newVal) {
            val = newVal
            console.log(`${key}属性被修改了`)
            dep.notify()     // 数据变化通知所有订阅者
        }
    })
}
```

3. 到此，订阅器`Dep`设计完毕，接下来，我们设计订阅者`Watcher`

## Watcher订阅者

> 订阅者`Watcher`在初始化的时候需要将自己添加进订阅器`Dep`中，那该如何添加呢？我们已经知道监听器`Observer`是在`get`函数执行了添加订阅者`Wather`的操作的，所以我们只要在订阅者`Watcher`初始化的时候出发对应的`get`函数去执行添加订阅者操作即可，那要如何触发`get`的函数，再简单不过了，只要获取对应的属性值就可以触发了，核心原因就是因为我们使用了`Object.defineProperty()`进行数据监听。这里还有一个细节点需要处理，我们只要在订阅者`Watcher`初始化的时候才需要添加订阅者，所以需要做一个判断操作，因此可以在订阅器上做一下手脚：在`Dep.target`上缓存下订阅者，添加成功后再将其去掉就可以了。

订阅者`Watcher`的实现如下：

```js
class Watcher {
    constructor(vm, exp, cb){
        this.vm = vm
        this.exp = exp
        this.cb = cb
        this.value = this.get()  // 将自己添加到订阅器的操作
    },

    update () {
        let value = this.vm.data[this.exp]
        let oldVal = this.value
        if (value !== oldVal) {
            this.value = value
            this.cb.call(this.vm, value, oldVal)
        },
    get () {
        Dep.target = this  // 缓存自己
        let value = this.vm.data[this.exp]  // 强制执行监听器里的get函数
        Dep.target = null  // 释放自己
        return value
    }
}
// vm: 一个Vue的实例对象
// exp: 是node节点的v-model或v-on：click等指令的属性值。如v-model="name"，exp就是name
// cb: 是Watcher绑定的更新函数
```

<!-- // https://www.cnblogs.com/wangjiachen666/p/9883916.html -->

<ClientOnly>
  <global-reward-index />
</ClientOnly>
