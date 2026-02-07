const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,                // Ensures no duplicate users
    match: /.+\@.+\..+/,         // Validates email format
    index: true                  // Helps in faster search
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);



/*const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true // prevents duplicate registrations
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
// This model defines the structure of the User document in MongoDB.
// It includes fields for email and password, both of which are required. 
*/