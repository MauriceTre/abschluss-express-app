const express = require("express");
const router = express.Router();
const guideController = require("../controllers/guideController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/guides", authMiddleware, guideController.getGuides);

module.exports = router;
