import app from "./app";
import { PORT } from "./core/env";
import log from "./core/log";
import mongo from "./core/mongo";

app.listen(PORT, async () => {
    log.info(`Server running on: http://localhost:${PORT}`);
    await mongo();
});
