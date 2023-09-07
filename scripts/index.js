import {word} from '../scripts/words.js' ;
console.log(word);
//////
const teclas = document.querySelectorAll(".tecla");
const arrayTeclas = Array.from(teclas);
const boxes = document.querySelectorAll(".box");
const arrayBoxes = Array.from(boxes);
//////
const keyDelete = document.querySelector(".delete");
const keyEnter = document.querySelector(".enter");
//////
var userTry = '';
var letter = '';
var count = 0;
var boxesFlag = 0;
var j = 0;
var line = 0;

var box0 = '', box1 = '', box2 = '', box3 = '', box4 = '';

for(let i = 0; i < arrayTeclas.length; i++){
    arrayTeclas[i].addEventListener("click", () => {
        letter = arrayTeclas[i].textContent;
        if(count < 5){
            addInput();
            userTry += letter.toLowerCase();
        }
    });
}

keyDelete.addEventListener("click", () => {
    letter = '';
    if(count > 0){
        count--;
    }
    userTry = userTry.substring(0, userTry.length - 1);
    addInput();
});

keyEnter.addEventListener("click", () => {
    changeInputs();
    if(box0 == '' || box1 == '' || box2 == '' || box3 == '' || box4 == ''){
        window.alert("Preencha todos os campos adequadamente!");
    } else {
        verifyTry();
        resetInputs();
    }
});

function addInput(){
    switch(count){
        case 0:
            box0 = letter;
            if(letter !== ''){
                count++;
            }
            break;
        case 1:
            box1 = letter;
            if(letter !== ''){
                count++;
            }
            break;
        case 2:
            box2 = letter;
            if(letter !== ''){
                count++;
            }
            break;
        case 3:
            box3 = letter;
            if(letter !== ''){
                count++;
            }
            break;
        case 4:
            box4 = letter;
            if(letter !== ''){
                count++;
            }
            break;
    }
    changeInputs();
}

function changeInputs(){
    arrayBoxes[j].textContent = box0;
    arrayBoxes[j+1].textContent = box1;
    arrayBoxes[j+2].textContent = box2;
    arrayBoxes[j+3].textContent = box3;
    arrayBoxes[j+4].textContent = box4;
}

function verifyTry(){
    for(let i = 0; i < userTry.length; i++){
        if(userTry[i] == word[i]){
            arrayBoxes[i+line].classList.add("greenletter");
        } else if(word.includes(`${userTry[i]}`)){
            arrayBoxes[i+line].classList.add("yellowletter");
        } else{
            arrayBoxes[i+line].classList.add("blackletter");
        }
    }

    line += 5;

    if(userTry != word && line == 10){
        setInterval(() => {
            window.alert(`Que pena, você perdeu!\nA palavra era <strong>${word}</strong>.\nAperte F5 duas vezes para jogar novamente!`);
        }, 300);
    }


    if(userTry == word){
        setInterval(() => {
            window.alert("Parabéns, você venceu!\nAperte F5 duas vezes para jogar novamente!");
        }, 300);
    }
}

function resetInputs(){
    box0 = '', box1 = '', box2 = '', box3 = '', box4 = '';
    userTry = '';
    boxesFlag++;
    count = 0;
    j = 5*boxesFlag
    console.log(line);
}