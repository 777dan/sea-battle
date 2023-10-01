let guess;
let hits = 0;
let hitsArr = [];
let guesses = 0;
let isSunk = false;
let error = 0;
let ship = [];
const fieldLen = Math.floor(Math.random() * 18) + 3;
for (let i = 0; i < fieldLen; i++) {
    ship[i] = 0;
}
const shipLen = Math.floor(Math.random() * 3) + 3;
const shipLoc = Math.floor(Math.random() * (fieldLen - shipLen + 1));
for (let i = 0; i < shipLen; i++) {
    ship[shipLoc + i] = 1;
}
while (isSunk == false) {
    guess = +prompt(`Ваш постріл! (введіть число від 0 до ${ship.length - 1}):`);
    if (guess < 0 || guess > ship.length - 1) {
        alert("Введіть правильний номер!");
    }
    else if (isNaN(guess)) {
        break;
    } else {
        guesses = guesses + 1;
        loop1:
        for (let j = 0; j < ship.length; j++) {
            if (ship[guess] === 1) {
                for (let i = 0; i < hitsArr.length; i++) {
                    if (hitsArr[i] === guess) {
                        alert("Ви вже потрапляли сюди");
                        error = 1;
                        break loop1;
                    }
                }
                if (error === 0) {
                    hitsArr.push(guess);
                    hits = hits + 1;
                    alert("Потрапив!");
                    if (hits == shipLen) {
                        isSunk = true;
                        alert("Ви втопили корабель!");
                    }
                    break;
                }
            } else {
                alert("Промах!");
                break;
            }
        }
        error = 0;
    }
}
let stats = "Ви зробили " + guesses + " спроб, щоб втопити корабель, " +
    "що означає, що загальна точність була " + (shipLen / guesses);
alert(stats);