let add = (cart, req) => {
    cart.contents.push (req.body);
    console.log('Добавление товара');
    console.log(req.body);
    return JSON.stringify (cart, null, 4);

}

let del = (cart, req) => {
    cart.contents.splice(cart.contents.indexOf(req.body), 1);
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
    return JSON.stringify (cart, null, 4);
}

module.exports = {
    add, del, change, changeDel
}