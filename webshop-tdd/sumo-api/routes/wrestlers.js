const { Router } = require('express');
const router = new Router();
const fs = require('fs');

// Look into separating these into different entities
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
  } else {
    //If product doesn't exist
    fs.get('carts')
      .push(data)
      .write();
    response.status(200);
    response.json(data);
  }
});

module.exports = router;
