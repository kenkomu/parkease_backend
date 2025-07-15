const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.handleExit = async (req, res) => {
    const { plate, phone } = req.body;
    if (!plate || !phone) return res.status(400).json({ error: 'Plate and phone required' });

    try {
        const log = await prisma.vehicleLog.findFirst({
            where: { plate },
            orderBy: { timestamp: 'desc' } // get latest
        });

        if (!log) return res.status(404).json({ error: 'Vehicle not found' });

        if (log.paid) {
            console.log(`Vehicle ${plate} has paid. Opening barrier.`);
            return res.json({ message: 'Payment verified. Barrier opened.' });
        }

        // Trigger M-Pesa STK Push (mock for now)
        const amount = 100; // example fixed fee
        console.log(`Sending STK Push to ${phone} for KES ${amount}`);
        // Assume success
        res.json({ message: 'STK Push sent. Complete payment on your phone.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to process exit' });
    }
};
