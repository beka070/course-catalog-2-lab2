import { notFound } from "next/navigation";
import { getCourse, getCourses } from "@/lib/courses";
import LikeButton from "@/components/LikeButton";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({ id: course.id }));
}

export default async function CoursePage({ params }: Props) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-600 text-lg mb-6">{course.description}</p>

      <div className="flex items-center gap-4 mb-8">
        <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium">
          {course.credits} credits
        </span>
        <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full font-medium">
          {course.isElective ? "Elective" : "Required"}
        </span>
      </div>

      <div className="border-t pt-6">
        <p className="text-gray-500 mb-3 text-sm">Like this course?</p>
        <LikeButton initialLikes={course.likes} />
      </div>
    </div>
  );
}
