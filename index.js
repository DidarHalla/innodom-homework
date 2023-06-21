'use strict'

// let a = 10;
// alert(a);

// a=20;
// alert(a);

// let b = a;
// alert(b);

// let result = prompt(`Hi, what's your name?`);
// console.log(result);

// function getCount(str = 'ygwertyuio'){

//     let vowels = ['a', 'e', 'i', 'o', 'u']

//     let strSplit = str.split('')
//     let result = []
//     strSplit.forEach((v, i) => {
//         vowels.forEach(vv => {
//             if(vv.includes(v)){
//                 result.push(v)
//             }
//         })
//     })
//     return result.length
// }
// console.log(getCount());

// function litres(time) {
//     return Math.floor(time * 0.5)
// }
// console.log(litres());

// function greet(name){
//     return `Hello, ${name} how are you doing today?`
// }

// function findNeedle(haystack = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]) {
//     let res = haystack.indexOf('3')
//     if(res > -1){
//         return `found the needle at position ${res}`
//     }else return "Your function didn't return anything"
// }
// console.log(findNeedle());

// function paperwork(n=5, m=5) {
//     return (n < 0 || m < 0) ?  0 :  n * m 
// }
//   console.log(paperwork());


// function printerError(s = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'){

//     let primeram = 'nopqrstuvwxyz'.split('')

//     let sSplit = s.split('')
//     let result = []
//     sSplit.forEach((v, i) => {
//         primeram.forEach(vv => {
//             if(vv.includes(v)){
//                 result.push(v)
//             }
//         })
//     })
//     return result.length.toString() + `/` + s.length.toString() 
// }
// console.log(printerError());

// function rowSumOddNumbers(n = 4) {
// 	// TODO
//     let baza = n * (n-1) + 1
//     let r = baza
//     for (let i = 1; i < n; i++) {
//         baza = baza + 2
//         r += baza
//     }
//     return r
// }
// console.log(rowSumOddNumbers());

// function countPositivesSumNegatives(input = [-1, 2, 3, 9, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]){
//     // your code here
//     if(!Array.isArray(input)||input.length==0) return []
//     let positivesNumbers = []
//     let negativeNumbers = []
//     input.map(v => {
//         if(v > 0){
//             positivesNumbers.push(v)
//         }else{negativeNumbers.push(v)}
//     })
//     negativeNumbers = negativeNumbers.reduce((a,v)=> {
//         return a + v
//     },0)
//     return [positivesNumbers.length, negativeNumbers]
// }
// console.log(countPositivesSumNegatives());


let a = 2

let b = 2

let c = 2

console.log(a, b -= 1, c += 2);
