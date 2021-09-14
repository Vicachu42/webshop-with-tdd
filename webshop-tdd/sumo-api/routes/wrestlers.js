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

module.exports = router;
