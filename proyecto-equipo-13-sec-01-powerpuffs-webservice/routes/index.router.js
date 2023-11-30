const express = require ("express");
const router = express.Router();

const articleRouter = require("./article.router");
const authRouter = require ("./auth.router");

router.use("/auth", authRouter);
router.use("/article", articleRouter);


module.exports = router;