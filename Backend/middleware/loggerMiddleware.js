import logger from '../../logging/logger.js';

const loggerMiddleware = (req, res, next) => {
  const logMessage = `${req.method} ${req.originalUrl} - IP: ${req.ip}`;
  logger.info(logMessage);
  next();
};

export default loggerMiddleware;