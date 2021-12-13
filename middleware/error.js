const { Error } = require("mongoose");

const errorHandler = (err, req, res, next) => {
  // Log to console for the dev
  console.error('Error Stack: ', err.stack);


  console.log(err.name);
  console.log({...err});
  console.log(err.message);

  // console.error({ ...err });
  res.status(err.statusCode || 500).json({ 
    success: false, 
    error: err.message || 'Server Error'});
}

module.exports = errorHandler;