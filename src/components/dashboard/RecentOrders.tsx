import StatusBadge from "../ui/StatusBadge";

type Order = {
  id: string;
  customer: string;
  product: string;
  amount: string;
  status: "Completed" | "Pending" | "Cancelled";
};

const orders: Order[] = [
  {
    id: "ORD-001",
    customer: "Rahul Sharma",
    product: "Premium Plan",
    amount: "₹2,499",
    status: "Completed",
  },
  {
    id: "ORD-002",
    customer: "Priya Patel",
    product: "Basic Plan",
    amount: "₹999",
    status: "Pending",
  },
  {
    id: "ORD-003",
    customer: "Amit Verma",
    product: "Pro Plan",
    amount: "₹4,999",
    status: "Cancelled",
  },
];

function RecentOrders() {
  return (
    <section className="card overflow-hidden">
      <div className="card-header">
        <h2 className="section-title">
          Recent Orders
        </h2>

        <p className="mt-1 text-muted">
          A list of your latest customer orders.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[600px] w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
            <tr>
              <th className="px-5 py-3 font-medium">Order ID</th>
              <th className="px-5 py-3 font-medium">Customer</th>
              <th className="px-5 py-3 font-medium">Product</th>
              <th className="px-5 py-3 font-medium">Amount</th>
              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {orders.map((order) => (
              <tr
                key={order.id}
                className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/60"
              >
                <td className="whitespace-nowrap px-5 py-4 font-medium text-blue-600 dark:text-blue-400">
                  {order.id}
                </td>

                <td className="whitespace-nowrap px-5 py-4 text-gray-800 dark:text-gray-200">
                  {order.customer}
                </td>

                <td className="whitespace-nowrap px-5 py-4 text-gray-600 dark:text-gray-300">
                  {order.product}
                </td>

                <td className="whitespace-nowrap px-5 py-4 font-medium text-gray-800 dark:text-gray-200">
                  {order.amount}
                </td>

                <td className="whitespace-nowrap px-5 py-4">
                  <StatusBadge status={order.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default RecentOrders;
