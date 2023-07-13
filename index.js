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


// let a = 2

// let b = 2

// let c = 2

// console.log(a, b -= 1, c += 2);




// let strin = 'inodm'
// console.log(strin[0], strin[2], strin[3]);

// let str = 'inodm'
// let num = 4
// console.log(str[num]);

// console.log(str.at(-2));

// function result(num = '12543'){
//     return num.split('').map(v => {return Number(v)}).reduce((partialSum, a) => partialSum + a, 0);
// }
// console.log(result());

// let reg =  'ii ini inni innni inoi inmi'
// console.log(reg.match(/(ii)|(ini)|(inni)|(innni)/g));




// let strin= 'aAXa aeffa aGha aza ax23a a3sSa';
// console.log(strin.match(/a[a-z][0-9]+a/g))

// let str1 = 'inno'
// let str2 = 'Dom'
// str1 = str1.split('').map(v => {
//     if(v === 'i'){
//         return v.toLocaleUpperCase()
//     }
//     return v
// }).join('')
// console.log(str2 + str1);

// let reg = 'ini ioi idi inni iodi inoi'
// console.log(reg.match(/i\w\w+i/g))

// let inno = 'innoDom'
// inno = inno.split('').reverse('').join('')
// console.log(inno);



// function count(num = 2){
//     if(num % 2 === 0){
//         return 'count'
//     } else {
//         return 'uncount'
//     }
// }
// console.log(count());

// let question = prompt('какой язык программирования ты изучаешь?')
// question = question.toLowerCase()
// if(question === 'js' || question === 'javascript'){
//     console.log('Ты  frontend-разработчик');
// } else if(question === 'c++' || question === 'python' || question === 'java'){
//     console.log('Ты  backend-разработчик')
// } else{
//     console.log('не корректный ответ');
// }

// let language = prompt('What language are you speaking?')
// language = language.toLowerCase()
// if(language === 'russian '){
//     console.log('Привет');
// } else if(language === 'english'){
//     console.log('Hello')
// } else if(language === 'italian'){
//     console.log('Ciao');
// } else if(language === 'spanish'){
//     console.log('Hola');
// } else if(language === 'French'){
//     console.log('Salut');
// } else{
//     console.log('Sorry, I don’t know this language');
// }

// let xlang = prompt('What language are you speaking?')
// xlang = xlang.toLowerCase()
// switch(xlang){
//     case 'russian':
//       console.log('Привет');
//       break
//     case 'english':
//       console.log('Hello');
//       break
//     case 'italian':
//       console.log('Ciao');
//       break
//     case 'spanish':
//       console.log('Hola');
//       break
//     case 'french':
//       console.log('Salut');
//       break
  
//     default:
//       console.log('Sorry, I don’t know this language');
//       break
//   }

// let klava = prompt('задайте вопрос')
// switch(klava){
//     case 'Как тебя зовут?':
//       console.log('Клава');
//       break
//     case 'Как у тебя дела?':
//       console.log('Хорошо, а у тебя?');
//       break
//     case 'Сколько тебе лет?':
//       console.log('Много-много');
//       break
  
//     default:
//       console.log('Я еще не знаю таких слов');
//       break
//   }



// let items = {
//     // name: 'jon'
// }
// try {
//     console.log(1);
//     console.log(items.name);
//     console.log(2);

//     if (!items.name) {
//         throw new Error('нет имени')
//     }
// } catch(error) {
//     console.log(error.name);
//     console.log(error.message);
// } finally {
//     console.log('finish');
// }



// let num = prompt(' введите любое число от 1 до 10')
// for(let i = 1; i <= num; i++){
//     console.log(i);
// }

// let i = 0
// while(i < 10){
//     i = i + 1
//     if(i % 2 == 1){
//         console.log(i);
//     }
// }

// for(let i = 0; i < 10; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

// let pyramid = prompt('введите любое число от 1 до 10')
// let s, i, j,
//   size = pyramid,
//   board = '',
//   out = '';

// for (s = 0; s < (size / 2) - 1; s++) {
//   out += ' ';
// }

// for (i = 0; i < size / 2; i++) {
//   board += '# ';
//   console.log(out, board);
//   out = out.substring(0, out.length - 1);
// }

// for (j = size / 2; j > 0; j--) {
//   out += ' ';
//   board = board.substring(0, board.length - 2);
//   console.log(out, board);
// }

// let cuadro = prompt('введите любое число от 1 до 10')
// for(cuadro; cuadro >= 0; cuadro--){
//     console.log(cuadro * 2);
// }

// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
// }
// let factoria = prompt('введите любое число от 1 до 10')
// console.log( factorial(factoria));



