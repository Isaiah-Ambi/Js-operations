function fac(n) {
    let num = 1;
    let n2 = n;
    let n_ = 0;
    do {
        n_ = n - num
        n2 += n_
        num += 1
    } while (num !== n);
    return n2
};


m = fac(5);
console.log(m)

