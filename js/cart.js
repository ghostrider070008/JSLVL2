"use strict";
/*
let cart = [], i = 0;
class CartGoods {
    constructor (number, title, price, piece){
        this.number = number;
        this.title = title;
        this.price = price;
        this.piece = piece;
    }
}
let number = 1, title = 'Ноутбук Asus X540UA-DM597T', price = 31200, piece = 1;
let GoodsCart = new CartGoods(number, title, price, piece);
console.log(GoodsCart);
cart[i] = GoodsCart;
i++;
cart[i] = GoodsCart;
console.log(cart);
*/
// Класс со списком товаров
class GoodsListClass{
    /*
    constructor (title, price, src){
        this.title = title;
        this.price = price;
        this.src = src;
    }*/
    constructor (){
        this.goods = [];
    }
    addGoods(title, price, src){
       let id = this.goods.length;
        this.goods[id] = {title, price, src};
    }
}
// Класс со списком корзины
class CartList{
    constructor() {
        this.goods = [];
    }
    // Добавление товара в корзину
   addGoods(title, price, piece) {
    let id = this.goods.length;
    let total = this.totalGoods(price, piece);
        this.goods[id] = {title, price, piece, total};
   // }
}
    // Удаление товара из корзины
    deleteGoods(id){
        this.goods.splice(id,1);
    }
    // расчет стоимости товара
    totalGoods(price, piece){
        return price*piece;
    }
    // расчет итогово стоимости товаров в корзине
    TotalCart(){
        let CartTotal = 0;
        for (let index = 0; index < this.goods.length; ++index) {
           CartTotal += this.goods[index].total
        }
        return CartTotal;

    }
}
// основная программа

let GoodsList = new GoodsListClass();
    GoodsList.addGoods('Ноутбук Asus X540UA-DM597T', 31200, 'img/123.jpg');
    GoodsList.addGoods('Ноутбук Asus X540UA-DM597T', 31200, 'img/123.jpg');

//let NewGoods = new GoodsList('Ноутбук Asus X540UA-DM597T', 31200, 'img/123.jpg');
let cart = new CartList();
cart.addGoods('Ноутбук Asus X540UA-DM597T', 31200, 2);
cart.addGoods('Ноутбук Asus X540UA-DM597T', 31200, 2);
console.log(cart);
console.log(GoodsList);
console.log(cart.TotalCart());