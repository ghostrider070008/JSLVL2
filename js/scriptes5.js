"use strict";
/*описание переменной с характеристиками товара*/
const goods = [
    {title: 'Ноутбук Asus X540UA-DM597T', price: '31200&#8381;', src: '../img/catalog/nout_asusx540UA.jpg'},
    {title: 'Ноутбук Asus X756UA-T4613D', price: '34300&#8381;', src: '../img/catalog/nout_asusx756ua.jpg'},
    {title: 'Ноутбук Asus X405UA-EB920T', price: '34300&#8381;', src: '../img/catalog/nout_asusx405UA.jpg'},
    {title: 'Компьютер Office 136', price: '24100&#8381;', src: '../img/catalog/office136.jpg'},
    {title: 'Компьютер Office 140 Pro', price: '33600&#8381;', src: '../img/catalog/office140pro.jpg'},
    {title: 'Компьютер Office 150 Pro', price: '40500&#8381;', src: '../img/catalog/office150pro.jpg'},
    {title: 'Моноблок HP 24 24-f0029ur (4GS04EA)', price: '52000&#8381;', src: '../img/catalog/monoblocHP24.jpg'},
    {title: 'МФУ Brother DCP-1510R монохромное/лазерное', price: '11140&#8381;', src: '../img/catalog/mfuBrotherdcp-1510r.jpg'},
    {title: 'Монитор LG Flatron 29UM69G-B 29" gl.Black', price: '16800&#8381;', src: '../img/catalog/monitorLG29.jpg'},
    {title: 'Платформа Intel NUC Original', price: '37600&#8381;', src: '../img/catalog/platformIntel.jpg'},
    ];
/*Функция формирования товара */
    const renderGoodsItem = function (title, price,src) {
        var result = '<div class="goods-item"><h2 class="name-tovar">'+title+'</h2><img src="'+src+'"><p>'+price+'</p><div class="btn-buy-goods"></div></div>';
        return result;
    };
/*Функция добавления товара на страницу */
    const renderGoodsList = function (list) {
        let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.src));
        document.querySelector('.goods-list').innerHTML = goodsList.join('');
    }

    renderGoodsList(goods); // Вызов функции
/*Добавление очищающего дива */
    let div_cleaner = document.createElement('div');
        div_cleaner.className = "cleaner";
        document.querySelector('.goods-list').appendChild(div_cleaner);