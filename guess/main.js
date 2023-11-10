let chances = 10
let luckyNum = 44

do {
   guess = prompt('guess a number between 0 and 100')
   
   chances -= 1
   alert(chances + ' chances left')
   if (isNumber(guess)){
        if (guess > luckyNum ){console.log('too high')}
        else if ( guess < luckyNum){console.log('too low')}
        else {console.log('You Win!')}
   }
   else {console.log('error')};
   
    
//    else {console.log('correct answer')}
} while (chances != 0 & guess != luckyNum);

console.log('You Lost!')
alert("You're out of chances!")

function isNumber(input) {
    return !isNaN(input) && isFinite(input);
}