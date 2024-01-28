
function reverse(str) {
    let stringLength = str.length;
    let newstr = '';
    while (stringLength >= 0) {
        let newChar = '';
        newChar = str.slice(stringLength-1,stringLength);
        newstr += newChar;
        stringLength--;    
    }
    return newstr;
}



