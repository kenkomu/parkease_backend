//routes/mpesaRoutes.js

const express = require('express');
const router = express.Router();
const { stkPush } = require('../services/mpesaStkPush');

// POST /api/mpesa/stkpush
router.post('/stkpush', async (req, res) => {
    const { phone, amount } = req.body;

    if (!phone || !amount) {
        return res.status(400).json({ error: 'Phone and amount are required' });
    }

    try {
        const response = await stkPush(phone, amount);
        res.json(response);
    } catch (err) {
        res.status(500).json({ error: 'Failed to initiate STK Push' });
    }
});
// routes/mpesaRoutes.js
router.post('/api/payment/callback', (req, res) => {
    console.log('📥 M-Pesa Callback:', req.body);
    res.sendStatus(200); // Acknowledge receipt
});

module.exports = router;
