export default function AboutPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">About This Catalog</h1>
      <p className="text-gray-700 mb-4">
        This course catalog is a semester project built for the Advanced Web
        Technologies course. It showcases a modern full-stack web application
        using Next.js 16 with the App Router, TypeScript, and Tailwind CSS.
      </p>
      <p className="text-gray-700 mb-4">
        The project is developed incrementally across weekly labs — starting
        with routing and Server Components, then adding a real backend with
        FastAPI, a PostgreSQL database, authentication, and more.
      </p>
      <p className="text-gray-700">
        Built by a student of the Advanced Web Technologies program as part of
        Lab 1: Project Scaffold.
      </p>
    </div>
  );
}
