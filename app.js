const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve the QR code scanning HTML page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// API Endpoint to send the Telegram user ID to the webpage
app.get("/api/get-user-id", (req, res) => {
  // Here we simulate getting the user ID from a request, Telegram, or database
  const telegramUserId = req.query.telegramUserId || "unknown_user";

  // Send the user ID back to the client
  res.json({ userId: telegramUserId });
});

// Serve static files (if needed, like JavaScript or CSS)
app.use(express.static("public"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
