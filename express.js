// Build a basic Express.js application with a route that returns a JSON response.
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

app.listen(3000, () => {
  console.log("express app running on port 3000");
});

// Create an Express middleware to log incoming requests.
app.use((req, res, next) => {
    console.log(`[${new Date()}] ${req.method} ${req.url}`);
    next();
});

// Implement route parameters in an Express application.
app.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  res.json({ userId });
});
