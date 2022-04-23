/* .. inBetween 和 inArray 的代码 */
let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

function inBetween(a, b) {

}

function inArray(child) {
    let result = []
    for (let num of child) {
        if (arr.includes(num))
            result.push(num);
    }
    return result.toString();
}