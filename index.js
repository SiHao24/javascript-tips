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