function factorial(n) {
    let num = 1
    let n2 = n
    let n_ = 0
    do {
        n_ = n - num
        n2 = n2 + n_
        num = num + 1
    } while (num !== n);
    return n2
};


m = factorial(5);

