let timerCountEl = document.querySelector("#time")
let startButtonEl = document.querySelector("#start")
let questionsEl = document.querySelector(".questions")
let questionTitleEl = document.querySelector("#question-title")
let starScreenEl = document.querySelector("#start-screen")
let hiddenEl = document.querySelector(".hide")
let eachQuestion = document.querySelector("#each-question")

let questions = [{question: "String values must be enclosed within _______ when being assigned to variables.", answers:["commas", "curly brackets", "quotes", "parenthesis"], correctAnswer: 2}




]
console.log(questions[0].question)
console.log(questions[0].answers)
let currentQuestion = 0;
let timerCount = 90;

//This function is called when the start button is pressed
function startGame() {
    startTimer()
    renderQuestions()


    startButtonEl.disabled = true;
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
function renderQuestions() {
    //This hides or removes anything that should not be shown once the start button is pressed
    starScreenEl.setAttribute("style", "display: none")
    hiddenEl.setAttribute("data-state", "hidden")

    //This renders the questions for the quiz
    questionsEl.setAttribute("data-state", "visible")
    questionTitleEl.textContent = questions[currentQuestion].question
    console.log(questions[currentQuestion].answers.length)
    for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
        let li = document.createElement("li"); 
    //    li.textContent = questions[currentQuestion].answers[i]

        let button = document.createElement("button");
        button.textContent = questions[currentQuestion].answers[i]

        li.setAttribute("data-index", i);

        li.appendChild(button);
        eachQuestion.appendChild(li)

    }




}




//These are all the event listeners 
startButtonEl.addEventListener("click",startGame);


//setInterval(function(){
//    console.log("hello World")
//},1000)

// questionTitleEl.textContent = questions[0].question