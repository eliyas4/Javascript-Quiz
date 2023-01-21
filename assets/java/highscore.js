function getHighScore() {
    resetQuestions()
    winScreenEl.classList.remove("hide")
    let winingUser = prompt("Congratulations, you won!!!", "Please enter your name to save your score.");
    highScores.push({
        name: winingUser,
        score: timerCount,
    }) 
}

function displayHighscore() {
    localStorage.setItem("highScores", JSON.stringify(highScores))
    let storedHighscores = JSON.parse(localStorage.getItem("highScores"))
    for (let i = 0; i < storedHighscores.length; i++) {
        let li = document.createElement("li");  
        li.innerText = `${highScores[i].name} - ${highScores[i].score}`;
        scoreSheetEl.appendChild(li);   
    }  
}