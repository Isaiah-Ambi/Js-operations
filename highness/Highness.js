function highestNum(numArray) {
    let highest = 0;
    for(let i of numArray)
    {
        if(i > highest){
            highest = i
        }
    }
    return highest
}
