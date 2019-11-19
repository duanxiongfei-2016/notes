## dart基础

- Dart所有的东西都是对象， 即使是数字numbers、函数function、null也都是对象，所有的对象都继承自Object类。
- Dart动态类型语言, 尽量给变量定义一个类型，会更安全，没有显示定义类型的变量在 debug 模式下会类型会是 dynamic(动态的)。
- Dart 在 running 之前解析你的所有代码，指定数据类型和编译时的常量，可以提高运行速度。
- Dart中的类和接口是统一的，类即接口，你可以继承一个类，也可以实现一个类（接口），自然也包含了良好的面向对象和并发编程的支持。
- Dart 提供了顶级函数(如：main())。
- Dart 没有 public、private、protected 这些关键字，变量名以"_"开头意味着对它的 lib 是私有的。
- 没有初始化的变量都会被赋予默认值 null。
- final的值只能被设定一次。const 是一个编译时的常量，可以通过 const 来创建常量值，var c=const[];，这里 c 还是一个变量，只是被赋值了一个常量值，它还是可以赋其它值。实例变量可以是 final，但不能是 const。
- 编程语言并不是孤立存在的，Dart也是这样，他由语言规范、虚拟机、类库和工具等组成：
    - SDK：SDK 包含 Dart VM、dart2js、Pub、库和工具。
    - Dartium：内嵌 Dart VM 的 Chromium ，可以在浏览器中直接执行 dart 代码。
    - Dart2js：将 Dart 代码编译为 JavaScript 的工具。
    - Dart Editor：基于 Eclipse 的全功能 IDE，并包含以上所有工具。支持代码补全、代码导航、快速修正、重构、调试等功能。

## 重要概念

> 在学习Dart语言时，请记住以下事实和概念:

- 在变量中可以放置的所有东西都是*对象*，而每个对象都是*类*的实例。无论数字、函数和null都是对象。所有对象都继承自[Object]类。
- 尽管Dart是强类型的，但类型声明是可选的，因为Dart可以推断类型。 如果要明确说明不需要任何类型，请使用[特殊类型dynamic]。
- Dart支持通用类型，如List\<int\>(整数列表)或List\<dynamic\>(任何类型的对象列表)。
- Dart支持顶级函数(如main())，以及绑定到类或对象(分别是静态方法（static）和实例（instance）方法)的函数。您还可以在函数(嵌套或局部函数)中创建函数。
- 类似地，Dart支持顶级变量，以及绑定到类或对象(静态和实例变量)的变量。实例变量有时被称为字段或属性。
- 与Java不同，Dart没有公开、保护和私有的关键字。如果标识符以下划线(_)开头，则该标识符对其库是私有的。有关详细信息，请参见[库和可见性]。
- 标识符可以以字母或下划线(_)开头，然后是这些字符加上数字的任何组合。
- 有时候，某事物是一个表达（expression ）还是一个语句（statement）是很重要的，所以这两个词要准确。
- Dart工具可以报告两种问题:警告和错误。警告只是表明您的代码可能不工作，但它们不会阻止您的程序执行。错误可以是编译时错误，也可以是运行时错误。编译时错误阻止了代码的执行;运行时错误导致代码执行时引发异常。

## 关键字(56个)

|关键字|-|-|-|
|:----:|:----:|:----:|:----:|
|abstract|do|import|super|
|as|dynamic|in|switch|
|assert|else|interface|sync*|
|enum|implements|is|this|
|async*|export|library|throw|
|await|external|mixin|true|
|break|extends|new|try|
|case|factory|null|typedef|
|catch|false|operator|var|
|class|final|part|void|
|const|finally|rethrow|while|
|continue|for|return|with|
|covariant|get|set|yield*|
|default|if|static|deferred|

## 变量与常量

这里有一个创建变量并初始化它的例子:

```dart
var name = 'Bob';
```

变量存储引用。名为name的变量包含对字符串对象的引用，值为"Bob"。name变量的类型被推断为String，但是您可以通过指定它来更改该类型。如果对象不限于单一类型，请按照[设计指导]原则指定对象 (Object)或动态(dynamic)类型。

```dart
dynamic name = 'Bob';
```

另一种方法是显式声明要推断的类型:

```dart
String name = 'Bob';
```

> _注意:这个页面遵循了对本地变量使用var而不是类型注解的风格指南建议。_

## 默认值

未初始化的变量的初始值为null。甚至具有数字类型的变量最初也是null，因为数字——就像dart中的其他东西一样——是对象。

```dart
int lineCount;
assert(lineCount == null);
// 断言 assert
// 如果布尔条件为 false，则使用 assert 语句中断正常执行。
// Assert 语句不会影响生产环境中代码的执行，它仅仅在测试环境中起作用。在 Flutter 的调试模式下可以使用 assert
var urlString = 'http://www.baidu.com'
assert(urlString.startsWith('https'),
    'URL ($urlString) should start with "https".');
```

> _注意:在生产环境中，assert()调用被忽略。在开发环境中当assert(condition) 的condition条件不为真时抛出一个异常。详细信息请查看[ Assert]。_

## Final 和 const修饰符

如果您从未打算更改一个变量，请使用final或const修饰他，而不是使用var或其他变量类型。最终变量只能设置一次;const变量是一个编译时常数。(Const变量是隐式最终变量。)最终的顶级或类变量在第一次使用时被初始化。

> _注意:实例变量可以是final，但不能是const。\[*实例变量定义在对象一级，它可以被类中的任何方法或者其他类中的方法访问，但是不能被静态方法访问。*\]_

这里有一个创建和设置final变量的例子:

```dart
final name = 'Bob'; // Without a type annotation
final String nickname = 'Bobby';
```

您无法更改final变量的值：

```dart
name = 'Alice'; // Error: a final variable can only be set once.
//这个是错误示例，在使用时final变量是不可以更改的
```

对于想要在编译时确定并且不再变的变量，使用const。如果const变量位于类级别，则将其标记为静态const。在声明该变量时，将该值设置为编译时常量，例如数字或字符串字面量、const变量或常量数字算术运算的结果:

```dart
const bar = 1000000; // Unit of pressure (dynes/cm2)
const double atm = 1.01325 * bar; // Standard atmosphere
```

const关键字不只是声明常量变量。您还可以使用它来创建常量值，以及声明创建常量值的构造函数。任何变量都可以赋一个常量值。

```dart
var foo = const [];
final bar = const [];
const baz = []; // Equivalent to `const []`
```

您可以从const声明的初始化表达式中省略const，如上面的baz。有关细节，请参见\[不要多余的使用const\]。

您可以更改一个非final的非const变量的值，即使它曾经有一个const值:

```dart
foo = [1, 2, 3]; // Was const []
```

你不能改变const变量的值:

```dart
baz = [42]; // Error: Constant variables can't be assigned a value.
```
