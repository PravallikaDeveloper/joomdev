import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  accent?: "blue" | "green" | "purple" | "red";
}

export function Card({
  title,
  description,
  icon,
  accent = "blue",
}: CardProps) {

  const Icon = icon;

  const accentStyles = {
    blue: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    green: "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    purple: "bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    red: "bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400",
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <div
        className={`inline-flex p-3 rounded-full mb-4 ${accentStyles[accent]}`}
      >
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="text-lg font-semibold mb-2 dark:text-white">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}
