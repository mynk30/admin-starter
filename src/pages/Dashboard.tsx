import { Users, IndianRupee, ShoppingCart } from "lucide-react";

import StatCard from "../components/dashboard/StatCard";
import RecentOrders from "../components/dashboard/RecentOrders";

function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="page-title">
          Dashboard
        </h1>
        <p className="mt-1 text-muted">
          Overview of your business
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard
          title="Total Users"
          value="1,250"
          change="+12% from last month"
          isPositive={true}
          icon={Users}
        />

        <StatCard
          title="Total Revenue"
          value="₹85,400"
          change="+8% from last month"
          isPositive={true}
          icon={IndianRupee}
        />

        <StatCard
          title="Total Orders"
          value="320"
          change="-3% from last month"
          isPositive={false}
          icon={ShoppingCart}
        />
      </div>

      <RecentOrders />
    </div>
  );
}

export default Dashboard;
