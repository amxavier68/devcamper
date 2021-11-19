const express = require('express');
const dotenv = require('dotenv');

const app = express();
const pug = require('pug');
const packageInfo = require('../package.json');

// Route Files
const bootcamps = require('../routes/bootcamps');

dotenv.config({ path: './config/config.env' });

app.use(express.json());
app.set('view engine', 'pug');

app.use('/static', express.static('/public'));

const pkgVersion = packageInfo.version;

// Mount routers
app.use(`/api/${pkgVersion}/bootcamps`, bootcamps);

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.listen(PORT, () => console.log(`Listening to port: ${PORT} Running in ${NODE_ENV} mode.`));