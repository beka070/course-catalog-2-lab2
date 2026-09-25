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

export default function CourseCard({
  id,
  title,
  description,
  credits,
  likes,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`} className="block h-full">
      <Card className="h-full hover:shadow-md hover:border-sky-400 dark:hover:border-sky-500 transition-all duration-200 cursor-pointer">
        <CardHeader>
          <CardTitle className="text-lg text-sky-700 dark:text-sky-400">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center rounded-full bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 px-3 py-1 text-xs font-medium">
              {credits} credits
            </span>
            <Button variant="ghost" size="sm" className="text-sky-600 dark:text-sky-400 hover:text-sky-800 hover:bg-sky-50 dark:hover:bg-sky-900/40">
              ❤ {likes}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
