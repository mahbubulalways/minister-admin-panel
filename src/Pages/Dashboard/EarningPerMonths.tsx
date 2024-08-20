import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Example data for monthly earnings
const data = [
  { month: "Jan", Earnings: 10000 },
  { month: "Feb", Earnings: 3000 },
  { month: "Mar", Earnings: 7000 },
  { month: "Apr", Earnings: 2780 },
  { month: "May", Earnings: 1890 },
  { month: "Jun", Earnings: 8390 },
  { month: "Jul", Earnings: 3490 },
  { month: "Aug", Earnings: 4000 },
  { month: "Sep", Earnings: 3200 },
  { month: "Oct", Earnings: 3400 },
  { month: "Nov", Earnings: 3100 },
  { month: "Dec", Earnings: 100 },
];

const EarningPerMonths = () => (
  <div>
    <ResponsiveContainer width="100%" height={500}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 20, left: 20, bottom: 60 }} // Increase bottom margin for X-axis labels
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          height={60}
          tick={{ fontSize: 14, fill: "#666" }} // Ensure ticks are visible
          tickMargin={10} // Space between ticks and axis
        />
        <YAxis
          domain={[0, "auto"]} // Ensure the Y-axis starts from 0
          tick={{ fontSize: 14, fill: "#666" }} // Ensure ticks are visible
        />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Earnings"
          stroke="#646A71"
          dot={{ fill: "#FF5200", stroke: "#FF5200" }}
          label={({ value }) => (
            <text fill="#8884d8" fontSize={10} y={-10} textAnchor="middle">
              {value}
            </text>
          )}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default EarningPerMonths;
