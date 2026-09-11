import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Advanced Web Technologies</h1>
      <p className="text-lg text-gray-600 mb-8">
        Welcome! This is the course catalog for the Advanced Web Technologies
        program. Browse all available courses below.
      </p>
      <Link
        href="/courses"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        View Courses
      </Link>
    </div>
  );
}