// function sayHello(params = "Привет, мир!"){
//     return params
// }
// console.log(sayHello());

// function getSquare(params = 9) {
//     return params * 2
// }
// console.log(getSquare());

// function isEven(params = 9) {
//     if(params % 2 == 0){
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isEven());

// function getGreeting(params = 'Oleg') {
//     return 'Hello ' + params
// }
// console.log(getGreeting());

// function applyDiscount(price = 10, sale = 5) {
//     let result = price / 100 * sale
//     return result
// }
// console.log(applyDiscount());

// function debounce(callback, delay) {
//     console.log(callback, delay);
//     return callback;
// }
// function DO() {
//     console.log(1);
// }
// const debouncedDO = debounce(DO, 1000);
// for (let i = 0; i < 1000; i++) {
//     debouncedDO()
// } 



// let arr = [1,2,3,4,5]
// let filteredArr = arr.reverse().filter(v => {
//     if(v % 2 == 0){
//         return true
//     }
// }).concat([2,4]).reduce((v, i) => {return v + i},0)

// console.log(filteredArr);

// let fruits = ['apple', 'orange', 'banana', 'grape']
// console.log(fruits.filter(v => {
//     if(v === 'banana'){
//         return true
//     } else {
//       return false
//     }
// }));

// let arr = [1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,5]
// let filteredArray = arr.filter(function(item, pos){
//     return arr.indexOf(item)== pos; 
// });
// console.log(filteredArray);



// let planets = {
//     jupiter: {
//         name: 'jupiter',
//         size: '71492 km',
//         distance: '967 mln km', 
//     },
//     mars: {
//         name: 'mars',
//         size: '3389 km',
//         distance: '54600 mln km', 
//     },
//     moon: {
//         name: 'moon',
//         size: '1737 km',
//         distance: '384400 km', 
//     },
// }
// for(let i in planets){
//     console.log(planets[i]);
// }

// let books = {
//     name: 'sakaso',
//     avtor: 'Raka Makafo',
//     year: 2010,
// }
// books.zhanr = 'blokBaster'
// books.year = 2000
// for(let i in books){
//     console.log(books[i]);
// }

// let shopBy = {
//     name: 'jeans',
//     prise: 30,
//     kolvo: 200,
// }
// console.log(shopBy.hasOwnProperty('name'));

// function calculateTotal(obj) {
//     return obj = shopBy.prise * shopBy.kolvo
// }
// console.log(calculateTotal());

// let sidePolation = {
//     start: {
//         // date: new Date(new Date() - 100000000000),
//         num: 10,
//     },
//     end: {
//         // date: new Date(),
//         num: 22,
//     }
// }
// function calculatePopulation(start, end) {
//     start = sidePolation.start.num
//     end = sidePolation.end.num
//     return end - start
// }
// console.log(calculatePopulation());



// f: for(let i = 0; i < 5; i++){
//     for(let k = 0; k < 5; k++){
//         if(i === 3){
//             break f
//         }
//         console.log(i, k);
//     }
// }

// let i = 0
// h: while(i < 6){
//     let k = 0
//     while(k < 7){
//         if (i === 3) {
//             i+=1
//             continue h
//         }
//         console.log(i,k);
//         k+=1
//     }
//     i+=1
// }

// d1: for (let i = 0; i < 5; i++) {
//     d2: for (let j = 0; j < 6; j++) {
//             for (let k = 0; k < 5; k++) {
//                 if (i === 3) {
//                     continue d1
//                 }
//                 if(j === 4){
//                     break d2
//                 }
//                 console.log(i,j,k);
//             }
//     }
// }



// (function(o, t, f){
//     console.log(o*o + t*t + f*f);
// })(3, 3, 3);

// (function(o, t){
//     console.log(o*t);
// })(3, 3);

// function* generatorFunction(n) {
//     for (let i = 1; i <= n; i++) {
//         yield i
//     }
// }
// const generator = generatorFunction(9);
// for (const i of generator) {
//     console.log(i);
// }

// function* generatorFunction(n) {
//     for (let i = 1; i <= n; i++) {
//         if(i % 2 == 1){
//             yield i
//         }
//     }
// }
// const generator = generatorFunction(9);
// for (const i of generator) {
//     console.log(i);
// }



// let newMap = new Map()
// newMap.set('jeans', '10')
// newMap.set('cap', '14')
// newMap.set('shois', '20')
// console.log(newMap.has('cap'));
// console.log(newMap.get('cap'));
// console.log(newMap.delete('cap'));
// newMap.clear()
// console.log(newMap);

