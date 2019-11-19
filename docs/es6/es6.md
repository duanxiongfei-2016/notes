* #### 解构赋值

  * 数组的解构赋值

    ```js
    let [a, b, c] = [1, 2, 3]; 
    // a = 1; b = 2; c = 3
    ```

  * 对象的解构赋值
      ```js
        let { foo, bar } = { foo: "aaa", bar: "bbb" };
        foo // "aaa"
        bar // "bbb"
      ```

  * 用途

      ```js
      （1）交换变量的值
      let x = 1;
      let y = 2;
      [x, y] = [y, x];
      // x = 2; y = 1;
      ```

* #### String字符串扩展

  * ##### 字符串遍历 (```for...of```) 循环遍历。

    ```js
    const str = '中国，我爱你'
    for (let codePoint of str) {
      console.log(codePoint)
    }
    // 中
    // 国
    // ，
    // 我
    // 爱
    // 你
    ```

  * ##### ```includes(), startsWith(), endsWith()```

    ```js
    // includes()：返回布尔值，表示是否找到了参数字符串。
    // startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
    // endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
    
    let s = 'Hello world!';
    s.startsWith('Hello') // true
    s.endsWith('!') // true
    s.includes('o') // true
    
    // 这三个方法都支持第二个参数，表示开始搜索的位置。
    let s = 'Hello world!';
    s.startsWith('world', 6) // true
    s.endsWith('Hello', 5) // true
    s.includes('Hello', 6) // false
    // 上面代码表示，使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。
    ```

  * ##### ```repeat()```

  * ```js
    'x'.repeat(3) // "xxx"
    'hello'.repeat(2) // "hellohello"
    'na'.repeat(0) // ""
    ```

* #### Array数组扩展

  * ##### 数组实例的 entries()，keys() 和 values()

    ```js
    let arr = ['a', 'b']
    
    for (let index of arr.keys()) {
      console.log(index);
    }
    // 0 
    // 1
    for (let elem of arr.values()) {
      console.log(elem);
    }
    // 'a'
    // 'b'
    for (let [index, elem] of arr.entries()) {
      console.log(index, elem);
    }
    // 0 "a"
    // 1 "b"
    
    // 如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历。
    let arr1 = ['a', 'b', 'c']
    let entries = arr1.entries()
    console.log(entries.next().value) // [0, 'a']
    console.log(entries.next().value) // [1, 'b']
    console.log(entries.next().value) // [2, 'c']
    ```

  * ##### 数组实例的 includes()

    ```js
    [1, 2, 3].includes(2)     // true
    [1, 2, 3].includes(4)     // false
    [1, 2, NaN].includes(NaN) // true
    // 该方法的第二个参数表示搜索的起始位置，默认为0。如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始。
    ```

  * ##### 数组实例的 flat()，flatMap() 

    * 数组的成员有时还是数组，Array.prototype.flat()用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。

    ```js
    let arr = [1, 2, [3, 4, [7, 8]], [5, 6]]
    arr.flat()
    // [1, 2, 3, 4, [7, 8], 5, 6]
    ```

    *  flat()默认只会“拉平”一层，如果想要“拉平”多层的嵌套数组，可以将flat()方法的参数写成一个整数，表示想要拉平的层数，默认为1。

    ```js
    let arr = [1, 2, [3, 4, [7, 8]], [5, 6]]
    arr.flat(2)
    // [1, 2, 3, 4, 7, 8, 5, 6]
    ```

    * flatMap()方法对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组。

    ```js
    // 相当于 [[2, 4], [3, 6], [4, 8]].flat()
    [2, 3, 4].flatMap((x) => [x, x * 2])
    // [2, 4, 3, 6, 4, 8]
    ```

* #### Function函数扩展

  1. ##### 函数的参数默认值

     ```js
     function log(x, y = 'World') {
       console.log(x, y);
     }
     
     log('Hello') // Hello World
     log('Hello', 'China') // Hello China
     log('Hello', '') // Hello
     ```

* #### Object对象扩展



