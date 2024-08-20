const topSellingProducts = [
  {
    product: "Product A",
    quantity: 500,
    image:
      "https://i.ibb.co/TrXvdFd/minister-deluxe-led-tv-modelmi24dx16g-01.jpg",
  },
  {
    product: "Product B",
    quantity: 450,
    image:
      "https://i.ibb.co/TrXvdFd/minister-deluxe-led-tv-modelmi24dx16g-01.jpg",
  },
  {
    product: "Product C",
    quantity: 400,
    image:
      "https://i.ibb.co/TrXvdFd/minister-deluxe-led-tv-modelmi24dx16g-01.jpg",
  },
  {
    product: "Product C",
    quantity: 400,
    image:
      "https://i.ibb.co/TrXvdFd/minister-deluxe-led-tv-modelmi24dx16g-01.jpg",
  },
  {
    product: "Product C",
    quantity: 400,
    image:
      "https://i.ibb.co/TrXvdFd/minister-deluxe-led-tv-modelmi24dx16g-01.jpg",
  },
  {
    product: "Product C",
    quantity: 400,
    image:
      "https://i.ibb.co/TrXvdFd/minister-deluxe-led-tv-modelmi24dx16g-01.jpg",
  },
];

const TopSellingProductsCards = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        {topSellingProducts.map((product, index) => (
          <div
            key={index}
            className="flex items-center bg-white shadow-md rounded border border-gray-300"
          >
            <img
              src={product.image}
              alt={product.product}
              className="w-full h-full max-w-[100px] max-h-[100px] rounded-md  mr-4"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {product.product}
              </h3>
              <p className="text-gray-600">Quantity Sold: {product.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-lg text-center  text-gray-800 pt-8">
        Best selling products
      </h1>
    </div>
  );
};

export default TopSellingProductsCards;
