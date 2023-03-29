const express = require('express');
const {getAllCustomers, addCustomer, editCustomer, deleteCustomer, addBooking, getAllBookings} = require('../controllers/operationController');
const router = express.Router();

router.get('/Customers', getAllCustomers);

router.post('/Customers', addCustomer);

router.post('/Bookings', addBooking);

router.put('/Customers/:id', editCustomer);

router.get('/Bookings', getAllBookings);

router.delete('/Customers/:id', deleteCustomer);

module.exports = router;
