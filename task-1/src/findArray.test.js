const data = require("../build/data");

function findArrayInTree(tree) {
  if (Array.isArray(tree)) {
    for (const element of tree) {
      const result = findArrayInTree(element);
      if (result) {
        return result;
      }
    }
  } else if (typeof tree === "object") {
    for (const key in tree) {
      if (key === "tree_3") {
        const filteredArray = tree[key].filter((item) => {
          return item.name !== undefined && item.age !== "empty";
        });
        const sortedArray = filteredArray.sort((a, b) => {
          const numA = parseInt(b.name.match(/\d+/));
          const numB = parseInt(a.name.match(/\d+/));
          return numA - numB;
        });

        return sortedArray;
      }
      const result = findArrayInTree(tree[key]);
      if (result) {
        return result;
      }
    }
  }
}

describe("Принимает дерево данных и находит массив в tree_3, с сортировкой", () => {
  it("Проверка результата", () => {
    const result = findArrayInTree(data);
    expect(result).toEqual([
      { name: "name10", age: 30 },
      { name: "name9", age: 31 },
      { name: "name8", age: 15 },
      { name: "name7", age: 20 },
    ]);
  });
});
