const cart = require ('./cart');
const fs = require ('fs');

const actions = {
    add: cart.add,
    del: cart.del,
    change: cart.change,
    changeDel: cart.changeDel

};
let static = (req, res, action, file) =>{
    fs.readFile (file, 'utf-8', (err, data) => {
        console.log(data);
        if (err) {
            res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            let newStatic = actions[action](JSON.parse(data),req);
            /*fs.writeFile(file, newStatic, (err) => {
                if (err) {
                    res.sendStatus(404, JSON.stringify({result: 0, text: err}));
                } else {
                    res.send({result: 1, text: 'Success'})
                }
            })*/
        }
    })
}
module.exports = static;