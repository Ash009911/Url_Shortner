export default function ResultCard({ result }) {
  return (
    <div className="mt-6 p-4 border rounded bg-[#C0C9EE] text-black">
      <p><strong>Short URL:</strong> <a href={result.shortLink} className="text-blue-600 underline" target="_blank">{result.shortLink}</a></p>
      <p><strong>Expires At:</strong> {new Date(result.expiry).toLocaleString()}</p>
    </div>
  );
}