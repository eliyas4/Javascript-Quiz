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
    {question: "String values must be enclosed within _______ when being assigned to variables.", answers:["commas", "curly brackets", "quotes", "parenthesis"], correctAnswer: 2},
    {question: "String values must be enclosed within fhghffghdhfgfgh _______ when being assigned to variables.", answers:["commghcvgvhas", "curly brackets", "quotes", "parenthesis"], correctAnswer: 2},
]
console.log(questions[0].question)
console.log(questions[0].answers)
let currentQuestion = 0;
let timerCount = 90;

//The game starts when the start button is pressed
startButtonEl.addEventListener("click",startGame);
//gameLogic();





//This function is called when the start button is pressed
function startGame() {
    console.log("cur", currentQuestion)
    startTimer()
    renderQuestions()

    console.log("cur", currentQuestion)
//    renderQuestions()
    for (let i = 0; i < questions.length; i++) {


        
    }






//    renderQuestions()


        

    


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
//    hiddenEl.setAttribute("data-state", "hidden")

    //This renders the questions for the quiz
    questionsEl.setAttribute("data-state", "visible")

    questionTitleEl.textContent = questions[currentQuestion].question
    console.log(questions[currentQuestion].answers.length)

    let ol = document.createElement("ol");
    questionSet.appendChild(ol);


    for (let i = 0; i < questions[currentQuestion].answers.length; i++) {

//       let li = document.createElement("li");

        let button = document.createElement("button");
        button.setAttribute("style", "width: 30%");
 //       button.setAttribute("style", "align-items: left");
        button.setAttribute("data-index", i);


//       button.appendChild(ul)

        ol.appendChild(button);
//        li.appendChild(button);
        button.textContent =((i + 1) + ". " + questions[currentQuestion].answers[i])
    }
    gameLogic();
//    currentQuestion += 1
//    console.log("cur", currentQuestion)











}







function gameLogic() {
    questionsEl.addEventListener("click", function(event) {
        let element = event.target;
        if (element.matches("button") === true) {

            let index = element.getAttribute("data-index");
//           console.log(index)
            feedbackEl.classList.remove("hide")
            if (index == questions[currentQuestion].correctAnswer) {
//                console.log("DDD")

                feedbackEl.textContent = "Correct Answer"
//                currentQuestion += 1


            }
            else {
                
                feedbackEl.textContent = "Incorrect Answer"
                 timerCount -= 20; 
//                 currentQuestion += 1
                 renderQuestions()

            }
//             
//            renderQuestions()   
        }

    });
//    renderQuestions()
//    gameLogic()



}
console.log("cur", currentQuestion)











//These are all the event listeners 


