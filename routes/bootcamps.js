const express = require('express');
const router = express.Router();
const bootcamps = require('../controllers/bootcamps');

router
  .route('/')
  .get(bootcamps.getBootcamps)
  .post(bootcamps.createBootcamp);

router
  .route('/:id')
  .get(bootcamps.updateBootcamp)
  .patch(bootcamps.updateBootcamp)
  .delete(bootcamps.deleteBootcamp);

module.exports = router;