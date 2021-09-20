const { Router } = require('express');
const router = new Router();

const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('database.json');
const database = new lowdb(adapter);

const errorAdd = new Error('This product is already in your cart');
const errorDelete = new Error('This product is not in your cart');

router.get('products/:id', async (req, res) => {
  const productsID = Number(req.params.id);
  const data = database
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
  const data = database.get('products').value();
  res.json(data);
});

router.get('/carts', async (req, res) => {
  const data = database.get('carts').value();
  res.json(data);
});

router.post('/carts/:id', async (req, res) => {
  const productsID = Number(req.params.id);
  const data = database
    .get('products')
    .find({ id: productsID })
    .value();
  const cartsIndex = database
    .get('carts')
    .find({ id: productsID })
    .value();

  if (cartsIndex !== undefined) {
    //If product already exists
    console.log('This product is already in your cart');
    res.status(418);
    res.json({ error: errorAdd.message });
  } else {
    //If product doesn't exist
    database
      .get('carts')
      .push(data)
      .write();
    res.status(200);
    res.json({ result: data });
  }
});

// router.delete('carts/:id'),
//   async (req, res) => {
//     const productsID = Number(request.params.id);
//     const cartsIndex = database
//       .get('carts')
//       .find({ id: productsID })
//       .value();

//     if (cartsIndex !== undefined) {
//       //If product is in the cart
//       database
//         .get('carts')
//         .remove(cartsIndex)
//         .write();
//       response.status(200);
//       response.json({ success: true });
//     } else {
//       //If product isn't in the cart
//       console.log('This product is not in your cart');
//       response.status(418);
//       response.json(errorDelete.message);
//     }
//   };

module.exports = router;
