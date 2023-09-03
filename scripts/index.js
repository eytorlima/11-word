import {word} from '../scripts/words.js' ;
console.log(word);
//////
const teclas = document.querySelectorAll(".tecla");
const arrayTeclas = Array.from(teclas);
const boxes = document.querySelectorAll(".box");
const arrayBoxes = Array.from(boxes);
//////
var userTry = '';
var letter = '';
var count = 0;
var boxesFlag = 0;

var bP0, bP1, bP2, bP3, bP4;
var box0, box1, box2, box3, box4;

for(let i = 0; i < arrayTeclas.length; i++){
    arrayTeclas[i].addEventListener("click", () => {
        letter = arrayTeclas[i].textContent;
        if(count < 5){
            addIpunt();
            userTry += letter.toLowerCase();
        } 

    });
}

// // function changeInputs(){
// //     for(boxesFlag; boxesFlag < 6;){
// //         for(let i = 0; i < 1; i+(5*boxesFlag)){
// //             bP0 = arrayBoxes[i].textContent = box0;
// //             bP1 = arrayBoxes[i+1].textContent = box1;
// //             bP2 = arrayBoxes[i+2].textContent = box2;
// //             bP3 = arrayBoxes[i+3].textContent = box3;
// //             bP4 = arrayBoxes[i+4].textContent = box4;
// //             break;
// //         }
// //         break;
// //     }
// // }

// function addIpunt(){
//     switch(count){
//         case 0:
//             box0 = letter;
//             if(letter !== ''){
//                 count++;
//             }
//             break;
//         case 1:
//             box1 = letter;
//             if(letter !== ''){
//                 count++;
//             }
//             break;
//         case 2:
//             box2 = letter;
//             if(letter !== ''){
//                 count++;
//             }
//             break;
//         case 3:
//             box3 = letter;
//             if(letter !== ''){
//                 count++;
//             }
//             break;
//         case 4:
//             box4 = letter;
//             if(letter !== ''){
//                 count++;
//             }
//             break;
//     }
//     // changeInputs();
// }