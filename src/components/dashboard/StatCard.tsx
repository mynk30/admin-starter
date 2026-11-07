import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
};

function StatCard({
  title,
  value,
  change,
  isPositive,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="card p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-muted">{title}</p>
          <h3 className="mt-2 page-title">
            {value}
          </h3>
        </div>

        <div className="icon-badge-primary">
          <Icon size={22} />
        </div>
      </div>
      <p
        className={`mt-4 text-sm ${
          isPositive
            ? "text-green-600 dark:text-green-400"
            : "text-red-600 dark:text-red-400"
        }`}
      >
        {change}
      </p>
    </div>
  );
}

export default StatCard;
