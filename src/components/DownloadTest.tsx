"use client";

export default function DownloadTest() {
  const testDownload = () => {
    const link = document.createElement('a');
    link.href = '/brochures/Brigade Valencia.pdf';
    link.download = 'Brigade_Valencia_Brochure.pdf';
    link.click();
  };

  return (
    <div className="p-4 bg-yellow-100 border border-yellow-400 rounded">
      <h3 className="font-bold mb-2">Download Test</h3>
      <button
        onClick={testDownload}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
      >
        Direct Download Test
      </button>
      <a
        href="/brochures/Brigade Valencia.pdf"
        target="_blank"
        className="bg-green-500 text-white px-4 py-2 rounded inline-block"
      >
        Open PDF in New Tab
      </a>
    </div>
  );
}