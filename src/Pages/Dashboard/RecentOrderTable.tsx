const recentOrders = [
  {
    product: "Product A",
    customer: "Customer 1",
    productId: "P001",
    quantity: 2,
    price: "$20.00",
    image: "https://via.placeholder.com/50",
  },
  {
    product: "Product B",
    customer: "Customer 2",
    productId: "P002",
    quantity: 1,
    price: "$15.00",
    image: "https://via.placeholder.com/50",
  },
  {
    product: "Product C",
    customer: "Customer 3",
    productId: "P003",
    quantity: 5,
    price: "$50.00",
    image: "https://via.placeholder.com/50",
  },
  {
    product: "Product D",
    customer: "Customer 4",
    productId: "P004",
    quantity: 3,
    price: "$30.00",
    image: "https://via.placeholder.com/50",
  },
  {
    product: "Product E",
    customer: "Customer 5",
    productId: "P005",
    quantity: 4,
    price: "$40.00",
    image: "https://via.placeholder.com/50",
  },
];

const RecentOrdersTable = () => {
  return (
    <div className="pt-20 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Recent Orders</h1>
      <div className="overflow-x-auto rounded-lg shadow-md bg-white">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="py-4 px-6 text-left text-sm font-semibold">
                Product
              </th>
              <th className="py-4 px-6 text-left text-sm font-semibold">
                Customer
              </th>
              <th className="py-4 px-6 text-left text-sm font-semibold">
                Product ID
              </th>
              <th className="py-4 px-6 text-left text-sm font-semibold">
                Quantity
              </th>
              <th className="py-4 px-6 text-left text-sm font-semibold">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {recentOrders.map((order, index) => (
              <tr
                key={index}
                className={`transition-colors duration-300 hover:bg-gray-50 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="py-4 px-6 flex items-center space-x-4">
                  <img
                    src={order.image}
                    alt={order.product}
                    className="w-12 h-12 object-cover rounded-md border border-gray-200"
                  />
                  <span className="text-gray-800 font-medium truncate">
                    {order.product}
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-700">{order.customer}</td>
                <td className="py-4 px-6 text-gray-700">{order.productId}</td>
                <td className="py-4 px-6 text-gray-700">{order.quantity}</td>
                <td className="py-4 px-6 text-gray-700 font-medium">
                  {order.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrdersTable;
