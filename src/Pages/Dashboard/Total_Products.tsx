import { AiOutlineProduct } from "react-icons/ai";
import { FaFirstOrder, FaUsers } from "react-icons/fa6";
import { LuCircleDollarSign } from "react-icons/lu";
import { MdOutlineShoppingBag } from "react-icons/md";

const Total_Products = () => {
  return (
    <div className=" flex gap-5 items-center justify-center w-full flex-wrap">
      <div className="bg-white shadow border w-max px-5 py-5 flex gap-4 items-center rounded">
        <div className="bg-[#22C55E] p-2  text-white rounded-full">
          <AiOutlineProduct className="h-8 w-8" />
        </div>
        <div>
          <h1 className="text-lg text-center">Total Products</h1>
          <h1 className="text-xl text-center font-semibold">150</h1>
        </div>
      </div>
      <div className="bg-white shadow border w-max px-5 py-5 flex gap-4 items-center rounded">
        <div className="bg-[#646a71] p-2  text-white rounded-full">
          <FaFirstOrder className="h-8 w-8" />
        </div>
        <div>
          <h1 className="text-lg text-center">Total Orders</h1>
          <h1 className="text-xl text-center font-semibold">50</h1>
        </div>
      </div>
      <div className="bg-white shadow border w-max px-5 py-5 flex gap-4 items-center rounded">
        <div className="bg-[#FF5200] p-2  text-white rounded-full">
          <LuCircleDollarSign className="h-8 w-8" />
        </div>
        <div>
          <h1 className="text-lg text-center">Total Income</h1>
          <h1 className="text-xl text-center font-semibold">11150</h1>
        </div>
      </div>
      <div className="bg-white shadow border w-max px-5 py-5 flex gap-4 items-center rounded">
        <div className="bg-[#fc23a2] p-2  text-white rounded-full">
          <MdOutlineShoppingBag className="h-8 w-8" />
        </div>
        <div>
          <h1 className="text-lg text-center">Total Sales</h1>
          <h1 className="text-xl text-center font-semibold">250</h1>
        </div>
      </div>
      <div className="bg-white shadow border w-max px-5 py-5 flex gap-4 items-center rounded">
        <div className="bg-[#2377FC] p-2  text-white rounded-full">
          <FaUsers className="h-8 w-8" />
        </div>
        <div>
          <h1 className="text-lg text-center">Total Users</h1>
          <h1 className="text-xl text-center font-semibold">550</h1>
        </div>
      </div>
    </div>
  );
};

export default Total_Products;
{
  /* <span className="text-gray-800 font-medium block w-24 truncate">
{order.product.length > 5
  ? `${order.product.slice(0, 5)}...`
  : order.product}
</span> */
}
