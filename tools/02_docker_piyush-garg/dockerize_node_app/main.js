const Koa = require("koa");
const koaLogger = require("koa-logger");

const app = new Koa();

app.use(koaLogger());

app.use(async (ctx) => {
  ctx.body = "Hello World";
});

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
