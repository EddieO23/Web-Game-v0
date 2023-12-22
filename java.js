const container = document.querySelector(".container"),
selectXBtn = container.querySelector(".playerX"),
selectOBtn = container.querySelector(".playerO"),
playBoard = document.querySelector(".play-board"),
allBoxes = document.querySelectorAll("section span"),
players = document.querySelector(".players");

window.onload = () => {
    for (let i = 0; i < allBoxes.length; i++) { //add onclick attribute in all available section's spans
        allBoxes[i].setAttribute("onclick", "clickedBox(this)")
    }

selectXBtn.onclick = () => {
    container.classList.add("hide"); // hides the select box when the "x" button is clicked 
    playBoard.classList.add("show"); //shows the playboard section when userX button is clicked 
}
selectOBtn.onclick = () => {
    container.classList.add("hide"); // hides the select box when the "O" button is clicked 
    playBoard.classList.add("show"); //shows the playboard section when userX button is clicked 
    players.setAttribute("class", "players active player") //adding a third class name in player element
}
}

let playerXicon = "huh" //class name of fontawesome cross icon
let playerOicon = "huh circle" //class name of fontawesome circle icon

function clickedBox(element) {
    if(players,classList.contains("")){

    }
}