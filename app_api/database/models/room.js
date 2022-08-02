const mongoose = require('mongoose');

// define the room schema
const roomSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true},
    rate: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
});
module.exports = mongoose.model("rooms", roomSchema);