

'use strict';


// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50,
// };

// obj.a = 10;
// console.log(obj);

// console.log(userName);
// var userName = 'bob';

// let incr = 10,
//     decr = 10;

// ++incr;
// --decr;

// console.log(++incr);
// console.log(--decr);
// console.log(5%3);

// console.log(2*4 === '8');

// const isChecked = false,
//     isClose = false;

//     // console.log(isChecked && isClose);
//     console.log(isChecked || !isClose);

//     console.log(2 + 2 * 2 !== +'6');

const numberOfFilms  = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('Один из последних просмотренных фильмов?', '');
const b = prompt('На сколько оцените его?', '');
const c = prompt('Один из последних просмотренных фильмов?', '');
const d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
