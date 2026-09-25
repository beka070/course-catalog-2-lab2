import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

// Category badge color mapping based on course id keyword
function getCategoryInfo(id: string): { label: string; color: string } {
  if (id.includes("frontend") || id.includes("web") || id.includes("react"))
    return { label: "Web", color: "bg-sky-100 text-sky-700" };
  if (id.includes("backend") || id.includes("api") || id.includes("fast"))
    return { label: "Backend", color: "bg-violet-100 text-violet-700" };
  if (id.includes("database") || id.includes("sql") || id.includes("postgres"))
    return { label: "Database", color: "bg-emerald-100 text-emerald-700" };
  if (id.includes("security") || id.includes("auth"))
    return { label: "Security", color: "bg-rose-100 text-rose-700" };
  if (id.includes("ai") || id.includes("llm") || id.includes("ml"))
    return { label: "AI / ML", color: "bg-amber-100 text-amber-700" };
  return { label: "CS Fundamentals", color: "bg-indigo-100 text-indigo-700" };
}

export default function CourseCard({
  id,
  title,
  description,
  credits,
  likes,
}: CourseCardProps) {
  const category = getCategoryInfo(id);

  return (
    <Link href={`/courses/${id}`} className="block h-full group">
      <Card className="h-full flex flex-col bg-white border border-sky-100 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100 transition-all duration-200 cursor-pointer rounded-2xl overflow-hidden">
        <CardHeader className="pb-2">
          {/* Category badge */}
          <span
            className={`inline-block self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-2 ${category.color}`}
          >
            {category.label}
          </span>

          <CardTitle className="text-base font-bold text-slate-800 leading-snug group-hover:text-sky-600 transition-colors">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col flex-1 gap-3 pt-0">
          <p className="text-sm text-slate-500 leading-relaxed flex-1 line-clamp-3">
            {description}
          </p>

          {/* Footer row */}
          <div className="flex items-center justify-between pt-2 border-t border-sky-50">
            <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
              <span>🎓</span>
              {credits} credits
            </span>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1.5 text-rose-400 hover:text-rose-500 hover:bg-rose-50 text-xs font-semibold h-7 px-2"
            >
              ❤ {likes}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
