import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", orders: 3200 },
  { month: "Feb", orders: 2900 },
  { month: "March", orders: 3400 },
  { month: "April", orders: 2800 },
  { month: "May", orders: 3900 },
  { month: "June", orders: 4200 },
  { month: "July", orders: 3800 },
  { month: "Aug", orders: 3600 },
  { month: "Sept", orders: 4100 },
  { month: "Oct", orders: 3700 },
  { month: "Nov", orders: 4500 },
  { month: "Dec", orders: 4700 },
];

const OrdersChart = () => {
  return (
    <div>
      {" "}
      <h1 className="text-xl text-center pb-5 font-bold text-gray-800">
        Orders per months
      </h1>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff7e5f" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#feb47b" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" className="text-[12px]" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="orders"
            stroke="#ff6a88"
            fillOpacity={1}
            fill="url(#colorOrders)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrdersChart;
