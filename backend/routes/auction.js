const express = require("express");
const Auction = require("../models/Auction");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const auction = new Auction(req.body);
    await auction.save();
    res.status(201).json(auction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const auctions = await Auction.find().populate("bids");
    res.json(auctions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
