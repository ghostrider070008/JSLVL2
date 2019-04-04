"use strict";
const goods = [
    {title: 'Shirt', price: '150 &#8381;'},
    {title: 'Socks', price: '50 &#8381;'},
    {title: 'Jacket', price: '350 &#8381;'},
    {title: 'Shoes', price: '250 &#8381;'},
    ]
    const renderGoodsItem = (title, price) => {
        return `<div class="goods-item"><h2>${title}</h2><p>${price}</div>`;
    }

    const renderGoodsList = (list) => {
        let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
        document.querySelector('.goods-list').innerHTML = goodsList.join('');
    }
    renderGoodsList(goods);