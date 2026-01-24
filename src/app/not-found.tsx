import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F4F0EC] px-4">
      <div className="max-w-xl text-center bg-white rounded-3xl shadow-lg px-8 py-12">
        <p className="font-jost text-sm tracking-[0.3em] uppercase text-[#CDA274] mb-4">
          Error 404
        </p>
        <h1 className="font-dm-serif text-4xl md:text-5xl text-[#292F36] font-bold mb-4">
          Page not found
        </h1>
        <p className="font-jost text-lg text-[#4D5053] mb-8">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to exploring properties.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="bg-[#CDA274] hover:bg-[#B8956A] text-white font-inter font-semibold text-lg px-6 py-3 rounded-2xl transition duration-300"
          >
            Go to Homepage
          </Link>
          <Link
            href="/contact"
            className="border-2 border-[#292F36] text-[#292F36] hover:bg-[#292F36] hover:text-white font-inter font-semibold text-lg px-6 py-3 rounded-2xl transition duration-300"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
}
