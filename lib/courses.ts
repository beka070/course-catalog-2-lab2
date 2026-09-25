export type Course = {
  id: string;
  title: string;
  description: string;
  credits: number;
  isElective: boolean;
  likes: number;
  category: string;
};

const courses: Course[] = [
  {
    id: "intro-web",
    title: "Introduction to Web Development",
    description:
      "Learn the fundamentals of HTML, CSS, and JavaScript. Build your first websites from scratch and understand how the web works.",
    credits: 3,
    isElective: false,
    likes: 142,
    category: "Web",
  },
  {
    id: "react-nextjs",
    title: "React & Next.js",
    description:
      "Master modern front-end development with React hooks, component patterns, and server-side rendering with Next.js.",
    credits: 4,
    isElective: false,
    likes: 218,
    category: "Web",
  },
  {
    id: "databases-sql",
    title: "Databases & SQL",
    description:
      "Understand relational databases, write complex SQL queries, and learn database design principles and normalization.",
    credits: 3,
    isElective: false,
    likes: 97,
    category: "Backend",
  },
  {
    id: "algorithms-ds",
    title: "Algorithms & Data Structures",
    description:
      "Explore sorting, searching, graphs, and dynamic programming. Prepare for technical interviews.",
    credits: 4,
    isElective: false,
    likes: 183,
    category: "CS Fundamentals",
  },
  {
    id: "mobile-react-native",
    title: "Mobile Development with React Native",
    description:
      "Build cross-platform iOS and Android apps using React Native. Covers navigation, state, and native APIs.",
    credits: 3,
    isElective: true,
    likes: 134,
    category: "Mobile",
  },
  {
    id: "cloud-devops",
    title: "Cloud Computing & DevOps",
    description:
      "Deploy applications to AWS and Azure. Learn Docker, Kubernetes, CI/CD pipelines, and infrastructure as code.",
    credits: 4,
    isElective: true,
    likes: 76,
    category: "DevOps",
  },
];

function delay<T>(value: T, ms = 300): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export async function getCourses(): Promise<Course[]> {
  return delay(courses);
}

export async function getCourse(id: string): Promise<Course | undefined> {
  return delay(courses.find((c) => c.id === id));
}
