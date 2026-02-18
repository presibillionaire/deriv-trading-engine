require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Deriv Trading Engine Running 🚀");
});

app.post("/api/start-bot", (req, res) => {
  const { token, symbol } = req.body;

  console.log("Bot request received for:", symbol);

  res.json({
    status: "Bot started",
    symbol
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port 3000");
});

