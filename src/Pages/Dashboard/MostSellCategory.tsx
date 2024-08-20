import { ResponsiveContainer, Pie, PieChart, Cell, Tooltip } from "recharts";

const datas = [
  { name: "Category A", value: 400 },
  { name: "Category B", value: 300 },
  { name: "Category C", value: 300 },
  { name: "Category D", value: 200 },
  { name: "Category E", value: 278 },
  { name: "Category F", value: 189 },
  { name: "Category G", value: 350 },
];

// Define vibrant colors for each category
const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A28CFF",
  "#FF66B3",
  "#FFDC61",
];

const MostSellCategory = () => {
  return (
    <div className="w-[100%] h-[300px] bg-white">
      {" "}
      <h1 className="text-xl text-center pb-5 font-bold text-gray-800">
        Sale by category
      </h1>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={datas}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={120}
            paddingAngle={2}
            label
          >
            {datas.map((_entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MostSellCategory;
