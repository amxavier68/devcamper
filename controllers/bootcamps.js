const ErrorResponse = require('../utils/errorResponse');
const Bootcamp = require('../models/Bootcamp');

// @desc    Retrieve all bootcamps
// @route   GET /api/1.0.0/bootcamps 
// @access  Public
exports.getBootcamps = async (req, res, next) => {
  try {

    const bootcamps = await Bootcamp.find()

    res.status(200).json({ 
      success: true,
      results: bootcamps.length,
      data: bootcamps
    });
  } catch (err) {
    res.status(400).json({
      status: false
    });
  }
}

// @desc    Retrieve single bootcamp
// @route   GET /api/1.0.0/bootcamps/:id
// @access  Public
exports.getBootcamp = async (req, res, next) => {

  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return next(new ErrorResponse(`Bootcamp not found with id: ${req.params.id}`, 404));
    }

    res.status(200).json({ 
      success: true,
      data: bootcamp
    })
  } catch (err) {
    next(new ErrorResponse(`Bootcamp not found with id: ${req.params.id}`, 404));
  }
}

// @desc    Create new bootcamp
// @route   POST /api/1.0.0/bootcamps
// @access  Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);

    res
    .status(201)
    .json({
      status: true,
      data: bootcamp
    });
  } catch (err) {
    res.status(400).json({
      status: false
    });
  }
  
  
}

// @desc    Update bootcamp
// @route   PATCH /api/1.0.0/bootcamps/:id
// @access  Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!bootcamp) {
      return res.status(400).json({ success: false});
    }

    res.status(200).json({ 
      success: true, 
      data: bootcamp
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
}

// @desc    Delete bootcamp
// @route   DELETE /api/1.0.0/bootcamps/:id
// @access  Private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
  
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }
}