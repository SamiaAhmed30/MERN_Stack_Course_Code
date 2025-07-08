// Nested Loops
for(let i = 1; i<=5; i++){
    for(let j = 1; j<=3; j++){
        console.log(j);
    }
}

// While Loop
let s = 1; 
while(s<=10){
    console.log(s);
    s++;
}

let i = 0; 
while(i<=20){
    console.log(i);
    i++;
}

let j = 0; 
while(j<=20){
    console.log(j);
    j= j+2;
}
//Guess the movie
//Create a guess game where user had to guess you fav movie
// through loop. the loop keep ru ning until the guess is correct.

const fav ="Midnight in paris";
let guess = prompt("Guess My Favorite movie: ");
while((guess !=fav) && (guess !="quit")){
  guess = prompt("wrong guess.please try again : ");
}
if(guess == fav){
console.log("Right answer")}
else{
    console.log("Sucessfuly Quit")
}
//Break Keyword
//The break keyword is used to exit the loop.
//It will exit the loop even if the condition is true.

let t = 1;
while(t<=5){
    if(t == 3){
        break;
    }
    console.log(t);
    t++;
}
//this loop will break when t is equal to 3.

const favmov ="Midnight in paris";
let guess1 = prompt("Guess My Favorite movie: ");
while(guess !=favmov){
    if(guess1=="quit"){
        console.log("You quit the game");
        break; //exit the game loop
    }
  guess1 = prompt("wrong guess.please try again : ");
}