##Droame Booking Management

This project is a web application that allows operators to manage Customers and their Bookings for drone shots. It is built using Node.js, Express.js, and MongoDB for the backend. The backend API allows operators to create, read, update, and delete both Customers and Bookings.

##Backend Structure
The backend is built using Node.js and Express.js with MongoDB as the database. The project is organized using the following file structure:

DROAME_TASK/
  |-controllers/
     |- operationController.js
  |- models/
     |- draomeModel.js
  |- routes/
     |- operationRoutes.js
  |- index.js
  |- package.json
  |- package-lock.json

The models/ directory contains the Mongoose schema and models for customer and booking. The routes/ directory contains the API endpoints for customer and booking. The index.js file is the entry point for the application.

##Backend API Endpoints
The backend API has the following endpoints:

##Customers
GET /droame/Customers - Get all Customers
GET /droame/Customers/:id - Get a single customer by ID
POST /droame/Customers - Create a new customer
PUT /droame/Customers/:id - Update an existing customer by ID
DELETE /droame/Customers/:id - Delete a customer by ID

##Bookings
GET /droame/Bookings - Get all Bookings
GET /droame/Bookings/:id - Get a single booking by ID
POST /droame/Bookings - Create a new booking
PUT /droame/Bookings/:id - Update an existing booking by ID
DELETE /droame/Bookings/:id - Delete a booking by ID
How to run the application

Install dependencies: npm install
Start the server: npm start
Use Postman or any other API development tool to test the endpoints

##Apology
Unfortunately, I am not able to provide the frontend code as requested. However, the backend API is fully functional and can be integrated with any frontend framework or technology of your choice.

Please let me know if you have any questions or need further assistance.