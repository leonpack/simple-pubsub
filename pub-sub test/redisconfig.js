const { Redis } = require("ioredis");

class RedisConfig {
  constructor() {
    this.redis = new Redis({
      host: "your-host",
      port: 1234,
      password: "your pass",
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
