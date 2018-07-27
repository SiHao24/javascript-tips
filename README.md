# javascript-tips
### 1. Anagrams of string 带有重复项   
使用递归。对于给定字符串中的每个字母，为字母创建字谜。使用map()将字母于每部分字谜组合，   
然后使用reduce（）将所有字谜组合到一个数组中，最基本情况是字符串长度等于2或者1.  
```javascript
    const anagrams = str => {
        if(str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
        return str.split('').reduce((acc, letter, i) => 
        acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []);
    }
    anagrams('nba') //(6) ["nba", "nab", "bna", "ban", "anb", "abn"]
```
### 2.数组平均数  
使用reduce()将每个数值添加到累加器，初始值为0，总和除以数组长度。   
```javascript
    const average = arr => arr.reduce((acc, val) => acc + val, 0) / arr.length;
    avarager([1, 2, 3]) // => 2
```
### 3.大些每个单词的首字母
使用replace()匹配每个单词的第一个字符，并使用toUpperCase()来将其大写
```javascript
    const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
    capitalizeEveryWord('hello world') // 'Hello World'
```
### 4.首字母大写
使用slice(0, 1)和toUpperCase()大写第一个字母，slice(1)获取字符串的其余部分，省略lowerRest参数以保持字符串的其余部分不变，或将其设置为true以转换成小写。（和上面的不是同一件事)
```javascript
    const capitalize = (str, lowerRest = false) => 
    str.slice(0, 1).toUpperCase() + (lowerRest ? str.slice(1).toLowerCase() : str.slice(1));
    capitalize('myName', true); //Myname
```
### 5.检查回文
将字符串转换为toLowerCase(),并使用replcae()从中删除非字幕的字符，然后，将其转换为toLowerCase(),将('')拆分为单独字符，reverse(),join(''),与原始的非凡转字符串进行比较，然后将其转换为toLowerCase();
```javascript
    const palindrome = str => {
    const s = str.toLowerCase().replace(/[\W_]/g, '');
    return s === s.split('').reverse().join('');
    }
    palindrome('taco cat'); //true
```
### 6.计数数组中值得出现次数
每次遇到数组中的特定值，使用reduce()来递增计数器
```javascript
    const countOccurrences = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
    countOccurrences([1, 2, 1, 2, 3, 4], 1) // 2 
```
### 7.当前url
使用window.location.href来获取当前url。
```javascript
    const currentUrl = window.location.href;
    currentUrl() //当前你打开的网页链接
```
### 8.curry
使用递归，如果提供的参数（args）数量不够，则调用窜地函数f，否则返回一个curried函数f。
```javascript
    const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
    curry(Math.pow)(2)(10); // 1024
    curry(Math.min, 3)(10)(50)(2); // 2
```
### 9.Deep flatten array
使用递归，使用reduce()来获取所有不是数组的元素，flatten 每个元素都是数组。   
```javascript
    const deepFlatten = arr => arr.reduce((a, v) => a.concat(Array.isArray(v) ? deepFlatten(v) : v), []);
    deepFlatten([1, [2], [[3], 4], 5]); // [1, 2, 3, 4, 5]
```
### 10.数组之间的区别
从b创建一个Set，然后再a上使用Array.filter(),只保留b中不包含的值。
```javascript
    const difference = (a, b) => { const s = new Set(b); return a.filter(x => !s.has(x));};
    difference([1, 2, 3], [1, 2]); // [3]
```
### 11.两点之间的区别
使用Math.hypot()计算两点之间的欧几里得距离。
```javascript
    const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);
    distance(1, 1, 2, 3); // 2.23606797749979
```
### 12.可以按数字整除
使用模运算符(%)来检查余数是否等于0.
```javascript
    const isEven = num => num % 2 === 0;
    isEven(3); // false
```
### 13.转移正则表达式
使用replace()来转义特殊字符
```javascript
    const escapeRegExp = str => replace(/[.*+?^${}()|[\]\\]/g, '\\$&';
    escapeRegExp('(test)'); //"(test)"
```
### 14.偶数或奇数
使用Math.abs()讲逻辑扩展为负数，使用模运算符进行检查。如果数字是偶数，则返回true，如果数字是奇数，则返回false。
```javascript
    const isEven = num => num % 2 === 0;
    isEven(3); // false
```
### 15.阶乘
使用递归，如果n小于或等于1，则返回1，否则返回n和n-1的阶乘的乘积。
```javascript   
    const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
    factorial(6); // 720
```
### 16.斐波那契数组生成器
创建一个特定长度的空数组，初始化前两个值(0和1)。使用Array.reduce()向数组中添加值，后面的一个数等于前面两个数相加之和（前两个除外）。
```javascript
    const fibonacci = n => Array(n).fill(0).reduce((acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2]: i), []);
    fibonacci(5); // [0, 1, 1, 2, 3]
```
### 17.过滤数组中的非唯一值
将Array.filter()用于仅包含唯一值得数组
```javascript
    const filterNonUnique = arr => arr.filter(i > arr.indexOf(i) === arr.lastIndexOf(i));
    filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
```
### 18.Flatten数组
使用reduce()来获取数组中的所有元素，并使用concat()来使他们flatten。
```javascript
    const flatten = arr => arr.reduce((a, v) => a.concat(v), []);
    flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
```
### 19.从数组中或取最大值
使用Math.max()与spread运算符(...)结合得到数组中的最大值。
```javascript
    const arrayMax = arr => Math.max(...arr);
    arrayMax([10, 2, 5]); // 10
```
### 20.从数组中或取最小值
使用Math.min()与spread运算符(...)结合得到数组中的最小值。
```javascript
    const arrayMix = arr => Math.min(...arr);
    arrayMix([10, 2, 5]); // 2
```
### 21.获取滚动位置
如果已定义，请使用pageXOffset和pageYOffset，否则使用scrollLeft和scrollTop，可以省略el来使用window的默认值。
```javascript
    const getScrollPos = (el = window) => ({x: (el.pageXOffset !== undefined) ? el.pageXOffset : el. scrollLeft, y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop});
    getScrollPos() // {x: 0, y: 200}
```