// let newSet = new Set()
// newSet.add('cat')
// newSet.add('dog')
// newSet.add('lama')
// console.log(newSet.has('lama'));
// console.log(newSet.delete('lama'));
// newSet.clear()
// console.log(newSet);

// let animals = new Set()
// animals.add('cat')
// animals.add('dog')
// animals.add('coala')
// animals.add('lama')
// let newSetAnimals = [...animals].filter(v => {
//     let newAnimals = new Set()
//     if(v[0] === 'c'){
//         return newAnimals.add(v)
//     }
// })
// console.log(newSetAnimals);

// let mapUserFruts = new Map()
// mapUserFruts.set('Asha', ['banana', 'maraquia', 'watermelon'])
// mapUserFruts.set('Dasha', ['kiwi', 'mango', 'melon'])
// mapUserFruts.set('Kesha', ['cherry', 'apple', 'watermelon'])
// let getFrut = [...mapUserFruts.get('Dasha')].map(v => {
//     if(v === 'mango'){
//         return mapUserFruts.delete('Dasha')
//     }
// })
// console.log(mapUserFruts);




const userInfo = {
    name: 'Oleg',
    surname: 'Pavchenco',
    eight: 27,
    city: 'Tejen',
    obji: {
        name: 'Jon',
        surname: 'Jonson',
    }
}
// const {name, eight, city} = userInfo
// console.log(name, eight, city);

// function getFullName({name, surname}){
//     return name + ' ' + surname
// }
// const user = {
//     name: 'Dasha',
//     surname: 'Pavchenco',
// }
// console.log(getFullName(user));

// const arr = ['lonely', 1989, 'Jack London']
// const [nam, year, autor] = arr
// console.log(nam, year, autor);




// const counter = {
//   count: 1,
//   increment: function() {
//     this.count++;
//   },
//   decrement: function() {
//     this.count--;
//   }
// };
// counter.increment();
// counter.decrement();
// console.log(counter.count);

// const changeColor = {
//     name: 'Chester',
//     breed: 'beagle',
//     intro: function(){
//       console.log(this);
//     }
// }
// changeColor.intro()

// const dog = {
//     food: 'meet',
//     breed: 'labrador'
// }
// function color() {
//     return this.meet = 'beaf'
// }
// dog.colorr = color
// console.log(dog.colorr())

// function calculate(width, height) {
//     this.width = width;
//     this.height = height;
//     this.calc = function() {
//         return this.width * this.height
//     }
// }
// const calculat = new calculate(10,5)
// console.log(calculat.calc());
// const calculati = new calculate(15,5)
// console.log(calculati.calc());

// const userInfo = function(name, password, interests, job) {
//     this.fullname = name;
//     this.password = password;
//     this.interests = interests;
//     this.job = job;
// }
// function sayHello(){
//     // раскомментируйте следующую строчку, чтобы узнать, на что указывает this
//     // console.log(this); 
//    return `Hi, my name is ${this.fullname} and I'm a ${this.job}. Let's be friends!`;
// }
// const jack = new userInfo('John Smith', 'badpassword', ['hiking', 'biking', 'skiing'], 'Mobile developer');
// jack.addFunc = sayHello
// console.log(jack.addFunc());

// function binarySearch(elem = [2,4,2,1,3,4,6,5], num = 5){
//     return elem.indexOf(num)
// }
// console.log(binarySearch());

// function deepClone(obj) {
//     if (Array.isArray(obj)) {
//       let clone = [];
//       for (let i = 0; i < obj.length; i++) {
//         clone.push(deepClone(obj[i]));
//       }
//       return clone;
//     } else if (typeof obj === 'object' && obj !== null) {
//       let clone = {};
//       for (let prop in obj) {
//         if (obj.hasOwnProperty(prop)) {
//           clone[prop] = deepClone(obj[prop]);
//         }
//       }
//       return clone;
//     } else {
//       return obj;
//     }
//   }
// console.log(deepClone(userInfo));

// function binarySearch(arr = [1,2,3,4,5,6,7,8,9,10], target = 5){
//   return binarySearch(arr, target)
// }
// console.log(binarySearch());

// function binarySearch(arr, target, start = 0, end = arr.length - 1) {
//   if (start > end) {
//     return -1; // Число не найдено
//   }

//   const mid = Math.floor((start + end) / 2);

//   if (arr[mid] === target) {
//     return mid; // Число найдено
//   }
// if (arr[mid] > target) {
//     return binarySearch(arr, target, start, mid - 1); // Поиск в левой половине массива
//   } else {
//     return binarySearch(arr, target, mid + 1, end); // Поиск в правой половине массива
//   }
  
// }
// console.log(binarySearch([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 6))

