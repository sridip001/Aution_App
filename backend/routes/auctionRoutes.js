const express = require("express");
const { createAuction, getAuctions, getAuctionById, placeBid } = require("../controllers/auctionController");
const authMiddleware = require("../middleware/authMiddleware");
const validateAuction = require("../middleware/validateAuction");

const router = express.Router();

// ✅ Create a new auction (Only authenticated users can post auctions)
router.post("/create", authMiddleware, validateAuction, createAuction);

// ✅ Get all auctions
router.get("/", getAuctions);

// ✅ Get a single auction by ID
router.get("/:id", getAuctionById);

// ✅ Place a bid on an auction (Only authenticated users can bid)
router.post("/:id/bid", authMiddleware, placeBid);

module.exports = router;
