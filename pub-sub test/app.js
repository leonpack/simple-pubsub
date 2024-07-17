const express = require("express");
const app = express();
const controllers = require("./pubsubcontroller");
const RedisConfig = require("./redisconfig");

app.use(express.json({}));

app.post("/api/send", controllers.sendMessageToRedis);
const redisConfig = new RedisConfig();
redisConfig.consume("nathan123", (message) => {
  console.log("receive message:", message + " from consumer 1");
});

app.listen(8000, () => console.log("Server is running on port 8000"));
