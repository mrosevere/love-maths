// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function() {
    // Get the button elements and add event listeners to them
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click",function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
            }
            else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

/**
 * The main game "loop", called when the script is first loaded 
 * and after the user's answer has been processed.
 */
function runGame() {

    // Creates 2 random numbers between 1 and 25
    let num1 = Math.ceil(Math.random() * 25);
    let num2 = Math.ceil(Math.random() * 25);
}



function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAddionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivideQuestion() {

}