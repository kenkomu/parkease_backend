const vehicleLogs = [];

const addLog = (plate, timestamp) => {
    vehicleLogs.push({ plate, timestamp, paid: false });
};

const getLog = (plate) => {
    return vehicleLogs.find(log => log.plate === plate);
};

const markAsPaid = (plate) => {
    const log = getLog(plate);
    if (log) log.paid = true;
};

module.exports = { addLog, getLog, markAsPaid };
