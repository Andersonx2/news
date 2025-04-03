const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const newsRoutes = require("./src/routes/newsRoutes");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", newsRoutes);

// Remova o app.listen(), pois a Vercel já gerencia isso
module.exports = app;
