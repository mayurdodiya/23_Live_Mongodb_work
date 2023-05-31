var express = require('express');
const user_model = require('../model/user_controller');
var router = express.Router();

// add user ----------------------------------------------------------------------
router.post('/', async function (req, res, next) {
  var data = await user_model.create(req.body);
  res.status(200).json({
    status: "Success",
    data
  })
});


// get user ----------------------------------------------------------------------
router.get('/get_all_data', async function (req, res, next) {
  var data = await user_model.find();
  res.status(200).json({
    status: "Success",
    data
  })
});

module.exports = router;
 