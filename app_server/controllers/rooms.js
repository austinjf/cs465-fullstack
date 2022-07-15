const fs = require('fs');
const roomsData = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

/* GET rooms view */
const rooms = (req, res) => {
    res.render('rooms', { title: 'Travlr Getaways - Rooms' , roomsData});
};

module.exports = {
    rooms
};