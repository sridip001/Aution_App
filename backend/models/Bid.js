const mongoose = require("mongoose");

const BidSchema = new mongoose.Schema({
  auction: { type: mongoose.Schema.Types.ObjectId, ref: "Auction" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  amount: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Bid", BidSchema);
