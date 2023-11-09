let chances = 3
let luckyNum = 44

do {
   guess = prompt('lucky')
   
   chances -= 1
   if (isNumber(guess)){
        if (guess > luckyNum ){console.log('too high')}
        else if ( guess < luckyNum){console.log('too low')}
        else {console.log('You Win!')}
   }
   else {console.log('error')};
   
    
//    else {console.log('correct answer')}
} while (chances != 0 & guess != luckyNum);

console.log('You Lost!')

function isNumber(input) {
    return !isNaN(input) && isFinite(input);
}