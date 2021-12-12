const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('../config/db');
const errorHandler = require('../middleware/error');

const app = express();
const pug = require('pug');
const packageInfo = require('../package.json');
const pkgVersion = packageInfo.version;

// Route Files
const bootcamps = require('../routes/bootcamps');

dotenv.config({ path: './config/config.env' });

// Connect to data store
connectDB();

app.use(express.json());

app.set('view engine', 'pug');
app.use('/static', express.static('/public'));

// Mount routers
app.use(`/api/${pkgVersion}/bootcamps`, bootcamps);



const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Middlewarez
if (NODE_ENV === 'development') {
  app.use(morgan('combined'));
}

app.use(errorHandler());

const server = app.listen(PORT, () => console.log(`Listening to port: ${PORT} Running in ${NODE_ENV} mode.`));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.error(`Error: ${err.message}`);
  // Close Server & exit
  server.close(() => process.exit(1));
});