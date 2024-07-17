const { Redis } = require("ioredis");

class RedisConfig {
  constructor() {
    this.redis = new Redis({
      host: "redis-16479.c252.ap-southeast-1-1.ec2.redns.redis-cloud.com",
      port: 16479,
      password: "5GkXt3GIXTxf7YQ3Q1NyXdF5nfO2Tt6b",
    });
  }

  async consume(channel, callback) {
    await this.redis.subscribe(channel);
    this.redis.on("message", async (ch, message) => {
      if (channel === ch) {
        await callback(message);
      }
    });
  }

  async produce(channel, message) {
    await this.redis.publish(channel, message);
  }
}

module.exports = RedisConfig;
