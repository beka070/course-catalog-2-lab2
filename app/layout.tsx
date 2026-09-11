import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Course Catalog",
  description: "Advanced Web Technologies — Course Catalog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="bg-white shadow-sm">
          <nav className="max-w-4xl mx-auto px-6 py-4 flex gap-6">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Courses
            </Link>
            <Link
              href="/about"
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              About
            </Link>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
