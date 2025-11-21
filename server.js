const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();

// Serve static files from Activity #12
app.use(express.static(path.join(__dirname, "Activity #12")));

app.get("/joke", async (req, res) => {
  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch joke" });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));