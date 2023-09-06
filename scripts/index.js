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

var bP0, bP1, bP2, bP3, bP4;
var box0 = '', box1 = '', box2 = '', box3 = '', box4 = '';

for(let i = 0; i < arrayTeclas.length; i++){
    arrayTeclas[i].addEventListener("click", () => {
        letter = arrayTeclas[i].textContent;
        if(count < 5){
            addInput();
            userTry += letter.toLowerCase();
            console.log(userTry);
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
    if(bP0 == '' || bP1 == '' || bP2 == '' || bP3 == '' || bP4 == ''){
        window.alert("Preencha todos os campos adequadamente!");
    } else {
        verifyTry();
        resetInputs();
        console.log(boxesFlag);
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
    bP0 = arrayBoxes[j].textContent = box0;
    bP1 = arrayBoxes[j+1].textContent = box1;
    bP2 = arrayBoxes[j+2].textContent = box2;
    bP3 = arrayBoxes[j+3].textContent = box3;
    bP4 = arrayBoxes[j+4].textContent = box4;
}

function verifyTry(){
    for(let i = 0; i < userTry.length; i++){
        if(userTry[i] == word[i]){
            arrayBoxes[i].classList.add("greenletter");
        } else if(word.includes(`${userTry[i]}`)){
            arrayBoxes[i].classList.add("yellowletter");
        } else{
            arrayBoxes[i].classList.add("blackletter");
        }
    }
}

function resetInputs(){
    box0 = '', box1 = '', box2 = '', box3 = '', box4 = '';
    userTry = '';
    boxesFlag++;
    count = 0;
    j = 5*boxesFlag
}