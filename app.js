const express = require('express');

//Controllers
const { globalErrorHandler } = require('./controllers/error.controller')
//Routes
const { usersRouter } = require('./routes/users.routes')
const { productsRouter } = require('./routes/products.routes')
const { cartRouter } = require('./routes/cart.routes')

//Init express app
const app = express();

//Enable express app to receive JSON data
app.use(express.json());

//Define endpoints
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/products', productsRouter);
app.use('/api/v1/cart', cartRouter);

//Global error handler
app.use(globalErrorHandler);

//Catch non-existing endpoints
app.all('*', (req, res) => {
    res.status(404).json({
        status: 'error',
        message: `${req.method} ${req.url} does not exists in our server`,
    });
});


module.exports = { app }


