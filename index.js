'use strict'

// let getRandom = () => {
//     let num = 0
//     return function(){
//         return num++
//     }
// }
// // zapominaniye
// getRandom = getRandom()

// class Transaction{
//     constructor(amount, from, to){
//         this.id = getRandom();
//         this.amount = amount;
//         this.from = from;
//         this.to = to;
//     }
// }

// class Account {
//     constructor(){
//         this.id = getRandom();
//         this.total = 0;
//         this.history = [];
//     }
//     //  get set ? : :
// }

// class User{
//     constructor(name){
//         this.id = getRandom();
//         this.name = name;
//         this.accounts = [];
//     }

//     createAccount() {
//         let acc = new Account()
//         this.accounts.push(acc)
//         return acc
//     }
// }

// // are we have this account
// let getAcc = (arr = [], id) => {

//     for(let user of arr){
//         let accoun = user.accounts.find(function(val){
//             return val.id === id
//         })
//         if(accoun !== undefined){
//             return accoun
//         } 
//     }
//     throw Error('no find this account')
// }


// let bank = {
//     users: [],
//     createUser(name){
//         let user = new User(name)
//         this.users.push(user)
//         return user
//     },
//     transferFromTo(from, to, amount){
//         from = getAcc(this.users, from)
//         to = getAcc(this.users, to)

//         from.total = from.total - amount
//         to.total = to.total + amount

//         from.history.push(new Transaction(-amount, from.id, to.id))
//         to.history.push(new Transaction(amount, from.id, to.id))
//     },
//     topUp(to, amount){
//         to = getAcc(this.users, to)
//         to.total = to.total + amount
//         to.history.push(new Transaction(amount, to.id))
//     },
//     withDraw(from, amount){
//         from = getAcc(this.users, from)
//         from.total = from.total - amount
//         from.history.push(new Transaction(-amount, from.id))
//     },
//     getTransaction(id){
//         id = getAcc(this.users, id)
//         return id.history
//     }
// }

// function start(bank){
//     let gadzhi = bank.createUser('Gadzhi')
//     let miller = bank.createUser('Miller')

//     gadzhi.createAccount()
//     gadzhi.createAccount()

//     miller.createAccount()
//     miller.createAccount()

//     bank.transferFromTo(2, 4, 300)
//     bank.topUp(2, 3000)
//     bank.withDraw(2, 200)

//     console.log(bank.getTransaction(2));
// }
// start(bank)


// let root = document.getElementById('root')
// let input = document.createElement('input')
// let submit = document.createElement('input')
// let div = document.createElement('div')
// input.type = 'input'
// input.value = 'enter your name'
// submit.type = 'submit'
// root.append(input, submit, div)


// submit.onclick = function() {
//     var val = input.value;
//     div.innerHTML="Вы ввели: " + val.split('').map(v => {
//         if(v === '&' || v === '<' || v === '>' || v === '\'' || v === '\"'){
//             return `'`
//         }
//         return v
//     }).join('');
// };





// 1
function LoggerMixin(method,...argument){
    console.log("meth",method);
    console.log("arg",argument);
}

class Student{
    goUnik(to){
        return `I'm go ${to}`
    }
    goHome(to){
     return   `I'm go ${to}`
    }
    goEating(to){
     return `I'm go ${to}`
    }
}

Object.getOwnPropertyNames(Student.prototype).forEach(v=>{
    let fun=Student.prototype[v]
    Student.prototype[v]=function (to){
        LoggerMixin(v,to)

      return fun(to)
    }
})

let student=new Student()
student.goEating("Didaries")



// 2
class Shape {

    constructor(x,y) {
        if(this.constructor == Shape){
            throw new Error(" Object of Abstract Class cannot be created");
            
        }
      
    }

    getArea(){
        throw new Error("Abstract Method has no implementation");
    }

    getPerimeter(){
        throw new Error("Abstract Method has no implementation");
    }
}

class Circle extends Shape {
   constructor(radius){
        super()
        this.radius=radius
   }
    getArea(){
       return Math.PI * this.radius * this.radius;
    }
    getPerimeter(){
        return 2 * Math.PI * this.radius;
    }
}

class Triangle extends Shape {
    constructor(base, height, side1, side2, side3) {
        super();
        this.base = base;
        this.height = height;
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
      }
     getArea(){
        return (this.base * this.height) / 2;
     }
     getPerimeter(){
         return  this.side1 + this.side2 + this.side3;
     }
 }

 class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
      }
      getArea() {
        return this.length * this.width;
      }
      getPerimeter() {
        return 2 * (this.length + this.width);
      }
 }



// 3
 let revers=function (str=""){
    return str.split("").reduceRight((a,v)=>String(a)+String(v))
  }
  let old=revers
  
  revers=function (...string){
     return  string.map(v=>old(v))
  }

  console.log(revers("kfsjf","dsjd","ds"));



  
// 4
  class Engine{
    constructor(){
        this.state="stand"
    }
    start(){
        this.state="go"
    }
    stand(){
        this.state="stand"
    }
}

class Body{
    constructor(){
        this.state="close"
    }
   
    open(){
        this.state="open"
    }
}

class Cary{
    constructor(engine,body){
        this.engine=new Engine()
        this.body=new Body()
    }
    open(){
        body.open()
    }
    go(){
        if(this.body.state=="close") {return console.log("Машина закрыта");}
        this.engine.start()
    }
    stand(){
        if(this.engine.state=="go") {return console.log("Машина заведена");}
        this.body.close()
    }
}




// 5

class Car{
    constructor(wheels,seats){
        this.wheels=wheels //4
        this.seats=seats //4
    }
    creat(){
        return  new Motorcycle(4,4)
      }
}

class Bicycle{
    constructor(wheels,seats){
        this.wheels=wheels //2
        this.seats=seats //1
    }
    creat(){
        return  new Motorcycle(2,1)
      }
}

class Motorcycle{
    constructor(wheels,seats){
        this.wheels=wheels //2
        this.seats=seats //2
    }
    creat(){
      return  new Motorcycle(2,2)
    }
}
