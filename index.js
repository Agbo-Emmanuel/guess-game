let input =document.getElementById("userGuess");
let submitbutton =document.getElementById("submit");
let output =document.querySelector("result");
let correctName = "Agbo";
let attempts = 3
let checkGuess = input.value

submitbutton.onclick = function (){
    // console.log(input.value);
    // console.log(correctName);
    if(input.value == correctName){
        alert("Congratulation, you guessed right")
    }
    else if(input.value !== correctName){
        attempts--
        if (attempts <= 0) {
            alert("you are out of trials")
        }
        else{
            alert( "Wrong!" + " "  +  "you have"+ " "  + attempts + " " + "trial" + " " + "left") 

        }

        
    }

};
