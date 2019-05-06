const express = require ('express');
const fs = require ('fs');
const app = express ();
app.use (express.json ()); //Определение JSON
app.use ('/', express.static ('public'));

app.get ('/api/products', (req, res) => {
    fs.readFile ('server/db/products.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus (404, JSON.stringify({result: 0, text: err}));
        } else {
            res.send (data);
        }
    })
});

app.get ('/api/cart', (req, res) => {
    fs.readFile ('server/db/userCart.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus (404, JSON.stringify({result: 0, text: err}));
        } else {
            res.send (data);
        }
    })
});

const handler = require ('./handler');


app.post ('/api/cart', (req, res) => {
    handler (req, res, 'add', 'server/db/userCart.json');
    console.log('Добавление');
});

app.post('/api/updateCart', (req, res) => {
    fs.readFile('server/db/userCart.json', 'utf-8', (err, data) => {
        if (err) {
            res.send('{"result": 0}');
        }
        let cart = data;
        cart.contents = req.body;
        console.log(cart);
        /*fs.writeFile('cart.json', JSON.stringify(cart), (err) => {
            if(err) {
                res.send('{"result": 0}');
            } else {
                res.send('{"result": 1}');
            }
            // console.log('Скрипт выполнен: товар добавлен в массив');
        });*/
    });
});

/*app.post('/api/updateCart', (req, res) => {
    fs.readFile('server/db/userCart.json', 'utf-8', (err, data) => {
        if(err) {
            res.send('{"result": 0}');
        }
        console.log(data);
        fs.writeFile('cart.json', JSON.stringify(cart1), (err) => {
            if(err) {
                res.send('{"result": 0}');
            } else {
                res.send('{"result": 1}');
            }
            // console.log('Скрипт выполнен: товар добавлен в массив');
        });
    });
)}*/


/*app.delete ('/api/updateCart', (req, res) => {
    handler (req, res, 'del', 'server/db/userCart.json');
    сonsole.log('Удаление...');
});*/


app.put ('/api/cart/:id', (req, res) => {
    handler (req, res, 'change', 'server/db/userCart.json');
});

app.put ('/api/UpdateCart/:id', (req, res) => {
    handler (req, res, 'changeDel', 'server/db/userCart.json');
});



app.listen (3000, () => (console.log('Сервер запущен...')));



//В экспрессе мы получаем особые методы отлова запросов
//
// app.get ();
// app.post ();
// app.put ();
// app.delete ();
