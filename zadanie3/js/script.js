"use strict";
// валидация имени
class validClass{
    constructor (){
        this.name_user = [];
        this.tel_user = [];
        this.email_user = [];
        //присвоение каждому элементу переменную
        this.name_user.element = document.getElementById('nameIn');
        this.tel_user.element = document.getElementById('tel');
        this.email_user.element = document.getElementById('eMail');
    }
   
    // Валидность имени
   
    fnameUser = () => {
let regexp = /^[a-zа-яё]+$/gi;
this.name_user.text = this.name_user.element.value;
this.name_user.valid = regexp.test(this.name_user.text);
this.renderNameUser();

/*
        name_str.onblur(() => {
            if (this.name_user.valid = true){
                name_str.style.borderColor = 'green';
            }
        })*/
    }
    renderNameUser(){
        if (this.name_user.valid == true){
            this.name_user.element.style.borderColor = 'green';
            document.getElementById('nameLbl').innerText = '';
            }
     else {
        this.name_user.element.style.borderColor = 'red';
        document.getElementById('nameLbl').innerText = 'Имя дожно содержать только буквы';
     }
    }

//валидация телефона
    fTel = () => {
let regexp = /^\+7\(\d\d\d\)\d\d\d-\d\d\d\d$/gi;
this.tel_user.text = this.tel_user.element.value;
this.tel_user.valid = regexp.test(this.tel_user.text);
        this.renderFtel();
}
    renderFtel = () => {
        if (this.tel_user.valid == true){
            this.tel_user.element.style.borderColor = 'green';
            document.getElementById('telLbl').innerText = '';
            }
     else {
        this.tel_user.element.style.borderColor = 'red';
        document.getElementById('telLbl').innerText = 'Телефон должен соответствовать следующей маске: +7(000)000-0000';
     }
    }
//валидация email
    fEmail = () => {
        this.email_user.element = document.getElementById('eMail');
let regexp = /^([a-z0-9]+@mail.ru|[a-z0-9]+\.[a-z0-9]+@mail.ru|[a-z0-9]+-[a-z0-9]+@mail.ru)$/gi;
    this.email_user.text = this.email_user.element.value;
    this.email_user.valid = regexp.test(this.email_user.text);
        this.renderFemail();
}
renderFemail(){
    if (this.email_user.valid == true){
        this.email_user.element.style.borderColor = 'green';
        document.getElementById('eMailLbl').innerText = '';
        console.log('Все правильно введено');
        }
 else {
    this.email_user.element.style.borderColor = 'red';
    document.getElementById('eMailLbl').innerText = 'E-mail соответствовать маске: mymail@mail.ru или my.mail@mail.ru или my-mail@mail.ru';
 }
}
}
// Основная программа
//создание нового класса
let valid = new validClass;

//событие onblur имени пользователя
valid.name_user.element.onblur = () =>{
    valid.fnameUser();   
}
//событие onblur телефона пользователя
valid.tel_user.element.onblur = () =>{
    valid.fTel();
    
}

//событие onblur на почту
valid.email_user.element.onblur = () =>{
    valid.fEmail();
    
}


let btn = document.getElementById('btn1');
btn.addEventListener('click',() =>{
valid.fnameUser(); 
valid.fTel();  
valid.fEmail();
},false);