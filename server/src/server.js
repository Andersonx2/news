const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const newsRoutes = require("./routes/newsRoutes");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", newsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
