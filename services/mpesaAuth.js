//services/mpesaAuth.js

const axios = require('axios');
require('dotenv').config();

const baseURL = 'https://sandbox.safaricom.co.ke';
const consumerKey = process.env.MPESA_CONSUMER_KEY;
const consumerSecret = process.env.MPESA_CONSUMER_SECRET;

async function getAccessToken() {
    const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');

    try {
        const response = await axios.get(`${baseURL}/oauth/v1/generate?grant_type=client_credentials`, {
            headers: {
                Authorization: `Basic ${auth}`
            }
        });
        console.log('✅ Access Token:', response.data.access_token);
        return response.data.access_token;
    } catch (error) {
        console.error('❌ Failed to get access token:', error.response?.data || error.message);
        throw error;
    }
}

module.exports = { getAccessToken };
