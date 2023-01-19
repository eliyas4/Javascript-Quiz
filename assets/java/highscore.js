

function displayHighscore() {
    resetQuestions()
    let winingUser = prompt("Congratulations, you won!!!", "Please enter your name to save your score.");
    highScores.push({
        name: winingUser,
        score: timerCount,
    }) 
    let highScoreList = JSON.setItem("highScores", JSON.stringify(highScores))
    location.replace("https://eliyas4.github.io/Javascript-Quiz/highscores.html")
    console.log("firing")
}