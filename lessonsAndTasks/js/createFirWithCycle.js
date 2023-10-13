let createOneSideFir = function(n) {
    let str = '';
    for (let i = 0; i < n; i++) {
        str += '*';
        console.log(str);
    }
}
createOneSideFir(10);


let createTwoSideFir = function(n) {
    let str = '';
    for (let i = 0; i <= n; i++) {
        for (let j = n - i; j >= 1; j--) {
            str += ' ';
        }
        for (let k = 0; k <= i; k++){
            str += '*';
            for (let l = 1; l <= k; l++) {
                if (l === 2) break;
                str += '*';
            }
        }
        str += '\n';
    }
    return str;
}

console.log(createTwoSideFir(10));