"use strict";
class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }

}

let user = new User("Иван");
user.sayHi();
