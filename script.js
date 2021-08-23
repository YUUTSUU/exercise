"use strict"; //строгий режим

// // a = 7; //старый способ объявления переменной
// // console.log(a);

// let number = 5; //обычная переменная
// const leftBorderWidth = 2; //константа переменная

// number = 10; //переназначение обычной переменной
// // leftBorderWidth = 20; //ошибка переназначения константной переменной
// console.log(number);

// const obj = { //нет прямой константы
//     a: 50
// };
// obj.a = 20;
// console.log(obj.a);

// console.log(name); //глобальная переменная
// var name = 'Yerzhan';
// name = 'Diana'; //переназначение глобальной переменной
// console.log(name);

// {
// let result = 1; //объявление закрытой переменной
// }
// // console.log(result);


//типы данных = простые и объекты

//простые типы данных
// let number = 4.6; //числовой тип данных - 1
// console.log(number);
// console.log(-4/0); //бесконечность = числовой тип данных - 1
// console.log('string' * 9); //NaN тип данных - 2

// const persone = 'Yerzhan'; //строчный тип данных - 3
// console.log(persone); 

// const pers = '4'; //строчный числовой тип данных - 3
// console.log(pers); 

// const bool = true; //boolean тип данных - 4
// console.log(bool);

// // console.log(something); //Null тип данных - 5

// let num; //Undefind тип данных - 6
// console.log(num);


// //объекты типы данных
// const obj = { //спецальные объекты
//     name: 'di',
//     age: 29,
//     isMarried: false
// };
// console.log(obj.name); //обращение к переменной внутри объекта - первый способ
// // console.log(obj['name']); //обращение к переменной внутри объекта - второй способ

// let arr = ['orange', 'blue', 'green', 5, {}, []]; //массивы - частный случай объектов
// console.log(arr[1]);


//команды 
// alert('Hello'); //просто выводит результат
// let result = confirm('Тебе есть 18?'); //выводит результат с возмоностью ответить Да или Нет (true / false)
// console.log(result);

// let answer = +prompt('Сколько тебе лет?', ''); //выводит результат с возможностью ответить произвольно 
//если добавить перед promt + значение будет числовым
// console.log(typeof(answer)); //typeof указывает на тип данных
// // console.log(answer + 5);

// let answers = [];
// answers[0] = prompt('Твое имя', '');
// answers[1] = prompt('Твоя фамилия', '');
// answers[2] = prompt('Твой возраст', '');
// // console.log(answers); //выводит массив ответов
// // document.write(answers); //вывводит массив ответов в документе
// console.log(typeof(answers)); //typeof опредиляет тип данных
// // console.log(typeof(null)); //ошибка вывода тип данных


//Интерполяция переменной
// let category = 'toys';
// console.log('https://someurl.com/' + category + '/' + '4'); //конкатенация старый метод
// console.log(`https://someurl.com/${category}/5`); //конкатенация новый метод
// let user = 'Yerzhan';
// alert(`Hello, ${user}`);

//Конкатенация
// console.log('arr' + ' - obj');
// console.log(5 + +'5');

// Инкремент и Декремент
// let incr = 10,
//     decr = 10;
// // incr++ ; //постфиксный инкремент
// // decr-- ; //постфиксный декремент
// // ++incr; //префиксный инкремент
// // --decr; //префиксный декремент
// console.log(++incr);
// console.log(--decr);

//Операторы
// console.log(5%2);
// console.log(2*4 === '8');
// // && //оператор 'и' 
// // || //оператор 'или'
// let isChecked = false,
//     isClose = false;
// console.log(isChecked || !isClose);
// console.log(2 + 2 * 2 != 6); //! отрицание

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     cont: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из просмотренный последних фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из просмотренный последних фильмов?', ''),
//     d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// 4 + 4 //бинарный аргумент
// +4 //унарный аргумент

// if (4 == 9) {
//     console.log('Yes');
// } else {
//     console.log('No');
// }

// const num = 50; 
// if (num < 49) { //условие 
//     console.log('Yes');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('No');
// }

// const number = 50;
// // (number == 50) ? console.log('Yes') : console.log('No'); //тернарный оператор

// const value = 50;
// switch (value) {
//     case 40:
//         console.log(1);
//         break;
//     case 100:
//         console.log(2);
//         break;
//     case 50:
//         console.log(3);
//         break;
//     default:
//         console.log(4);
//         break;
// }


//циклы
// let num = 50;
// // while (num <= 55) {
// //     console.log(num);
// //     num++;
// // }
// // do {
// //     console.log(num);
// //     num++;
// // }
// // while(num < 55);

