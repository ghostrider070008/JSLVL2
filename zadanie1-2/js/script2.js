"use strict";
// класс ковычки
class QuoteClass {
    constructor(){
        this.text='';
    }
    //получение из инпута текста
    findText = () => {
        let text = document.getElementById('textarea');
        this.text = text.value;
        this.replaceStr();
            }
    replaceStr = () => {
        let    tRepl = '\'';
        let     tRep2 = '\"';
       let regexp = new RegExp(`${tRepl}`, 'gi');
        console.log(regexp);
        this.text = this.text.replace(regexp, tRep2);
       
        regexp = new RegExp(`\\b${tRep2}\\b`, 'gi');
        console.log(regexp);

        this.text = this.text.replace(regexp, tRepl);
        console.log(this.text);
        this.getRespon();
        }
        getRespon = (str1) =>{
            let p_res = document.querySelector('p');
            p_res.innerText = this.text;
        }
    }
//получение текста из текстового поля
/*
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
    */
let Quote = new QuoteClass;
let btnRep = document.getElementById('button');
btnRep.addEventListener('click',() =>{
    Quote.findText();
//    Quote.replaceStr();
//    Quote.getRespon();
}, false);


/*
const str = 'Мама мыла раму';
const value = 'Мама';
const regexp = new RegExp(value, 'gi');
let str1 = str.replace(regexp, 'Лама');
console.log(str1);
console.log(str);
*/
