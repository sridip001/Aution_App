const validateAuction = (req, res, next) => {
  const { item, startingPrice, duration } = req.body;

  if (!item || !startingPrice || !duration) {
    return res.status(400).json({ message: "All fields are required" });
  }
  if (startingPrice <= 0) {
    return res.status(400).json({ message: "Starting price must be greater than zero" });
  }

  next();
};

module.exports = validateAuction;
