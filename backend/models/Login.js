const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
    index: true
  },
  loginTime: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Login', loginSchema);





/*// for storing actuaaly logged in user details 
const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
  email: String,
  loginTime: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Login', loginSchema);
*/