// for (let i = 1; i < 10; i++) {
//     // if (i === 6) {
//     //     // break;
//     //     continue;
//     // }
//     console.log(i);
//     // console.log(num);
//     // num++;
// }


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     cont: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из просмотренный последних фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// if (personalMovieDB.cont < 10) {
//             console.log('Просмотрено довольно мало фильмов');
//         } else if (personalMovieDB.cont >= 10 && personalMovieDB.cont < 30) {
//             console.log('Вы класический зритель');
//         } else if (personalMovieDB.cont >=30) {
//             console.log('Вы киноман');
//         } else {
//             console.log('Произошла ошибка');
//         }

// console.log(personalMovieDB);


//функции
//declaration
// let num = 20;
// function showFirstMessage(text) {
//     console.log(text);
//     // num = 10;
//     // let num = 10;
//     console.log(num);
// }
// showFirstMessage('Hello World');
// console.log(num);


// function calc(a, b) {
//     return(a + b);
// }
// console.log(calc(2,4));
// console.log(calc(5,4));
// console.log(calc(7,4));

// function ret() {
//     let num = 50;
//     //
//     return(num);
// }
// const anotherNum = ret();
// console.log(anotherNum);

// //expression
// const logger = function() {
//     console.log('Hello World');
// };
// logger();

//стрелочная функция
// const calc = (a, b) => a + b;
// const calc = (a, b) => {
//     console.log('done');
//     return a + b;
// };

// let a = 3; //замыкание
// function addTwo(x) {
//     let ret = x + 2;
//     return ret;
// }
// let b = addTwo(a);
// console.log(b);

// let val1 = 2;
// function multiplyThis(n) {
//     let ret = n * val1;
//     return ret;
// }
// let multiplied = multiplyThis(6);
// console.log('example of scope:', multiplied);

// let val = 7;
// function createAdder() {
//     function addNumbers(a, b) {
//     let ret = a + b;
//     return ret;
//     }
//     return addNumbers;
// }
// let adder = createAdder();
// let sum = adder(val, 8);
// console.log('example of function returning a function: ', sum);

// function add(a, b) {
//     return a + b;
// }
// let num = add(2, 5);
// console.log(num);

// function number(a, b) {
//     return (a + b);
// }
// console.log(number(2, 5));

// function add(a, b) {
//     let ret = a + b;
//     return ret;
// }
// let num = add(2, 5);
// console.log(num);

// function createCounter() {
//     let counter = 0;
//     const myFunction = function() {
//         counter = counter + 1;
//         return counter;
//     };
//     return myFunction;
// }
// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// console.log('example increment', c1, c2, c3);

// function sayHi(name) {
//     let phrase = 'Hi, ' + name;
//     alert(phrase);
// }
// sayHi('Yerzhan');

// let c = 4;
// const addX = x => n => n + x;
// const addThree = addX(3);
// let d = addThree(c);
// console.log('example partial application', d);

// let c = 4;
// function addX(x) {
//     return function(n) {
//     return n + x;
//     };
// }
// const addThree = addX(3);
// let d = addThree(c);
// console.log('example partial application', d);

// let phrase = 'Привет';
// function sayHi(name) {
//     alert(phrase + ', ' + name);
// }
// sayHi('Вася');
// phrase = 'Пока';
// sayHi('Вася');

// function sayHiBye(firstName, lastName) {
//     alert( "Привет, " + getFullName() );
//     alert( "Пока, " + getFullName() );
//     function getFullName() {
//     return firstName + " " + lastName;
//     }
// }
// sayHiBye("Вася", "Пупкин");

// function makeCounter() {
//     var currentCount = 1;
//     return function() {
//     return currentCount++;
//     };
// }
// var counter = makeCounter();
// alert(counter());
// alert(counter()); 
// alert(counter());

// function f() {} //свойство функции
// f.test = 5;
// alert( f.test );

//методы
// let str = 'text';
// let arr = [1, 2, 3, 4, 5];
// console.log(str.length); //количество символов
// console.log(arr.length);

// let str = 'teSt';
// console.log(str.toUpperCase()); //верхний регистр
// console.log(str);
// console.log(str.toLowerCase()); //нижний регистр

// let fruit = 'some fruit'; //поиск подстроки
// console.log(fruit.indexOf('fruit'));

// let logg = 'hello world';
// console.log(logg.slice(6, 11)); //вырезать с 6 символа до 11, с поддержкой отрицательных значений
// console.log(logg.slice(6)); //вырезать с 6 символа и до конца
// console.log(logg.substring(6, 11)); //вырезать с 6 символа до 11, без поддержки отрицательных значений
// console.log(logg.substr(6, 5)); //вырезать с 6 символа последовательно 5 символов

