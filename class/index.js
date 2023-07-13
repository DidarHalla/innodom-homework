"use strict"

var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.getInfo = function () {
        console.log(this.name = 'Alan', this.age = 72, this.major = 'teacher');
    };
    return Student;
}());
var student = new Student();
student.getInfo();


// Функция для загрузки изображения
function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(url);
    image.onerror = () => reject(url);
    image.src = url;
  });
}

// Массив URL-адресов изображений для загрузки
const imageUrls = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg'
];

// Создаем массив промисов для загрузки изображений
const promises = imageUrls.map(url => loadImage(url));

// Используем Promise.allSettled для выполнения всех загрузок и получения результатов
Promise.allSettled(promises)
  .then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        console.log(`Изображение ${result.value} успешно загружено`);
      } else {
        console.log(`Ошибка загрузки изображения ${result.reason}`);
      }
    });
  });
