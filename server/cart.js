let add = (cart, req) => {
    cart.contents.push (req.body);
    console.log('Добавление товара');
    return JSON.stringify (cart, null, 4);

}

let del = (cart, req) => {
    console.log(`Удаление товара, ${req.body}`);
    return JSON.stringify (cart, null, 4);
}

let change = (cart, req) => {
    let find  = cart.contents.find (el => el.id_product === +req.params.id);
    find.quantity += req.body.quantity;
    console.log(req.body);
    return JSON.stringify (cart, null, 4);
}

let changeDel = (cart, req) => {
    let find  = cart.contents.find (el => el.id_product === +req.params.id);
    find.quantity -= req.body.quantity;
    console.log(`req.body.quantity=${req.body.quantity}`);
    return JSON.stringify (cart, null, 4);
}

module.exports = {
    add, del, change, changeDel
}