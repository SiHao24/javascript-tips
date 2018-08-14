### ES6的一些知识点总结
#### 1.使用箭头函数需要注意的几个点
（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象   
（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误；  
（3）不可以使用argumens对象，该对象在函数体内不存在。如果要用，可以使用rest参数代替；   
（4）不可以使用yield命令，因此箭头函数不能用作Generator函数；    
#### 2.将伪数组转换成真正的数组
(1)Array.from();
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
  console.log(Array.isArray(arr2));
```