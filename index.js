const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const port = 3000;
const hostname = 'http://localhost';

app.use(bodyParser.json());

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);


app.listen(3000, () => {console.log(`Server started at ${hostname}:${port}`)});