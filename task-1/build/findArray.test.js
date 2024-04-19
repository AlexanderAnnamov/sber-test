var data = require("../build/data");
function findArrayInTree(tree) {
    if (Array.isArray(tree)) {
        for (var _i = 0, tree_1 = tree; _i < tree_1.length; _i++) {
            var element = tree_1[_i];
            var result = findArrayInTree(element);
            if (result) {
                return result;
            }
        }
    }
    else if (typeof tree === "object") {
        for (var key in tree) {
            if (key === "tree_3") {
                var filteredArray = tree[key].filter(function (item) {
                    return item.name !== undefined && item.age !== "empty";
                });
                var sortedArray = filteredArray.sort(function (a, b) {
                    var numA = parseInt(b.name.match(/\d+/));
                    var numB = parseInt(a.name.match(/\d+/));
                    return numA - numB;
                });
                return sortedArray;
            }
            var result = findArrayInTree(tree[key]);
            if (result) {
                return result;
            }
        }
    }
}
describe("Принимает дерево данных и находит массив в tree_3, с сортировкой", function () {
    it("Проверка результата", function () {
        var result = findArrayInTree(data);
        expect(result).toEqual([
            { name: "name10", age: 30 },
            { name: "name9", age: 31 },
            { name: "name8", age: 15 },
            { name: "name7", age: 20 },
        ]);
    });
});
