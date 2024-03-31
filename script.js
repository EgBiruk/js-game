const start = document.querySelector(".start-btn");
const game = document.querySelector(".game-field");
const time = document.querySelector(".game-time-span");
const result = document.querySelector(".game-score");
const gameTime = document.querySelector(".game-time");
const resultSpan = document.querySelector(".game-score-span");
const inputTime = document.querySelector(".input-time")
let score = 0;
let isGameActive = false;



start.addEventListener('click', startGame);

inputTime.addEventListener('change', () => {
    time.innerText = inputTime.value;
    result.classList.add('hide');
    gameTime.classList.remove('hide');
})

function startGame() {
    time.textContent = inputTime.value;
    score = 0;
    result.classList.add('hide');
    gameTime.classList.remove('hide');
    inputTime.disabled = true;
    isGameActive = true;
    start.classList.add("hide");
    game.style.backgroundColor = "white";
    renderBox();

    let interval = setInterval(function(){ 
        let currentTime = parseFloat(time.textContent);
        if (currentTime <= 0) {
            clearInterval(interval);
            endGame();
        } else {
            time.textContent = (currentTime - 0.1).toFixed(2);
            currentTime -= 0.1;
        }
    },100)
}



function renderBox() {
    
    game.innerHTML = '';
    const width = getRandom(30, 100);
    const height = getRandom(30, 100);
    const box = document.createElement('div');
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.position = "absolute";
    box.style.top = `${getRandom(0, 353-height)}px`; // 138 493
    box.style.left = `${getRandom(122, 475-width)}px`; // 593 893
    box.style.cursor = 'pointer';
    box.classList.add('box');
    game.appendChild(box);
}

game.addEventListener('click', gameBoxClick);

function gameBoxClick(e) {
if (!isGameActive) {
    return;
}
if (e.target.classList.contains('box')) {
score++;
renderBox();
}
}

function getRandom(min, max) {
    return (Math.floor(Math.random() * (max - min) + min)) 
  }

function endGame() {
isGameActive = false;
game.innerHTML = ''
start.classList.remove('hide');
game.style.backgroundСolor = "#c0c0c0";
gameTime.classList.add('hide');
result.classList.remove('hide');
resultSpan.textContent = `${score}`;
inputTime.disabled = false;
}
