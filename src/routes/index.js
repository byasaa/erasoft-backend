const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const topicRouter = require("./topic");
const commentRouter = require("./comment");

router.use("/auth", authRouter);
router.use("/topic", topicRouter);
router.use("/comment", commentRouter);

module.exports = router;
