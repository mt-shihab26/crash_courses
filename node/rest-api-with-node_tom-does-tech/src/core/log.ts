import pino from "pino";

const log = pino({
    transport: {
        target: "pino-pretty",
    },
    base: {
        pid: true,
    },
    options: {
        colorize: true,
    },
});

export default log;
