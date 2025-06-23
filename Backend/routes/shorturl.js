import express from 'express';
import { nanoid } from 'nanoid';

const router = express.Router();

const urlStore = {};

router.post('/', (req, res) => {
  const { url, shortcode, validity = 30 } = req.body;

  if (!url || !url.startsWith('http')) {
    return res.status(400).json({ error: 'Invalid or missing URL.' });
  }

  const code = shortcode || nanoid(6);

  if (urlStore[code]) {
    return res.status(409).json({ error: 'Shortcode already in use.' });
  }

  const createdAt = new Date();
  const expiresAt = new Date(createdAt.getTime() + validity * 60000);

  urlStore[code] = {
    originalUrl: url,
    createdAt,
    expiresAt,
    clicks: 0,
    clickDetails: []
  };

  return res.status(201).json({
    shortLink: `http://localhost:${process.env.PORT || 5000}/${code}`,
    expiry: expiresAt.toISOString()
  });
});

router.get('/:shortcode', (req, res) => {
  const entry = urlStore[req.params.shortcode];

  if (!entry) {
    return res.status(404).json({ error: 'Shortcode not found.' });
  }

  return res.json({
    originalUrl: entry.originalUrl,
    createdAt: entry.createdAt,
    expiry: entry.expiresAt,
    clicks: entry.clicks,
    clickDetails: entry.clickDetails
  });
});

export { urlStore };
export default router;