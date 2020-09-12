// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var getHashTags = require('./week2assessment1.js');

assert.deepEqual(
    getHashTags('Прохожу курс на #coursera по #javascript'),
    ['coursera', 'javascript'],
    'Строка "Прохожу курс на #coursera по #javascript"' +
    ' должна содержать хэштеги "coursera, javascript"'
);

console.info('OK!');