// let num = 12.2;
// console.log(Math.round(num));

// let test = '12.2px';
// console.log(parseInt(test)); //превращение в числовое значение с округлением
// console.log(parseFloat(test)); //превращение в числовое значение с дробью

// let num = 255;
// console.log(num.toString(16)); //преобразование системы счисления

// let num = 1.23456;
// console.log(num.toFixed(2)); //округление до n-знаков после точки

// let str = `Hello`;
// // получаем первый символ
// console.log( str[0] );
// console.log( str.charAt(0) );
// // получаем последний символ
// console.log( str[str.length - 1] );


// let sta = 'Hi'; //0
// sta = 'h' + sta[1]; // заменяем строку
// console.log(sta); // hi

// let str = 'Hi'; //1
// str = (str[0].toLowerCase()) + str[1]; // заменяем первый знак в строке
// console.log(str); // hi

// let stt = 'HI'; //2
// console.log((stt[0].toLowerCase()) + stt[1]); // hi / заменяем первый знак в строке

// console.log('Interface'[0].toLowerCase());

// let str = 'Widget with id';
// // console.log( str.indexOf('Widget') ); // 0, потому что подстрока 'Widget' найдена в начале
// // console.log( str.indexOf('widget') ); // -1, совпадений нет, поиск чувствителен к регистру
// console.log( str.indexOf('id') ); // 1, подстрока "id" найдена на позиции 1 (..idget with id)


// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }
// start();

// const personalMovieDB = {
//     cont: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из просмотренный последних фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }
// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.cont < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.cont >= 10 && personalMovieDB.cont < 30) {
//         console.log('Вы класический зритель');
//     } else if (personalMovieDB.cont >=30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }
// detectPersonalLevel();

// function showMyDB(hidden){
//     if (!hidden) {
//         console.log(personalMovieDB);    
//     }
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i - 1] = genre;
//         // personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`); //сокращенный вариант
//     }
// }
// writeYourGenres();


//callback функции
// function first() {
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }
// function second() {
//     console.log(2);
// }
// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }
// function done() {
//     console.log('Я прошел этот курс!');
// }
// learnJS('JavaScript', done);
// // learnJS('JavaScript', function() {
// //     console.log('Я прошел этот курс!');
// // });


// let count = 1;
// count +=2;
// console.log(count);

// let menu = {
//     width: 300,
//     height: 200,
//     title: "Text"
// };
// for (let key in menu) {
//     // этот код будет вызван для каждого свойства объекта
//     // ..и выведет имя свойства и его значение
// console.log( key + ' ' + menu[key] );
// // console.log("Ключ: " + key + " значение: " + menu[key]);
// }

// let menu = {
//     width: 300,
//     height: 200,
//     title: "Menu",
//     genre: 'horror'
// };
// let counter = 0;
// for (let key in menu) {
// counter++;
// }
// console.log( "Всего свойств: " + counter );

// let user = {
//     name: "Вася",
//     surname: "Петров"
// };
// user.age = 25;
// // порядок перебора соответствует порядку присвоения свойства
// for (let prop in user) {
// console.log( prop ); // name, surname, age
// }

// let codes = {
//     // телефонные коды в формате "код страны": "название"
//     "7": "Россия",
//     "38": "Украина",
//     "1": "США"
// };
//   for (let code in codes) console.log( code ); // 1, 7, 38

// var codes = {
//     "+7": "Россия",
//     "+38": "Украина",
//     "+1": "США"
// };
// for (var code in codes) {
// var value = codes[code];
// code = +code; // ..если нам нужно именно число, преобразуем: "+7" -> 7
// console.log( code + ": " + value ); // 7, 38, 1 во всех браузерах
// }


// const options = {
//     title: 'text',
//     width: 500,
//     height: 400,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };
// // console.log(options.colors);
// // console.log(options.title); // 1
// // delete options['title']; //2
// console.log(options); //1
// console.log(options['colors']['border']); //2
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//         console.log(`свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         // console.log('свойство' + ' ' + key + ' ' + 'имеет значение' + ' ' + options[key]); //1
//         console.log(`свойство ${key} имеет значение ${options[key]}`); //2
//     }
// }

// let object = {
//     a: 1,
//     b: 2,
//     c: {
//         d: 3,
//         e: 4
//     }
// };
// for (let key in object) {
//     console.log(key + ' ' + object[key]);
// }
// console.log(object);

