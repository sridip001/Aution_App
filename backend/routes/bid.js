const express = require("express");
const Bid = require("../models/Bid");
const Auction = require("../models/Auction");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { auctionId, userId, amount } = req.body;
    const bid = new Bid({ auction: auctionId, user: userId, amount });
    await bid.save();

    await Auction.findByIdAndUpdate(auctionId, { currentPrice: amount });

    res.status(201).json(bid);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
