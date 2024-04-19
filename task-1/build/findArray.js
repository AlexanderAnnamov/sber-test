"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findArrayInTree = void 0;
var data_1 = require("./data");
// Создаем функцию findArrayInTree, которая принимает объект tree типа Tree и возвращает массив Item или undefined
function findArrayInTree(tree) {
    // Проверяем, является ли значение объекта массивом
    if (Array.isArray(tree)) {
        // Если да, то перебираем каждый элемент и вызываем рекурсивно функцию findArrayInTree
        for (var _i = 0, tree_1 = tree; _i < tree_1.length; _i++) {
            var element = tree_1[_i];
            var result_1 = findArrayInTree(element);
            if (result_1) {
                return result_1;
            }
        }
    }
    else if (typeof tree === "object") {
        // Если значение не является массивом, но является объектом, то начинаем поиск по ключам
        for (var key in tree) {
            // Если найден ключ "tree_3"
            if (key === "tree_3") {
                // Фильтруем массив значений по условиям и сортируем его
                var filteredArray = tree[key].filter(function (item) {
                    return item.name !== undefined && item.age !== "empty";
                });
                var sortedArray = filteredArray.sort(function (a, b) {
                    var numA = parseInt(b.name.match(/\d+/)[0]);
                    var numB = parseInt(a.name.match(/\d+/)[0]);
                    return numA - numB;
                });
                return sortedArray;
            }
            // Если ключ не равен "tree_3", вызываем рекурсивно функцию для значения
            var result_2 = findArrayInTree(tree[key]);
            if (result_2) {
                return result_2;
            }
        }
    }
}
exports.findArrayInTree = findArrayInTree;
var result = findArrayInTree(data_1.data);
console.log(result);
