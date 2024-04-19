import { data } from "./data";

import { Tree, Item } from "./types";

// Создаем функцию findArrayInTree, которая принимает объект tree типа Tree и возвращает массив Item или undefined
export function findArrayInTree(tree: Tree): Item[] | undefined {
  // Проверяем, является ли значение объекта массивом
  if (Array.isArray(tree)) {
      // Если да, то перебираем каждый элемент и вызываем рекурсивно функцию findArrayInTree
      for (const element of tree) {
          const result = findArrayInTree(element);
          if (result) {
              return result;
          }
      }
  } else if (typeof tree === "object") {
      // Если значение не является массивом, но является объектом, то начинаем поиск по ключам
      for (const key in tree) {
          // Если найден ключ "tree_3"
          if (key === "tree_3") {
              // Фильтруем массив значений по условиям и сортируем его
              const filteredArray = (tree[key] as Item[]).filter((item) => {
                  return item.name !== undefined && item.age !== "empty";
              });
              const sortedArray = filteredArray.sort((a, b) => {
                  const numA = parseInt(b.name.match(/\d+/) ![0]);
                  const numB = parseInt(a.name.match(/\d+/) ![0]);
                  return numA - numB;
              });

              return sortedArray;
          }
          // Если ключ не равен "tree_3", вызываем рекурсивно функцию для значения
          const result = findArrayInTree(tree[key]);
          if (result) {
              return result;
          }
      }
  }
}

const result = findArrayInTree(data);

console.log(result);
