import BestSellingProducts from "./BestSellingProduct";
import EarningPerMonths from "./EarningPerMonths";
import MostSellCategory from "./MostSellCategory";
import OrdersChart from "./OrdersChart";
import RecentOrdersTable from "./RecentOrderTable";
import Total_Products from "./Total_Products";

const Dashboard = () => {
  return (
    <div>
      <Total_Products />
      <div className="pt-20 grid grid-cols-2 items-center">
        <OrdersChart />
        <MostSellCategory />
      </div>
      <RecentOrdersTable />
      <div className="pt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <EarningPerMonths />
        </div>
        <div className="flex flex-col pt-5">
          <BestSellingProducts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
