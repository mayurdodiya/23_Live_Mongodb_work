const mongoose = require('mongoose');

const Comment = new mongoose.Schema({
    email: { type: String },
    password: { type: String }
  });

  const user_model = mongoose.model('User-register',Comment);
  module.exports = user_model;