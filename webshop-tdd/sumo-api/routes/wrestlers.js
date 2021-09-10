const { Router } = require('express');
const router = new Router();
const fs = require('fs');

router.get('/products', async (req, res) => {
  const data = fs.createReadStream('data/rikishi.json');
  data.pipe(res);
});

module.exports = router;
