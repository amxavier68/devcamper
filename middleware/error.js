const errorHandler = (err, req, res, next) => {
  // Log to console for the dev
  console.log(err.stack);

  return res.status(500).json({ success: false, error: err.message });
}

module.exports = errorHandler;