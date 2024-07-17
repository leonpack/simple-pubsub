const express = require("express");
const app = express();
const RedisConfig = require("./redisconfig");

app.use(express.json({}));

const redisConfig = new RedisConfig();
redisConfig.consume("nathan123", (message) => {
  console.log("receive message:", message + " from consumer 2");
});

app.listen(8001, () => console.log("Server is running on port 8001"));
