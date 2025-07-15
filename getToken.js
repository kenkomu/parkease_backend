//getToken.js

const axios = require('axios');

const consumerKey = 'Q1KEgaSEJSeFx5Hvh0M1HrGc2Be3tstfQQXswHnAJVJrZAaJ';
const consumerSecret = 'AO02ZkvAz3a3HAAHnodLhCxdZulTymKF4G7SGbRzAqx1hQJmrpzqRUdLatwWrP7a';

const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');

async function getToken() {
    try {
        const res = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
            headers: {
                Authorization: `Basic ${auth}`
            }
        });
        console.log('✅ Access Token:', res.data.access_token);
    } catch (err) {
        console.error('❌ Failed to get token:', err.response?.data || err.message);
    }
}

getToken();
