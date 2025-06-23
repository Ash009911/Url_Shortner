import { useState } from 'react';
import axios from 'axios';
import ResultCard from './ResultCard';

export default function ShortenerForm() {
  const [url, setUrl] = useState('');
  const [shortcode, setShortcode] = useState('');
  const [validity, setValidity] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/shorturls', {
        url,
        shortcode: shortcode || undefined,
        validity: validity ? parseInt(validity) : undefined,
      });
      setResult(res.data);
    } catch (err) {
      alert(err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div className="w-full max-w-md bg-[#A2AADB] p-6 rounded">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter original URL"
          className="w-full p-2 border rounded"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter What You Want Your Shortcode To Be"
          className="w-full p-2 border rounded"
          value={shortcode}
          onChange={(e) => setShortcode(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter validity in minutes (default validity 30 min)"
          className="w-full p-2 border rounded"
          value={validity}
          onChange={(e) => setValidity(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Get Your URL Shortened
        </button>
      </form>

      {result && <ResultCard result={result} />}
    </div>
  );
}