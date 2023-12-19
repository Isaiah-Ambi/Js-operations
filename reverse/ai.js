function reverse(str) {
    let reversedStr = '';
    let index = str.length - 1;
    while (index >= 0) {
        reversedStr += str[index];
        index--;
    }
    return reversedStr;
}