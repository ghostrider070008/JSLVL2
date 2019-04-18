"use strict";


let findText = () => {
    let text = document.getElementById('textarea');
    let str1 = text.value;
    //console.log(str1);
    return str1;
}

let replaceStr = (value) => {
    value = String(value);
let    tRepl = '\'';
    const regexp = new RegExp(tRepl, 'ig');
    value = value.replace(regexp, '\"');
    console.log(value);
    }

let foo = () =>{
let    m = findText();
    replaceStr(m);
   // console.log(m);
}
let btn1 = document.getElementById('button');
btn1.addEventListener('click',foo, false);


/*
const str = 'Мама мыла раму';
const value = 'Мама';
const regexp = new RegExp(value, 'gi');
let str1 = str.replace(regexp, 'Лама');
console.log(str1);
console.log(str);
*/
