//app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const entryRoutes = require('./routes/entryRoutes');
const exitRoutes = require('./routes/exitRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const barrierRoutes = require('./routes/barrierRoutes');
const mpesaRoutes = require('./routes/mpesaRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/entry', entryRoutes);
app.use('/api/exit', exitRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/barrier', barrierRoutes);
app.use('/api/mpesa', mpesaRoutes);
app.use('/api', mpesaRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to ParkEase API!');
});

module.exports = app;
