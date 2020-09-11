const { Schema, model } = require('mongoose');

const tweet = new Schema({
  username: {
    type: String,
    required: true,
    maxlength: [16, 'Name is too long'],
    minlength: [3, 'Name is too short'],
  },
  tweet: {
    type: String,
    required: true,
    maxlength: [280, 'Tweet is too long'],
    minlength: [1, 'Tweet is too short'],
  },
  timestamp: {
    type: Number,
    required: true,
    default: Date.now(),
  },
});

module.exports = model('Tweet', tweet);
