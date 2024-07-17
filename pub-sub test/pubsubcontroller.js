const epxress = require("express");
const RedisConfig = require("./redisconfig");

const sendMessageToRedis = async (req, res) => {
  try {
    const { message } = req.body;
    const redisConfig = new RedisConfig();
    redisConfig.produce("nathan123", message);

    res.status(200).json({
      status: "ok!",
      message: "Message successfully send!",
    });
  } catch (err) {
    console.error(err);
  }
};

const controllers = { sendMessageToRedis };

module.exports = controllers;
