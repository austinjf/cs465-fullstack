const mongoose = require('mongoose');
const model = mongoose.model('rooms');

// GET: /rooms --- lists all the rooms
const roomsList = async(req, res) => {
    model
        .find({})
        .exec((err, rooms) => {
            if (!rooms) {
                return res
                    .status(404)
                    .json({ "message": "rooms not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(rooms);
            }
        });
};

module.exports = {
    roomsList
};