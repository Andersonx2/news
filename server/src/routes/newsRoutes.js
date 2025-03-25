const express = require("express");
const { createNews, editNews, deleteNews } = require("../controllers/newsController");

const router = express.Router();

router.post("/news", createNews);
router.put("/news/:id", editNews);
router.delete("/news/:id", deleteNews);

module.exports = router;
