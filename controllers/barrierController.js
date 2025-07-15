

exports.openBarrier = (req, res) => {
    const { plate } = req.body;
    console.log(`Barrier opened for vehicle ${plate}`);
    res.json({ message: `Barrier opened for ${plate}` });
};