// const options = {
//     title: 'text',
//     width: 500,
//     height: 400,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };
// console.log(Object.keys(options).length);

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: function() {
//         console.log('test');
//     }
// };
// obj.d();
// console.log(Object.keys(obj));
// console.log(obj);

//деструктуризация
// const options = {
//     title: 'text',
//     width: 500,
//     height: 400,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('text');
//     }
// };
// options.makeTest();
// let {border, bg} = options.colors;
// console.log(border);

// const objectOptions = {
//     title: 'object',
//     width: 550,
//     height: 400
// };
// const {title: a, width: b, height: c} = objectOptions;
// console.log(a, b, c);


// let arr = [1, 2, 3, 4, 5];
// for (let key in arr) {
//     console.log(key);
// }
// arr.forEach(function(elem, i, arr) {
//     console.log(`${i}: ${elem} внутри массива ${arr}`);
// });
// arr[99] = 10;
// console.log(arr);
// console.log(arr.length);
// arr.pop();
// arr.push(7);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
// console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }


// let str = prompt('text', []);
// let value = str.split(' ').sort().join(', ');
// console.log(value);


// let arr = [13, 2, 1, 4, 5];
// for (let key in arr) {
//     console.log(`${key}: ${arr[key]}`);
// }
// arr.sort(num); //через функцию num правильно сортируются числа
// console.log(arr);
// function num(a, b) {
//     return a - b;
// }


// let a = 5; 
// let b = a; //копия переменной
// b = b + 5;
// console.log(b);
// console.log(a);

// let obj = {
//     a: 5,
//     b: 10
// };
// let copy = obj; //ссылка на объект
// copy.a = 10;
// console.log(copy);
// console.log(obj);


// function copy(obj) {
//     obj.a = 10;
// }
// let num = {
//     a: 2,
//     b: 5,
// };
// let x, y;
// x = num.a;
// copy(num);
// y = num.a;
// console.log(x);
// console.log(y);


//поверхностное компирование объекта
// function copy(mainObj) { //в аргумент вставляется переменная numbers
//     let objCopy = {};
//     for (let key in mainObj) {
//         objCopy[key] = mainObj[key];
//         return objCopy;
//     }
// }
// let numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 4,
//         y: 7
//     }
// };
// // let newNumbers = copy(numbers);
// // newNumbers.a = 10;
// // console.log(newNumbers);
// // console.log(numbers);

// let cloneNum = Object.assign({}, numbers);
// cloneNum.a = 10;
// console.log(cloneNum);
// console.log(numbers);


// let add = {
//     d: 17,
//     f: 25
// };
// let clone = Object.assign({}, add);
// clone.d = 30;
// console.log(clone);
// console.log(add);


// let oldArray = ['a', 'b', 'c'];
// let newArray = oldArray.slice(); //клоинрование массива
// newArray[1] = 'd';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'];
// const blog = ['wordpress', 'livejournel', 'blogger'];
// const internet = [...video, ...blog, 'vk', 'facebook']; //оператор разворота
// console.log(internet);


// //1
// const a = function(a, b) {
//     return(a + b);
// };
// console.log(a(2, 5));

// //2
// function b(a, b) {
//     return(a + b);
// }
// const number = b(2, 5);
// console.log(number);

// //3
// function c(a, b) {
//     return(a + b);
// }
// console.log(c(2, 5));

// //4
// function d(a, b) {
//     const num = a + b;
//     return(num);
// }
// console.log(d(2, 5));

// //5
// function e(a, b) {
//     const number = a + b;
//     console.log(number);
// }
// e(2, 5);

// //6
// function f(a, b) {
//     console.log(a + b);
// }
// f(2, 5);


// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     // console.log(a + b + c);
// }
// const num = [2, 5, 7];
// log(...num);


// //...object спред оператор
// //копия объекта
// const obj = {
//     a: 2,
//     b: 5,
// };
// const newObj = {...obj};
// newObj.a = 10;
// console.log(newObj);
// console.log(obj);

// //копия массива
// const arr = [2 , 5];
// const newArr = [...arr];
// newArr[1] = 10;
// console.log(newArr);
// console.log(arr);

// const array = ['a', 'b', 'c'];
// const newArray = [...array];
// newArray[0] = 'd';
// console.log(newArray);
// console.log(array);

// const object = {one: 'a', two: 'b'};
// // const object = {1: 'a', 2: 'b'}; //второй вариант
// const newObject = {...object};
// newObject['one'] = 'c';
// // newObject[1] = 'c'; //второй вариант
// console.log(newObject);
// console.log(object);


// //слияние объектов
// const o1 = {a: 1};
// const o2 = {b: 2};
// const o3 = {c: 3};
// const obj = Object.assign({}, o1, o2, o3);
// obj.b = 6;
// console.log(obj);
// console.log(o2);

// const ob1 = {a: 1};
// const ob2 = {b: 2};
// const ob3 = {c: 3};
// const obje = {...ob1, ...ob2, ...ob3};
// obje.a = 5;
// console.log(obje);
// console.log(ob1);

// //слияние массивов
// const m1 = [1, 2, 3];
// const m2 = [4, 5, 6];
// const m3 = [7, 8, 9];
// const arr = m1.concat(m2, m3);
// arr[0] = 10;
// console.log(arr);
// console.log(m1, m2, m3);

// const arr1 = [1, 2, 3];
// const arr2 = arr1.concat();
// arr2[1] = 30;
// console.log(arr2);
// console.log(arr1);
// console.log(arr1 == arr2);

// const a1 = [1, 2, 3];
// const a2 = [4, 5, 6];
// const a3 = [7, 8, 9];
// const array = [...a1, ...a2, ...a3];
// array[4] = 25;
// console.log(array);
// console.log(a2);


// function sum(x, y, z) {
//     return(x + y +z);
// }
// const numbers = [1, 2, 3];
// // console.log(sum(...numbers));
// const arr1 = sum(...numbers);
// console.log(arr1);
// // console.log(sum.apply(null, numbers));
// const arr2 = sum.apply(null, numbers);
// console.log(arr2);


// const str = 'text';
// const obj = new String(str);
// // console.log(typeof(str));
// // console.log(typeof(obj));

// const arr = [1, 2, 3];
// console.log(arr);
// console.dir(arr);


// const soldier = {
//     health: 500,
//     armor: 200,
//     message: function() {
//         return('hello');
//     }
// };
// const jhon = Object.create(soldier);
// // const jhon = {
// //     health: 300
// // };
// // Object.setPrototypeOf(jhon, soldier);
// // console.log(jhon.message());


// // to String
// //1
// console.log(typeof(String(null)));
// console.log(typeof(String(2)));
// //2
// console.log(typeof(5 + ''));
// //пример
// const num = 5;
// console.log('https://vk.com/catalog/' + num);
// const adress= 'https://vk.com/catalog/';
// console.log(adress + num);

// const fontSize = 26 + 'px';
// console.log(fontSize);

// //to Number
// //1
// console.log(typeof(Number('2')));
// console.log(Number('7'));
// //2
// console.log(typeof(+'5'));
// console.log(+'5');
// //3
// console.log(typeof(parseInt('15px', 10)));

// let answ = +prompt('Hello', []);

// to Boolean
// 0, '', null, undefined, NaN;
//1
// let switcher = null;
// if(switcher) {
//     console.log('Working...');
// }
// switcher = 1;
// if(switcher) {
//     console.log('Working...');
// }

// let value = +prompt('Сколько тебе лет', []);
// if(value => 18) {
//     console.log('Привет');
// }

//2
// console.log(typeof(Boolean('3')));
// //3
// console.log(typeof(!!'44'));


//задачи
//Какое будет выведено значение
// let x = 5;
// alert(x++);
//результат 5

//Чему равно такое выражение
// [] + false - null + true

// console.log(typeof([] + false)); //string
// console.log([] + false); //false

// console.log([] + false - null); //NaN
// console.log(typeof([] + false - null)); //number

// console.log([] + false - null + true); //NaN

//Что выведет этот код
// let y = 1;
// let x = y = 2;
// alert(x);

//Чему равна сумма
// console.log([] + 1 + 2);

//Что выведет этот код
// alert("1"[0]);

//Чему равно
// 2 && 1 && null && 0 && undefined
// console.log(2 && 1 && null);
// console.log(2 && 1 && null && 0 && undefined);
// && всегда запинается на false

//Есть ли разница между выражениями
// !!(a && b) и (a && b)
// console.log(!!(1 && 2) === (1 && 2));

//Что выведет этот код
// alert(null || 2 && 3 || 4);
// alert(2 || 3);

//два массива равны ли
// let a = [1, 2, 3];
// let b = [1, 2, 3];
// console.log(a == b); //false

//Что выведет этот код
// 

//верно ли сравнение
// console.log('Ёжик' > 'яблоко');

//чему равно 
// 0 || "" || 2 || undefined || true || false
// console.log(0 || "" || 2 || undefined || true || false);


//приложение
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из просмотренный последних фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы класический зритель');
        } else if (personalMovieDB.count >=30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden){
        if (!hidden) {
            console.log(personalMovieDB);    
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, []);
            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre[0].toUpperCase() + genre.slice(1);
            }
        }
        personalMovieDB.genres.forEach((elem, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${elem}`);
        });
    }
};