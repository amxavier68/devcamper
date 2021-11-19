const express = require('express');
const dotenv = require('dotenv');

const app = express();
const pug = require('pug');

dotenv.config({ path: './config/config.env' });

app.use(express.json());
app.set('view engine', 'pug');

const pugTest = pug.render('p Hello World!');

app.get('/', (req,res) => {
  res.status(200).send(pugTest);
});

app.get('/test', (req,res) => {
  res.status(200).send(pugTest);
});

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.listen(PORT, () => console.log(`Listening to port: ${PORT} Running in ${NODE_ENV} mode.`));