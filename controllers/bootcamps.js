// @desc    Retrieve all bootcamps
// @route   GET /api/1.0.0/bootcamps 
// @access  Public
exports.getBootcamps = (req,res, next) => {
  res.status(200).render('index', { 
    title: 'DevCamper', 
    header: 'Welcome to DevCamper',
    content: 'This route shows all bootcamps'
    
  });
  next();
}

// @desc    Retrieve single bootcamp
// @route   GET /api/1.0.0/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).render('newBootcamp',{ 
    title: 'DevCamper', 
    header: 'This is the create bootcamp route', 
    content: 'Adding new bootcamp'
  })
  next();
}

// @desc    Create new bootcamp
// @route   POST /api/1.0.0/bootcamps
// @access  Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).render('newBootcamp', { 
    title: 'DevCamper', 
    header: 'This is the create bootcamp route', 
    content: 'Adding new bootcamp'
  });
  next();
}

// @desc    Update bootcamp
// @route   PATCH /api/1.0.0/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ 
    success: true, 
    message: 'This is the patch bootcamp route', 
    data: { id: req.params.id }
  })
  next();
}

// @desc    Delete bootcamp
// @route   DELETE /api/1.0.0/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ 
    success: true, 
    message: 'This is the delete bootcamp route', 
    data: { id: req.params.id }
  })
  next();
}