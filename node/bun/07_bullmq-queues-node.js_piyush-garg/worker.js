const { Worker } = require("bullmq");

const worker = new Worker(
  "learn-queue",
  async (job) => {
    console.log(`job recived: ${job.id}`);
    return new Promise((resolve) =>
      setTimeout(() => {
        console.log("job complete of", job.data);
        resolve();
      }, 5 * 1000)
    );
  },
  {
    connection: {
      host: "127.0.0.1",
      port: "6379",
    },
  }
);

worker.on("completed", (job) => {
  console.log(`${job.id} has completed!`);
});

worker.on("failed", (job, err) => {
  console.log(`${job.id} has failed with ${err.message}`);
});
