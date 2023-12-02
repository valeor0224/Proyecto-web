const express = require ("express");
const router = express.Router();

const articleRouter = require("./article.router");
const authRouter = require ("./auth.router");
const eventRouther = require("./event.router");

router.use("/auth", authRouter);
router.use("/article", articleRouter);
router.use("/event", eventRouther);

module.exports = router;