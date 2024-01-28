function lowestestNum(numArray) {
    let lowest = numArray[0];
    for(let i of numArray)
    {
        

        if(i < lowest){
            lowest = i
        };
    }
    return lowest
}

