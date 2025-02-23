const mongoose = require("mongoose");

const AuctionSchema = new mongoose.Schema({
  title: String,
  description: String,
  startingPrice: Number,
  currentPrice: Number,
  bids: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bid" }],
  createdAt: { type: Date, default: Date.now },
  endsAt: { type: Date, required: true },
});

module.exports = mongoose.model("Auction", AuctionSchema);
