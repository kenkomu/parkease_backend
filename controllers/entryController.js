const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.logEntry = async (req, res) => {
    const { plate } = req.body;
    if (!plate) return res.status(400).json({ error: 'Plate number required' });

    try {
        const log = await prisma.vehicleLog.create({
            data: { plate }
        });
        console.log(`Vehicle ${plate} entered at ${log.timestamp}`);
        res.status(201).json({ message: 'Entry logged', plate, timestamp: log.timestamp });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to log entry' });
    }
};
