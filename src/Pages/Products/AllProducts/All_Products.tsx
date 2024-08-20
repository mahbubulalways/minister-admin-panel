import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "All PRODUCTS", path: "products" },
  { id: 1, name: "TELEVISION", path: "television" },
  { id: 2, name: "REFRIGERATOR", path: "refrigerator" },
  { id: 3, name: "AIR CONDITIONER", path: "air-conditioner" },
  { id: 4, name: "WASHING MACHINE", path: "washing-machine" },
  { id: 5, name: "HOME APPLIANCES", path: "home-appliance" },
  { id: 6, name: "MICROWAVE OVEN", path: "micro-oven" },
  { id: 7, name: "HUMAN CARE", path: "human-care" },
];

const All_Products = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">All Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-200 cursor-pointer"
          >
            <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
            <Link
              to={`/category/${category.path}`} // Corrected link path
              className="text-blue-500 hover:underline"
            >
              GO TO SEE {category.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default All_Products;
