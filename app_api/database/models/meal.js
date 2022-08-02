const mongoose = require('mongoose');

// define the meal schema
const mealSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true},
    image: { type: String, required: true },
    description: { type: String, required: true }
});
module.exports = mongoose.model("meals", mealSchema);