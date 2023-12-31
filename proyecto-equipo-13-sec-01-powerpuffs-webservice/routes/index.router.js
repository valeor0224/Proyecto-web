const express = require ("express");
const router = express.Router();

const articleRouter = require("./article.router");
const authRouter = require ("./auth.router");
const eventRouther = require("./event.router");
const petRouther = require("./pet.router");

router.use("/auth", authRouter);
router.use("/article", articleRouter);
router.use("/event", eventRouther);
router.use("/pet", petRouther);

module.exports = router;