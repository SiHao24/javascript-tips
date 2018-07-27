// Anagrams of string(带有重复项)
const anagrams = str => {
    if(str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return str.split('').reduce((acc, letter, i) => 
    acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []);
}
anagrams('nba') //(6) ["nba", "nab", "bna", "ban", "anb", "abn"]
// 数组平均数
const avarage = arr => arr.reduce((acc, val) => acc + val, 0) / arr.length;
average([1, 2, 3]) // => 2

//大写每个单词的首字母
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
capitalizeEveryWord('hello world') // 'Hello World'

// 首字母大写
const capitalize = (str, lowerRest = false) => {
    str.slice(0, 1).toUpperCase() + (lowerRest ? str.slice(1).toLowerCase() : str.slice(1));
}
capitalize('myName', true); //Myname

//检查回文
const palindrome = str => {
    const s = str.toLowerCase().replace(/[\W_]/g, '');
    return s === s.split('').reverse().join('');
}
palindrome('taco cat'); //true

// 计数数组中值得出现次数
const countOccurrences = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
countOccurrences([1, 2, 1, 2, 3, 4], 1) // 2 

// 当前url
const currentUrl = window.location.href;
currentUrl() //当前你打开的网页链接

// 递归
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
curry(Math.pow)(2)(10); // 1024
curry(Math.min, 3)(10)(50)(2); // 2

//Deep flatten array
const deepFlatten = arr => arr.reduce((a, v) => a.concat(Array.isArray(v) ? deepFlatten(v) : v), []);
deepFlatten([1, [2], [[3], 4], 5]); // [1, 2, 3, 4, 5]

// 数组之间的区别
const difference = (a, b) => { const s = new Set(b); return a.filter(x => !s.has(x));};
difference([1, 2, 3], [1, 2]); // [3]

//两点之间的距离
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);
distance(1, 1, 2, 3); // 2.23606797749979

// 转义正则表达式
const escapeRegExp = str => replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
escapeRegExp('(test)'); //"(test)"

// 偶数或奇数
const isEven = num => num % 2 === 0;
isEven(3); // false

// 阶乘
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
factorial(6); // 720

// 斐波那契数组生成器
const fibonacci = n => Array(n).fill(0).reduce((acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2]: i), []);
fibonacci(5); // [0, 1, 1, 2, 3]

//过滤数组中非唯一值
const filterNonUnique = arr => arr.filter(i > arr.indexOf(i) === arr.lastIndexOf(i));
filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]

//Flatten数组
const flatten = arr => arr.reduce((a, v) => a.concat(v), []);
flatten([1, [2], 3, 4]); // [1, 2, 3, 4]

//从数组中或取最大值
const arrayMax = arr => Math.max(...arr);
arrayMax([10, 2, 5]); // 10


// 从数组中获取最小值
const arrayMix = arr => Math.min(...arr);
arrayMix([10, 2, 5]); // 2

// 获取滚动位置
const getScrollPos = (el = window) => ({x: (el.pageXOffset !== undefined) ? el.pageXOffset : el. scrollLeft, y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop});
getScrollPos() // {x: 0, y: 200}

// 最大公约数
const gcd = (x, y) => !y ? x : gcd(y, x % y);
gcd(8, 36); // 4

// head of list 返回arr[0]
const head = arr => arr[0];
head([1, 2, 3]); // 1

// lis初始化
const initial = arr => arr.slice(0, -1);
initial([1, 2, 3]); // [1, 2]

// 用range初始化数组
const initializeArrayRange = (encodeURI, start = 0) => 
    Array.apply(null, Array(end - start)).map((v, i) => i + start);
initializeArrayRange(5); // [0, 1, 2, 3, 4]

// 用值初始化数组
const initializeArray = (n, value = 0) => Array(n).fill(value);
initializeArray(5, 2); // [2, 2, 2, 2, 2]

// 列表的最后
const last = arr => arr.slice(-1)[0] // arr[length - 1]
last([1, 2, 3]); // 3

// 测试功能所花费的时间
const timeTaken = callback => {
    console.time('timeTaken');
    const r = callback();
    console.timeEnd('timeTaken');
    return r;
};
timeTaken(() => Math.pow(2, 10)) // 1024 // (logged): timeTaken: 0.02099609375ms


// 来自键值对的对象
const objectFromParis = arr => arr.reduce((a, v) => (a[v[0]] = v[1], a), {});
objectFromParis([['a', 1], ['b', 2]]) // { a: 1, b: 2 }

// 管道
const pipe = (...funcs) => args => funcs.reduce((acc, func) => func(acc), arg);
pipe(btoa, x => x.toUpperCase())('Test') // "VGVZDA=="

// Powerset
const powerset = arr =>
    arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);
powerset([1, 2]); // [[], [1], [2], [2, 1]]

// 范围内的随机整数
const randomInterInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
randomInterInRange(0 ,5) // 1(随机的)

// 范围内的随机数
const randomInRange = (min, max) => Math.random() * (max - min) + min;
randomInRange(2, 10); // 7.062283291358339

// 随机化数组的顺序
const shuffle = arr => arr.sort(() => Math.random() - 0.5);
shuffle([1, 2, 3]); //   [1, 3, 2]

// 重定向到URL
const rediret = (url, asLink = true) =>
    asLink ? window.location.href = url : window.location.replace(url);
rediret('http://www.baidu.com') 

// 反转一个字符串
const reverseString = str => [...str].reverse().join('');
reverseString('footer'); // "retoof"

// RGB到16进制
const rgbToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
rgbToHex(255, 165, 1); // 'ffa501"

// 滚动到顶部
const scrollToTop = _ => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if(c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    } 
}
scrollToTop();

// 随机数组值
const randomArray = arr => {
    let r = arr.map(Math.random());
    return arr.sort((a, b) => r[a] - r[b]);
}

randomArray([1, 2, 3]); // [2, 1, 3]

// 数组之间的相似性
const similarity = (arr, values) => arr.filter(v => values.includes(v));
similarity([1, 2, 3], [1, 2, 4]); // [1, 2]

// 按字符串排序(按字母顺序排序)
