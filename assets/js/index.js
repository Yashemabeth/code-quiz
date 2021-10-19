const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startQuiz);
function startQuiz(){
    const startContainer = document.getElementById("start-container")
// remove the start container 
startContainer.remove();
    console.log("Starting quiz");
}

