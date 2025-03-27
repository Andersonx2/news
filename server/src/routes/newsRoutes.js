const express = require("express");
const { createNews, editNews, deleteNews, listNews ,autorId} = require("../controllers/newsController");

const router = express.Router();

router.post("/news", createNews);
router.put("/news/:id", editNews);
router.delete("/news/:id", deleteNews);
router.get("/news", listNews);
router.get("/autorId", autorId);

module.exports = router;
