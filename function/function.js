function add(x, y) {
    return x + y;
}
console.log(add(1, 2));
var addSum = function (x, y) { return x + y; };
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
