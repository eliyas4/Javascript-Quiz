let timerCountEl = document.querySelector("#time")
let startButtonEl = document.querySelector("#start")
let questionsEl = document.querySelector(".questions")
let questionTitleEl = document.querySelector("#question-title")
let starScreenEl = document.querySelector("#start-screen")
let hiddenEl = document.querySelector(".hide")
let questionSet = document.querySelector(".choices")
let feedbackEl = document.querySelector("#feedback")
//let feedbackHideEl = document.querySelector(".feedback")

let questions = [
    {question: "What are comets mostly made of?", answers:["Snow, ice, and dust", "Various metals", "Poisonous liquid", "Light"], correctAnswer: 0},
    {question: "Which planet has rings around it?", answers:["Earth", "Jupiter", "Saturn", "Uranus"], correctAnswer: 2},
    {question: "How much money does a NASA space suit cost?", answers:["$10,000", "$5,000", "$1 Million", "12 Million"], correctAnswer: 3},
    {question: "The surface of planet 55 cancri e primarily consists of what substance?", answers:["Rubber", "Water", "Diamond", "Lava"], correctAnswer: 2},
    {question: "Is Pluto a planet?", answers:["Yes", "No... but it should be!"], correctAnswer: 1},

]
console.log(questions[0].question)
console.log(questions[0].answers)
let currentQuestion = 3;
let timerCount = 90;

//The game starts when the start button is pressed
startButtonEl.addEventListener("click",startGame);

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
    starScreenEl.classList.add("hide")

    //This renders the questions for the quiz
    questionsEl.setAttribute("data-state", "visible")

    questionTitleEl.textContent = questions[currentQuestion].question
    console.log(questions[currentQuestion].answers.length)

    let ol = document.createElement("ol");
    questionSet.appendChild(ol);


    for (let i = 0; i < questions[currentQuestion].answers.length; i++) {

        let button = document.createElement("button");
        button.setAttribute("style", "width: 30%");
        button.setAttribute("data-index", i);

        ol.appendChild(button);
        button.textContent =((i + 1) + ". " + questions[currentQuestion].answers[i])
    }

    questionsEl.addEventListener("click", function(event) {
        let element = event.target;
        if (element.matches("button") === true) {
            feedbackEl.classList.remove("hide")
            let index = element.getAttribute("data-index");

            if (index == questions[currentQuestion].correctAnswer) {
                feedbackEl.textContent = "Correct Answer"
                nextQuestion()
            }
            else {          
                feedbackEl.textContent = "Incorrect Answer"
                timerCount -= 20; 
                nextQuestion()
            }
        }
    });
}

function resetQuestions() {
    while (questionSet.firstChild) {
        questionSet.removeChild
        (questionSet.firstChild)
    }
    while (questionTitleEl.firstChild) {
        questionTitleEl.removeChild
        (questionTitleEl.firstChild)
    }    
}

function nextQuestion() {
    resetQuestions()
//    renderQuestions()   
}

