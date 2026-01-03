const max=prompt("Enter the max number:");
const random=Math.floor(Math.random()*max)+1;
let guess=prompt("Guess the number:");
while(true){
    if(guess=="quit"){
        console.log("Quitting Game");
        break;
    }
    if(guess==random){
        console.log("You are right ! Congratulation");
        break;
    }
    else{
        guess=prompt("Your guess is wrong. Please try again");
    }
}
