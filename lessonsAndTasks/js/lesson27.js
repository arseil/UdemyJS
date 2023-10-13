const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);

promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return;
    }
    console.log('done');
}
test();


function doNothing() {}
console.log(doNothing());

function doNothing() {
    return;
}
console.log(doNothing() === undefined);

function sayHello(name) {
    return `Привет, ${name}`;
}

function returnNeighboringNumbers(num) {
    let res = [num - 1, num, num + 1]
    return res;
}

function getMathResult(a, b) {
    if (b < 0 || (typeof b) != "number") {
        return console.log(a);
    }
    let res = 0;
    let str = ``;
    for (let i = 0; i < b; i++) {
        res += a;
        str += res;
        for (let j = 1; j < b - i; j++) {
            str += '---';
            if (j === 1) break;
        }
    }
    console.log(str);
}

getMathResult(5, '');

function getMathResult(a, b) {
    if (b <= 0 || (typeof b) != "number") return a;
    let res = 0;
    let str = '';
    for (let i = 0; i < b; i++) {
        res += a;
        str += res;
        for (let j = 1; j < b - i; j++) {
            str += '---';
            if (j === 1) break;
        }
    }
    return str;
}
console.log(getMathResult(10, 0));
