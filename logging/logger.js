import winston from 'winston';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(info => {
      return `[${info.timestamp}] ${info.level.toUpperCase()}: ${info.message}`;
    })
  ),
  transports: [
    new winston.transports.File({ filename: path.join(__dirname, 'app.log') }),
    new winston.transports.Console()
  ],
});

export default logger;