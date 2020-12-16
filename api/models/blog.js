const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true
  },
  blog: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Blog', BlogSchema);