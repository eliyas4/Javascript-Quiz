let timerCountEl = document.querySelector("#time")
let startButtonEl = document.querySelector("#start")
let questionsEl = document.querySelector("#questions")
let questionTitleEl = document.querySelector("#question-Title")

let questions = [{question: "String values must be enclosed within _______ when being assigned to variables", answers:["commas", "curly brackets", "quotes", "parenthesis"], correctAnswer: 2}




]
console.log(questions[0].question)
console.log(questions[0].answers)
let currentQuestion = 1;
let timerCount = 90;

//This function is called when the start button is pressed
function startGame() {
    startTimer()
    renderQuestions()
}
//This function is called if the timer runs out
function looseGame() {
    
}
//This function is called if all the questions are answered and the timer does not run out
function winGame() {

}

// The startTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    timer = setInterval(function(){
        timerCount--;
        timerCountEl.textContent = timerCount;
    }, 1000);
    
}

//This function renders the questions 

//These are all the event listeners 
startButtonEl.addEventListener("click",startGame);


//setInterval(function(){
//    console.log("hello World")
//},1000)

// questionTitleEl.textContent = questions[0].question