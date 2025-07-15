const axios = require('axios');
require('dotenv').config();

const getToken = async () => {
    const url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
    const { MPESA_CONSUMER_KEY, MPESA_CONSUMER_SECRET } = process.env;
    const auth = Buffer.from(`${MPESA_CONSUMER_KEY}:${MPESA_CONSUMER_SECRET}`).toString('base64');

    const res = await axios.get(url, {
        headers: { Authorization: `Basic ${auth}` }
    });
    return res.data.access_token;
};

exports.stkPush = async (phone, amount, plate) => {
    const token = await getToken();
    const timestamp = new Date().toISOString().replace(/[-T:.Z]/g, '').slice(0, 14);
    const password = Buffer.from(`${process.env.MPESA_SHORTCODE}${process.env.MPESA_PASSKEY}${timestamp}`).toString('base64');

    const body = {
        BusinessShortCode: process.env.MPESA_SHORTCODE,
        Password: password,
        Timestamp: timestamp,
        TransactionType: 'CustomerPayBillOnline',
        Amount: amount,
        PartyA: phone,
        PartyB: process.env.MPESA_SHORTCODE,
        PhoneNumber: phone,
        CallBackURL: process.env.MPESA_CALLBACK_URL,
        AccountReference: plate,
        TransactionDesc: `Parking fee for ${plate}`
    };

    const res = await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', body, {
        headers: { Authorization: `Bearer ${token}` }
    });

    return res.data;
};
