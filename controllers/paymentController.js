const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.paymentCallback = async (req, res) => {
    const { Body } = req.body;
    const stkCallback = Body.stkCallback;

    console.log('Payment Callback:', JSON.stringify(stkCallback));

    if (stkCallback.ResultCode === 0) {
        // Success
        const metadata = stkCallback.CallbackMetadata;
        const plate = metadata.Item.find(i => i.Name === 'AccountReference').Value;

        await prisma.vehicleLog.updateMany({
            where: { plate, paid: false },
            data: { paid: true }
        });

        console.log(`Payment received for ${plate}`);
    } else {
        console.log('Payment failed or cancelled');
    }

    res.json({ message: 'Callback received' });
};
