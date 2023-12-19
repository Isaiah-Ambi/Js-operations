
function reverse(str) {
    let stringLength = str.length;
    let newstr = '';
    // let newChar = '';
    while (stringLength >= 0) {
        let newChar = '';
        newChar = str.slice(stringLength-1,stringLength);
        console.log(newChar);
        newstr += newChar;
        stringLength--;
        
    }
    return newstr;
}


//test
console.log(reverse('hello'));