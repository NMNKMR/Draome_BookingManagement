const {Customer, Booking} = require("../model/droameModel");

//Define a route for get Customer details
var getAllCustomers = (req, res) => {
  Customer.find()
  .then((response)=> {
    res.send(response);
  }).catch((err)=> {
    console.log(err);
    return res.status(500).send('Internal server error');
  })
};

// Define a route for creating a customer
var addCustomer = (req, res) => {
  const { customer_id, customer_name, email, phone_number, bookings} = req.body;
  const customer = new Customer({ customer_id, customer_name, email, phone_number, bookings });
  customer.save()
  .then((savedCustomer)=> res.send(savedCustomer))
  .catch((err) => {
      console.log(err);
      return res.status(500).send('Internal server error');
    });
};

// Define a route for updating a customer
var editCustomer = (req, res) => {
  const { customer_id, customer_name, email, phone_number, bookings } = req.body;
  Customer.findByIdAndUpdate(req.params.id, { customer_id, customer_name, email, phone_number, bookings }, { new: true }, (err, updatedCustomer) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Internal server error');
    }
    res.send(updatedCustomer);
  });
};

// Define a route for deleting a customer
var deleteCustomer = (req, res) => {
  Customer.findOneAndDelete({"customer_id": req.params.id})
  .then((deletedCustomer)=> {
    res.send(deletedCustomer);
  })
  .catch((err)=> {
      console.log(err);
      return res.status(500).send('Internal server error');
  });
};

//Define a route for get all Bookings
var getAllBookings = (req, res) => {
  Booking.find()
  .then((response)=> {
    res.send(response);
  }).catch((err)=> {
    console.log(err);
    return res.status(500).send('Internal server error');
  })
}

// Define a route for creating a booking
var addBooking = async (req, res) => {
  const { booking_id, location_id, drone_shot_id, created_time, customer_id, status } = req.body;
  const booking = new Booking({booking_id, location_id, drone_shot_id, created_time, customer_id, status });
  await booking.save()
  .then( async (savedBooking)=> {
    await Customer.find({"customer_id": customer_id})
    .then((customer)=> {
      customer.bookings.push(savedBooking);
      customer.save()
      .then((savedCustomer)=> {
        res.send(savedCustomer);
      })
      .catch((err)=> {
        console.log(err);
        return res.status(500).send('Internal server error');
      })
    })
    .catch((err)=> {
      console.log(err);
      return res.status(500).send('Internal server error');
    })      
  })
  .catch((err)=> {
    console.log(err);
    return res.status(500).send('Internal server error');
  });
};

module.exports = {getAllCustomers, addCustomer, editCustomer, deleteCustomer, getAllBookings, addBooking};