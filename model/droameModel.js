const mongoose = require('mongoose');

// // Define a booking schema
const bookingSchema = new mongoose.Schema({
    booking_id: String,
    location_id: String,
    drone_shot_id: String,
    created_time: Date,
    customer_id: String,
    status: String
});

  
// Define a customer schema
const customerSchema = new mongoose.Schema({
    customer_id: String,
    customer_name: String,
    email: String,
    phone_number: String,
    bookings: [bookingSchema]
});

// Define a customer model
const Customer = mongoose.model('Customers', customerSchema);
  
// Define a booking model
const Booking = mongoose.model('Bookings', bookingSchema);

module.exports = {Customer, Booking};