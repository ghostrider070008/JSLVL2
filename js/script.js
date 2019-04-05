"use strict";
const goods = [
    {title: 'Ноутбук Asus X540UA-DM597T', price: '31200&#8381;', src: '../img/catalog/nout_asusx540UA.jpg'},
    {title: 'Ноутбук Asus X756UA-T4613D', price: '34300&#8381;', src: '../img/catalog/nout_asusx756ua.jpg'},
    {title: 'Ноутбук Asus X405UA-EB920T', price: '34300&#8381;', src: '../img/catalog/nout_asusx405UA.jpg'},
    {title: 'Ноутбук Asus X405UA-EB920T', price: '34300&#8381;', src: '../img/catalog/nout_asusx405UA.jpg'},
    ];``
    const renderGoodsItem = (title, price) => {
        return `<div class="goods-item"><h2>${title}</h2><p>${price}</div>`;
    };

    const renderGoodsList = (list) => {
        let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
        document.querySelector('.goods-list').innerHTML = goodsList;
    }
    //renderGoodsList(goods);