"use strict";

//получение текста из текстового поля
let findText = () => {
    let text = document.getElementById('textarea');
    let str1 = text.value;
    //console.log(str1);
    return str1;
}
// функция замены
let replaceStr = (value) => {
    value = String(value);
    let    tRepl = '\'';
    let     tRep2 = '\"';
   let //regexp = /'/gi;
   regexp = new RegExp(`${tRepl}`, 'gi');
    console.log(regexp);
    value = value.replace(regexp, tRep2);
    //regexp = /\s"/gi;
    regexp = new RegExp(`\\b${tRep2}\\b`, 'gi');
    console.log(regexp);
    //regexp = /\b"\b/gi;
    value = value.replace(regexp, tRepl);
    console.log(value);
    }

let btnRep = document.getElementById('button');
btnRep.addEventListener('click',() =>{
    let    str = findText();
    replaceStr(str);
}, false);


/*
const str = 'Мама мыла раму';
const value = 'Мама';
const regexp = new RegExp(value, 'gi');
let str1 = str.replace(regexp, 'Лама');
console.log(str1);
console.log(str);
*/
