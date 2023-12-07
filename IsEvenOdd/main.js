function sumOdd(n){
    let sum = 0;
    let i = 1;

    while (i <= n){
        if (i % 2 !== 0) {
            sum += i;
        }
        i++;
    }
    return sum;
}

function sumEven(n){
    let sum = 0;
    let i = 1;

    while (i <= n){
        if (i % 2 === 0) {
            sum += i;
        }
        i++;
    }
    return sum;
}


function isEvenOdd(n, b) {
    if (b) {
        return sumOdd(n)
    } else {
        return sumEven(n)
    }
}



// console.log(isEvenOdd(5, true))
// console.log(isEvenOdd(5, false))
// console.log(isEvenOdd(8, true))
// console.log(isEvenOdd(8, false))
