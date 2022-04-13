function filterRange (arr, a, b) {
    let filteredarr = [];
    for(let num in arr) {
        if (+num >= a && +num <= b) {
            filteredarr.push(num);
        }
    }
    return filteredarr;
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1（匹配值）

alert( arr ); // 5,3,8,1（未修改）