// function binaryS(arr = [1,3,4,6,7,8,9,100,200], tar = 6, index = []) { 
//   let everage = Math.floor(arr.length / 2) 
 
//   if(tar==arr[everage]){
//     return index.length + everage
//   } 
//   if(tar > arr[everage]){ 
//     return binaryS(arr.slice(everage + 1, arr.length), tar, index.concat(arr.slice(0, everage+1))) 
//   } 
//   if(tar < arr[everage]){ 
//     return binaryS(arr.slice(0, everage), tar, index) 
//   }
//   return -1 
// } 
// console.log(binaryS());




// function calculateCircumference(radius) {
//   return 2 * Math.PI * radius;
// }
// console.log(calculateCircumference(4));


  // Преобразуем даты начала и окончания в объекты Date
  // Проверяем каждое другое событие на пересечение
  // Преобразуем даты начала и окончания в объекты Date
  // Проверяем, пересекаются ли события
  // Если нет пересечений, возвращаем false

// const events = [
//   { start: "2023-07-06T10:00:00", end: "2023-07-08T11:00:00" },
//   { start: "2023-07-09T12:00:00", end: "2023-07-10T13:00:00" },
//   { start: "2023-07-06T14:00:00", end: "2023-07-14T15:00:00" },
// ];

// function isEventOverlap(start, end, even){
//   let eventStart1 = new Date(start)
//   let eventEnd1 = new Date(end)

//   for(let i = 0; i < even.length; i++){
//     let goDate = even[i]

//     let eventStart2 = new Date(goDate.start)
//     let eventEnd2 = new Date(goDate.end)

//     if(eventStart1 < eventEnd2 && eventEnd1 > eventStart2){
//       return true
//     }
//   }
//   return false
// }

// const start = "2023-07-01T11:30:00";
// const end = "2023-07-02T12:30:00";

// if (isEventOverlap(start, end, events)) {
//   console.log("Новое событие пересекается с другими событиями на календаре");
// } else {
//   console.log("Новое событие не пересекается с другими событиями на календаре");
// }


// function getNumberOfDays(start, end) {
//   const date1 = new Date(start);
//   const date2 = new Date(end);

//   // One day in milliseconds
//   const oneDay = 1000 * 60 * 60 * 24;

//   // Calculating the time difference between two dates
//   const diffInTime = date2.getTime() - date1.getTime();

//   // Calculating the no. of days between two dates
//   const diffInDays = Math.round(diffInTime / oneDay);

//   if(diffInDays > 7 && diffInDays < 14){
//     return 'больше недели'
//   } else if(diffInDays > 14 && diffInDays < 21){
//     return 'больше двух недель'
//   } else if(diffInDays > 21 && diffInDays < 28){
//     return 'больше трёх недель'
//   } else{
//     return 'больше месяца'
//   }
// }
// console.log(getNumberOfDays("06/22/2023", new Date()));







// let arr=[1,2,3,4,5] 

// function mapAsync(arrProm=[], callbackProm){ 
//   Promise.all(arrProm.map(callbackProm)).then((v)=>{
//     console.log(v)
//   }) 
// } 
// function callback(value){ 
//     return new Promise(result=>{ 
//         setTimeout(()=>{result(value)},0) 
//     }).then(value => value) 
// } 
// mapAsync(arr,callback)


// function callback(v, i){
//   new Promise(resolve => {
//     setTimeout(resolve, 1000 * i, v)
//   }).then(v => {
//     console.log(v);
//   })
// }
// function forEachAsync(arr, callback){
//   arr.forEach((v, i) => {
//     callback(v, i)
//   })
// }
// forEachAsync([1,2,3,4,5], callback)
// console.log(2);


// function getRandomBoolean(){
//   function randomBoolean(v = [true, false]){
//     return v[(Math.floor(Math.random()*2))]
//   }
//   return new Promise(resolve => {
//     setTimeout(resolve, 1000, randomBoolean())
//   }).then(v => {
//     console.log(v);
//     return v
//   })
// }
// console.log(getRandomBoolean());

// function num1(){
//   return new Promise(resolve => {
//     resolve('n1')
//   }).then(v => {
//     return v
//   })
// }

// function num2(){
//   return new Promise(resolve => {
//     resolve('n2')
//   }).then(v => {
//     return v
//   })
// }

// function num3(){
//   return new Promise(resolve => {
//     resolve('n3')
//   }).then(v => {
//     return v
//   })
// }

// let arr = [num1,num2,num3]

// function parallel(arre){
//   return Promise.all(arre.map(v => {
//     return v()
//   })).then(v => {
//     console.log(v);
//     return v
//   })
// }
// console.log(parallel(arr));


