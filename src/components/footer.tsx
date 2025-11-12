import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left side - Copyright */}
        <p className="text-sm">© 2025 SRM · All rights reserved</p>

        {/* Right side - Navigation Links */}
        <nav className="flex gap-6 text-sm">
          <Link href="/about" className="hover:text-gray-400 transition">
            About
          </Link>
          <Link href="/projects" className="hover:text-gray-400 transition">
            Projects
          </Link>
          <Link href="/media" className="hover:text-gray-400 transition">
            Media
          </Link>
          <Link href="/contact" className="hover:text-gray-400 transition">
            Contact us
          </Link>
        </nav>
      </div>
    </footer>
  );
}
