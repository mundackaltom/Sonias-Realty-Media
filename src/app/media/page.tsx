export default function Media() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Media</h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">Latest videos</h2>
        <div className="aspect-video rounded overflow-hidden mb-6">
          {/* Replace YOUR_PLAYLIST_OR_EMBED_ID with your channel playlist ID or video ID */}
          <iframe
            src="https://www.youtube.com/embed?listType=user_uploads&list=YOUR_CHANNEL_ID"
            title="SRM YouTube"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Brochures</h2>
        <ul className="space-y-2">
          <li><a href="/brochures/riverside.pdf" className="text-blue-600 underline">Riverside Towers — Brochure (PDF)</a></li>
          <li><a href="/brochures/garden.pdf" className="text-blue-600 underline">Garden Heights — Brochure (PDF)</a></li>
        </ul>
      </section>
    </div>
  );
}
