import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import shortUrlRouter, { urlStore } from './routes/shorturl.js';
import loggerMiddleware from './middleware/loggerMiddleware.js';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

app.use('/shorturls', shortUrlRouter);

app.get('/', (req, res) => {
  res.send('Affordmed URL Shortener running!');
});

app.get('/:shortcode', (req, res) => {
  const { shortcode } = req.params;
  const entry = urlStore[shortcode];

  if (!entry) {
    return res.status(404).send('Short URL not found');
  }

  const now = new Date();
  if (now > entry.expiresAt) {
    return res.status(410).send('Short URL has expired');
  }

  entry.clicks++;
  entry.clickDetails.push({
    timestamp: now,
    referrer: req.get('Referrer') || 'unknown',
    location: 'India (mock)'
  });

  return res.redirect(entry.originalUrl);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});