const axios = require('axios');
const moment = require('moment-timezone');
const { getAccessToken } = require('./mpesaAuth');
require('dotenv').config();

const baseURL = 'https://sandbox.safaricom.co.ke';

async function stkPush(phone, amount, accountReference = 'Parking', transactionDesc = 'Parking Fee') {
    const accessToken = await getAccessToken();
    const timestamp = moment().tz('Africa/Nairobi').format('YYYYMMDDHHmmss');

    const shortcode = process.env.MPESA_SHORTCODE.trim();
    const passkey = process.env.MPESA_PASSKEY.trim();

    const password = Buffer.from(
        `${shortcode}${passkey}${timestamp}`
    ).toString('base64');

    const payload = {
        BusinessShortCode: shortcode,
        Password: password,
        Timestamp: timestamp,
        TransactionType: 'CustomerPayBillOnline',
        Amount: amount,
        PartyA: phone, // Customer phone number e.g. 2547XXXXXXXX
        PartyB: shortcode,
        PhoneNumber: phone,
        CallBackURL: process.env.MPESA_CALLBACK_URL,
        AccountReference: accountReference,
        TransactionDesc: transactionDesc
    };

    console.log('📤 STK Push Payload:', payload);

    try {
        const response = await axios.post(
            `${baseURL}/mpesa/stkpush/v1/processrequest`,
            payload,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }
        );
        console.log('✅ STK Push Initiated:', response.data);
        return response.data;
    } catch (error) {
        console.error('❌ STK Push Error:', error.response?.data || error.message);
        throw error;
    }
}

module.exports = { stkPush };
