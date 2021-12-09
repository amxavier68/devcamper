// Custom Middleware

// @desc    Logs request to console
// @access  Dev mode only
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl} `);
  next();
}

module.exports = logger;