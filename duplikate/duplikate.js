function checkOccurrence(array, num){
    let occurrence = 0

    for(let i of array){
        if (i === num){
            occurrence += 1
        }
    }
return occurrence
}
