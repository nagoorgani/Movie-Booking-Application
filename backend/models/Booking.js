const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
    movie: {
        type: 'string',
        required: true
    },
    date: {
        type: 'Date',
        required: true
    },
    seatNumber: {
        type: Number,
        required: true
    }
    user: {
        type: 'string',
        required: true
    }
})   
const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;