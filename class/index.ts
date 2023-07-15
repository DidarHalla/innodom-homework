export {}
// class Student{
//     name: string
//     age: number
//     major: string
//     public getInfo(){
//         console.log(
//             this.name = 'Alan',
//             this.age = 72,
//             this.major = 'teacher',
//         );
//     }
// }
// let student = new Student()
// student.getInfo()


// class Shape{
//     public name: string
//     public getName(name:string){
//       return this.name = name
//     }
// }
// let r = new Shape().getName('Ali')
// console.log(r);

// class Rectangle extends Shape{
    
//     private width: number
//     private height: number
//     public param: string
//     public getArea(){
//         this.width * this.height
//     }
//     public getPerimeter(param: string){
//         this.param = param
//     }
//     constructor(){
//         super()
//     }
// }
// let a = new Rectangle()
// console.log(a);


interface IStorageService {
    setItem(key: string, item: any): void;
    getItem(key: string): any;
    removeItem(key: string): void;
  }
  
  class StorageService implements IStorageService {
    private storage: Storage;
  
    constructor(storage: Storage) {
      this.storage = storage;
    }
  
    setItem(key, item) {
      this.storage.setItem(key, JSON.stringify(item));
    }
  
    getItem(key) {
      const item = this.storage.getItem(key);
      if (item) {
        return JSON.parse(item);
      }
    }
  
    removeItem(key) {
      this.storage.removeItem(key);
    }
  }
  
  export const storageService: IStorageService = new StorageService(
    sessionStorage
  );
  
