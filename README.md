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