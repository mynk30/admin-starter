type Status = "Completed" | "Pending" | "Cancelled";

type StatusBadgeProps = {
  status: Status;
};

const statusStyles: Record<Status, string> = {
  Completed: "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400",
  Pending:
    "bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-400",
  Cancelled: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-400",
};

function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;
