"use strict";
const goods = [
    {title: 'Ноутбук Asus X540UA-DM597T', price: '31200&#8381;', src: '../img/catalog/nout_asusx540UA.jpg'},
    {title: 'Ноутбук Asus X756UA-T4613D', price: '34300&#8381;', src: '../img/catalog/nout_asusx756ua.jpg'},
    {title: 'Ноутбук Asus X405UA-EB920T', price: '34300&#8381;', src: '../img/catalog/nout_asusx405UA.jpg'},
    {title: 'Компьютер Office 136', price: '24100&#8381;', src: '../img/catalog/office136.jpg'},
    {title: 'Компьютер Office 140 Pro', price: '33600&#8381;', src: '../img/catalog/office140pro.jpg'},
    {title: 'Компьютер Office 140 Pro', price: '33600&#8381;', src: '../img/catalog/office140pro.jpg'},
    {title: 'Компьютер Office 140 Pro', price: '33600&#8381;', src: '../img/catalog/office140pro.jpg'},
    {title: 'Компьютер Office 140 Pro', price: '33600&#8381;', src: '../img/catalog/office140pro.jpg'},
    {title: 'Компьютер Office 140 Pro', price: '33600&#8381;', src: '../img/catalog/office140pro.jpg'},
    {title: 'Компьютер Office 140 Pro', price: '33600&#8381;', src: '../img/catalog/office140pro.jpg'},
    ];
    const renderGoodsItem = (title, price,src) => {
        return `<div class="goods-item"><h2 class="name-tovar">${title}</h2><img src="${src}"><p>${price}</p></div>`;
    };

    const renderGoodsList = (list) => {
        let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.src));
        document.querySelector('.goods-list').innerHTML = goodsList.join('');
    }
    renderGoodsList(goods);
    let div_cleaner = document.createElement('div');
        div_cleaner.className = "cleaner";
    document.querySelector('.goods-list').appendChild(div_cleaner);