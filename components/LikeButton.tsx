"use client";

import { useState } from "react";

type LikeButtonProps = {
  initialLikes: number;
};

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);

  return (
    <button
      onClick={() => setLikes((prev) => prev + 1)}
      className="flex items-center gap-2 bg-red-50 text-red-600 border border-red-200 px-5 py-2 rounded-lg hover:bg-red-100 transition-colors font-medium text-lg"
    >
      ❤ {likes}
    </button>
  );
}
