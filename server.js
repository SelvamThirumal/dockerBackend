const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Route
app.get('/', (req, res) => {
    res.send("Docker server running.....");
});

// MongoDB Connection
mongoose.connect("mongodb://mongo:27017/mydatabase")
.then(() => {
    console.log("✅ Connected to MongoDB");
})
.catch((error) => {
    console.error("❌ Error connecting to MongoDB:", error);
});

// Server
app.listen(3000, () => {
    console.log("🚀 Server is running on port 3000");
});