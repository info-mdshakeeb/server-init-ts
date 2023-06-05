import path from "path";
import { createLogger, format, transports } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const { combine, timestamp, printf } = format;

const myFormat = printf(({ timestamp, message, }) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
    const am_pm = date.getHours() >= 12 ? 'PM' : 'AM'
    return `${year}-${month}-${day} (${hours}${am_pm}) ${message}`
});

const logger = createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        myFormat
    ),
    transports: [
        new DailyRotateFile({
            filename: path.join(process.cwd(), "log", "winston", "success", "ps-success-%DATE%.log"),
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '7d'
        })
    ]
});

const erLogger = createLogger({
    level: 'error',
    format: combine(
        timestamp(),
        myFormat
    ),
    transports: [
        new DailyRotateFile({
            filename: path.join(process.cwd(), "log", "winston", "errors", "ps-error-%DATE%.log"),
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '7d'
        })
    ]
});


if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console({
        format: myFormat,
    }));
    erLogger.add(new transports.Console({
        format: myFormat,
    }));
}
export { logger, erLogger };
