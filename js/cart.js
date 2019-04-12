"use strict";
let makeGetRequest = (url) => {
    let xhr;
    let promise = new Promise((resolve, reject) => {
    if (window.XMLHttpRequest){
        xhr = new XMLHttpRequest ();
        }
    else if (window.ActiveXObject){
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhr.onreadystatechange = () =>{
           
            if (xhr.readyState === 4){
                resolve(xhr.responseText);
                //callback(xhr.responseText);
                }
            else if (xhr.status !== 200 && xhr.status !== 0) {
                reject(xhr.status);
            }
            
        }
        xhr.open('GET', url, true);
        xhr.send();
    })
    return promise;
}

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
// Класс со списком товаров
class GoodsListClass{
    
    constructor (){
        this.goods = [];
    }
    //Заполнение товаром объекта
    addfullGods(list){
        let goodsList = list.map(item => this.addGoods(item.title, item.price, item.src));
    }
    fetchGoods(){
        let goodsPromise = new Promise ((resolve, reject) =>{
        makeGetRequest(`${API_URL}/catalogData.json`)
        .then((goods) => {this.goods = JSON.parse(goods);
            console.log(`${goods}`)})
        //.then(() => console.log(``))
        .then(() => {this.renderGoods()})
        .catch((err) => {
            console.error(`Ошибка: ${err}`)
        })  
        resolve('Успех');  
        
    })
    return goodsPromise;
    }
    renderGoods(){
            this.renderGoodsListProm(this.goods);
    }

    /*fetchGoods(cb){
        makeGetRequest(`${API_URL}/catalogData.json`,(goods) =>{
            this.goods = JSON.parse(goods);
            cb();
        })
    }*/
    //добавление товара
    addGoods(title, price, src){
       let id = this.goods.length;
        this.goods[id] = {title, price, src};
    }
    //удаление товара
    deleteGoods(id){
        this.goods.splice(id,1);
    }
    renderGoodsItemProm(product_name, price){
        return `<div class="goods-item"><h2 class="name-tovar">${product_name}</h2><p>${price}&#8381;</p><div class="btn-buy-goods" onclick="CartList1.addGoods(${ident},GoodsListClass1.goods[${ident}].title,GoodsListClass1.goods[${ident++}].price, 1);"></div></div>`;

    }
    renderGoodsListProm(list){
        let goodsList = list.map(item => this.renderGoodsItemProm(item.product_name, item.price));
        document.querySelector('.dz').innerHTML = goodsList.join("");
    }
    renderGoodsItem(title, price, src){
        return `<div class="goods-item"><h2 class="name-tovar">${title}</h2><img src="${src}"><p>${price}&#8381;</p><div class="btn-buy-goods" onclick="CartList1.addGoods(${ident},GoodsListClass1.goods[${ident}].title,GoodsListClass1.goods[${ident++}].price, 1);"></div></div>`;

    }
    renderGoodsList(list){
        let goodsList = list.map(item => this.renderGoodsItem(item.title, item.price, item.src));
        document.querySelector('.goods-list').innerHTML = goodsList.join("");
    }
}
// Класс со списком корзины
class CartList{
    constructor() {
        this.goods = [];
    }
    // Добавление товара в корзину
   addGoods(index,title, price, piece) {
       let id,total, check;
       check = false;
    if (this.goods.length > 0 && check == false){
        for (var i=0; i < this.goods.length; i++){
            if (this.goods[i].index == index){
                this.goods[i].piece += 1;
                this.goods[i].total = this.goods[i].price * this.goods[i].piece;
                check = true;
                break;
            }
            else{
                check = false;
            }

            
        }
        if (check == false){
            id = this.goods.length;
            total = this.totalGoods(price, piece);
            this.goods[id] = {index,title, price, piece, total};
        }
        
    }
    else{
    id = this.goods.length;
    total = this.totalGoods(price, piece);
    this.goods[id] = {index,title, price, piece, total};
    }
   // }
   alert('Товар добавлен в корзину');
}
    // Удаление товара из корзины
    deleteGoods(id){
        this.goods.splice(id,1);
        alert('Товар успешно удален из корзины');
        this.renderGoodsList(this.goods);
        this.headerCart();
        this.CallCart();
    }
    // расчет стоимости товара
    totalGoods(price, piece){
        return price*piece;
    }
    // расчет итогово стоимости товаров в корзине
    TotalCart(){
        let CartTotal = 0;
        for (let index = 0; index < this.goods.length; ++index) {
           CartTotal += this.goods[index].total;
        }
        let TotalCartPage = document.createElement('tr');
        TotalCartPage.innerHTML = `<td colspan="2"><b>Итого:</b></td><td>${CartTotal}</td>`; 
        document.getElementsByTagName("table")[0].appendChild(TotalCartPage);
        return CartTotal;

    }
    // шапка таблицы товаров
    headerCart(){
        if (this.goods.length > 0){
            document.querySelector('.cart-name').innerHTML = 'Корзина покупок';
        let tag = `<td><b>Наименование</b></td><td><b>Цена</b></td><td><b>Количество</b></td><td><b>Стоимость</b></td>`;
        let strong = document.createElement('tr');
        strong.innerHTML = tag;
        parent = document.querySelector('.table-cart');
        parent.insertBefore(strong, parent.firstElementChild);
        this.TotalCart();
        }
        else{
            document.querySelector('.cart-name').innerHTML = 'Ваша корзина покупок пуста';
        }
    }
    //формирование тега товара в корзине
    renderGoodsItem(title, price, piece, total){
        id = 0;
        return `<tr><td>${title}</td><td>${price}</td><td>${piece}</td><td>${total}</td><td><button onclick="CartList1.deleteGoods(${id++});">Удалить</button></td></tr>`;
    }
    renderGoodsList(list){
        let goodsList = list.map(item => this.renderGoodsItem(item.title, item.price, item.piece, item.total));
        document.querySelector('.table-cart').innerHTML = goodsList.join('');
    }
    CallCart(){
    document.querySelector('.cart-overlay').style.display = "table";
    this.CartOpen();
    }
    // Плавное появление окна
    CartOpen(){
        
        let el = document.getElementsByClassName("cart-overlay")[0];
        let op = 0;
        let func;
     setTimeout(func = () => {
         if (op > 1){
            return;
         }
         el.style.opacity = op;
         op += 0.1;
         setTimeout (func, 50);
     }, 50);
        }
        // Функция закрытия корзины
        CartClose(){
            let el = document.getElementsByClassName("cart-overlay")[0];
            let op = 1;
            let func;
         setTimeout(func = () => {
             if (op <= 0){
                document.getElementsByClassName("cart-overlay")[0].style.display = "none";
                 return;
             }
             el.style.opacity = op;
             op -= 0.1;
             setTimeout (func, 50);
         }, 50);
            }
    }
// основная программа
   let GoodsListClass1 = new GoodsListClass(), 
        CartList1 = new CartList(),
        id = 0;
    GoodsListClass1.addfullGods(goods); // добавление списка товаров
    GoodsListClass1.renderGoodsList(GoodsListClass1.goods); // вывод товаров на страницу
    GoodsListClass1.fetchGoods()
    .then(() => console.log(GoodsListClass1.fetchGoods()))
    
  