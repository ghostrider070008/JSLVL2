"use strict";
// валидация имени
/*
let f = () => {
let name_str = document.getElementById('nameIn'),
regexp = /^[a-zа-яё]+$/gi;
let str = name_str.value;
console.log(str);
console.log(regexp.test(str));
console.log(regexp); 
}
*/
let btn = document.getElementById('btn1');
console.log(btn);
btn.addEventListener('click',() =>{
//    f();
fTel();
},false);

let fTel = () => {
let name_str = document.getElementById('tel'),
regexp = /^\+7\([0-9][0-9][0-9]\)-\d\d\d-\d\d-\d\d$/gi;
let str = name_str.value;
console.log(regexp.test(str));
}
