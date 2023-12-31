const { Queue } = require("bullmq");

const queue = new Queue("learn-queue", {
  connection: {
    host: "127.0.0.1",
    port: "6379",
  },
});

const init = async () => {
  const res = await queue.add("email", {
    to: "shihab4t@gmail.com",
    from: "hello@37nerds.com",
    subject: "Welcome Message",
    body: "Welcome to our application",
  });
  console.log("email added to queue: ", res.id);
};

init();
