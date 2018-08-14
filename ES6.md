### ES6的一些知识点总结
#### 1.使用箭头函数需要注意的几个点
（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象   
（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误；  
（3）不可以使用argumens对象，该对象在函数体内不存在。如果要用，可以使用rest参数代替；   
（4）不可以使用yield命令，因此箭头函数不能用作Generator函数；    
#### 2.将伪数组转换成真正的数组
 (1)Array.from();
```html
    <body>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </body>
```
```javascript
  const arr = document.getElementsByTagName('p');
  const arr2 = Array.from(arr);
  console.log(Array.isArray(arr2)); // true
```  
（2）扩展运算符   
```javascript
  const arr = document.getElementsByTagName('p');
  const arr2 = [...arr];
  console.log(Array.isArray(arr2)); // true
```
(3)使用call，apply方法
```javascript
  const arr = document.getElementByTagName('p');
  const newArr = Array.prototype.slice.call(arr, 0);
  const newArr2 = Array.prototype.slice.apply(arr, [0]);
  console.log(Array.isArray(newArr)); // true
  // const 新数组 = 旧数组.slice(起点下标， 终点下表) 返回值：数组，是旧数组中的一部分
  console.log(newArr); 
```
#### 3.遍历对象的方法
(1)for in    
(2)Object.keys()   
(3)Object.getOwnPropertyNames()      
for in:会输出自身以及原型链上可枚举的属性    
Object.keys():用来获取对象自身可枚举的属性键    
Object.getOwnPropertyNames():用来获取对象自身的全部属性名  
#### 4.混合解构（嵌套对象和数组）解构嵌套对象和数组   
```javascript
  const metadata = {
    title: 'Scratchpad',
    translations: [
      {
        locale: 'de',
        localization_tags: [ ],
        last_edit: '2018-08-18T08:43:37',
        url: '/de/docs/Tools/Scratchpad',
        title: 'Javascript-Umgebung'
      }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
  };
  const { title: englisgTitle, translations: [{title: localeTitle}] } = metadata;
  console.log(englishTitle); // 'Scratchpad'
  console.log(localeTitle); // 'Javascript-Umgebung'
```     
#### 5. class类
```javascript
  // ES5实现方式
  function Parent(name) {
    this.name = name;
  }
  Parent.prototype.sayName = function() {
    console.log('parent name:', this.name);
  }

  function Child(name, parentName) {
    Parent.call(this, parentName);
    this.name = name;
  }

  function inheritPrototype(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
  }

  inheritPrototype(Parent, Child);

  Child.prototype.sayName = function() {
    console.log('child name:', this.name);
  }

  var parent = new Parent('father');
  parent.sayName(); // parent name: father

  var child = new Child('son', 'father');
  child.sayName(); // child name: son
```
ES6实现继承
```javascript
  // 定义类
  class Point{
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    toString() {
      return '(' + this.x + ',' + this.y + ')';
    }
  }


  // 类的继承
  class NBAPlayer2 {
    constructor(name, height) {
      this.name = name;
      this.height = height;
    }
    say() {
      console.log(`name is ${this.name} height is ${this.height}`);
    }
  }

  class MVP2 extends NBAPlayer2 {
    constructor(name, height, year) {
      // 使用extends关键字来实现继承在子类重的构造器constructor中，必须要显示调用父类desuper方法，如果不调用，则this不可用
      super(name, height);
      this.year = year;
    }
    say() {
      console.log(`name is ${this.name} height is ${this.height} mvpyear is ${this.year}`)
    }
  }
```


