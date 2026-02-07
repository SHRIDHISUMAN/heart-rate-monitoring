const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    heartRate: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('History', historySchema);
// This code defines a Mongoose schema and model for a history collection in MongoDB.
// The schema includes two fields: heartRate (a required number) and timestamp (a date that defaults to the current date/time). 