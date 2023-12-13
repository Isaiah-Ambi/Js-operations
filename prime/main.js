function prime(p) {
    let n = p
    const l = []
    while (n > 0) {
        n -= 1
        let i = 1
        do {
            let j = n % i 
            if (j == 0 & i != n) {

                if (i == 1) {
                    i++
                }
                else {
                    break
                }       
            }
            else if(j == 0 & i == n) {   
                l.push(n)
                i = n + 1
            }
            else{
                i++
            }
        }   while (i <= n)   
    }
    return l
}




