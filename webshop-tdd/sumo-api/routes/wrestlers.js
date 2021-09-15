const { Router } = require('express');
const router = new Router();
const fs = require('fs');

const errorAdd = new Error('This product is already in your cart');
const errorDelete = new Error('This product is not in your cart');

router.get('products/:id', async (req, res) => {
  const productsID = Number(req.params.id);
  const data = fs
    .get('products')
    .find({ id: productsID })
    .value();

  if (data !== undefined) {
    response.status(200);
    response.send(data);
  } else {
    response.status(418);
    response.send();
  }
});

router.get('/products', async (req, res) => {
  const data = fs.createReadStream('data/rikishi.json');
  data.pipe(res);
});

router.get('/carts', async (req, res) => {
  const data = fs.createReadStream('data/rikishi.json');
  data.pipe(res);
});

router.post('/carts/:id', async (req, res) => {
  const productsID = Number(req.params.id);
  const data = fs
    .get('products')
    .find({ id: productsID })
    .value();
  const cartsIndex = fs
    .get('carts')
    .find({ id: productsID })
    .value();

  if (cartsIndex !== undefined) {
    //If product already exists
    console.log('This product is already in your cart');
    response.status(418);
    response.json(errorAdd.message);
  } else {
    //If product doesn't exist
    fs.get('carts')
      .push(data)
      .write();
    response.status(200);
    response.json(data);
  }
});

router.delete('carts/:id'),
  async (req, res) => {
    const productsID = Number(request.params.id);
    const cartsIndex = fs
      .get('carts')
      .find({ id: productsID })
      .value();

    if (cartsIndex !== undefined) {
      //If product is in the cart
      fs.get('carts')
        .remove(cartsIndex)
        .write();
      response.status(200);
      response.json({ success: true });
    } else {
      //If product isn't in the cart
      console.log('This product is not in your cart');
      response.status(418);
      response.json(errorDelete.message);
    }
  };

module.exports = router;
