const express = require('express');
const cors = require('cors');
const app = express();

const rikishiRouter = require('./routes/wrestlers');
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/api', rikishiRouter);

app.listen(3000, () => console.log(`Server has started on port ${PORT}`));
