# javascript-tips
### 1. Anagrams of string 带有重复项   
使用递归。对于给定字符串中的每个字母，为字母创建字谜。使用map()将字母于每部分字谜组合，   
然后使用reduce（）将所有字谜组合到一个数组中，最基本情况是字符串长度等于2或者1.  ```javascript
    const anagrams = str => {
        if(str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
        return str.split('').reduce((acc, letter, i) => 
        acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []);
    }
    anagrams('nba') //(6) ["nba", "nab", "bna", "ban", "anb", "abn"]
```
