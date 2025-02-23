require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/auctions", require("./routes/auction"));
app.use("/api/bids", require("./routes/bid"));


// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// WebSocket Setup
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("New WebSocket Connection:", socket.id);

  socket.on("placeBid", (data) => {
    io.emit("newBid", data); // Broadcast new bid to all clients
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// API Routes
app.get("/", (req, res) => {
  res.send("Auction Backend Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);


const logger = require("./middleware/logger");
app.use(logger);

