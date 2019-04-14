//запрос на сервер
const mathRandom = () =>{
let ran = Math.random()*100;
console.log(ran);
return Math.round(ran);
}

const makeGETRequest = (url, callback) => {
  let promise = new Promise((resolve, reject) => {
    var xhr;
  
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { 
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        let ran = mathRandom();
        if (ran <= 60){
          resolve(xhr.responseText);
        }
        else if (ran > 60 && (ran <= 80)){
         let status = 404;
          reject(status);
        }
        else if (ran > 80 ) {
          setTimeout((status) =>{
            status = 504;
            reject(status)
          }, 3000);
       /* let status = 504;
          reject(status);*/
        };
       // callback(xhr.responseText);
      }
    }
  
    xhr.open('GET', url, true);
    xhr.send();
  });
return promise;
};
//ссылка на файл заглушку
  const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
// класс товара
class GoodsItem {
    constructor (product_name, price) {
    this .product_name = product_name;
    this .price = price;
    }
    render() {
    return `<div
    class="goods-item"><h3> ${ this .product_name} </h3><p> ${ this .price} </p></div>` ;
    }
    }
// класс список товара
class GoodsList {
        constructor () {
        this .goods = [];
        }
        fetchGoods(cb) {
            makeGETRequest(`${API_URL}/catalogData.json`)
              .then((goods) => {this.goods = JSON.parse(goods);
                console.log(`${goods}`)})
              .then(() => {this.render()})
              .catch((err) => {
                  console.error(`Ошибка: ${err}`)
              })  

           /* this .goods = [
            { title : 'Shirt' , price : 150 },
            { title : 'Socks' , price : 50 },
            { title : 'Jacket' , price : 350 },
            { title : 'Shoes' , price : 250 },
            ];*/
        }
        render() {
            let listHtml = '' ;
            this .goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodItem.render();
            });
            document .querySelector( '.goods-list' ).innerHTML = listHtml;
            }
        }

        const list = new GoodsList();
        list.fetchGoods(() => {
          list.render();
        });
        

    