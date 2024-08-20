import sale from "../../../../public/sale.png";
import { Link } from "react-router-dom";
import { TProduct } from "../../../types";

const ShowProduct = ({ product }: { product: TProduct }) => {
  return (
    <div className="group flex flex-col justify-between gap-y-4 h-full hover:shadow-xl shadow-[#EFEFEF] border shadow-sm keen-slider__slide overflow-hidden">
      <div className="group-hover:scale-105 duration-300 bg-primary p-1 relative">
        <Link to={`/products/${product?.mainCategory}/${product?._id}`}>
          <img
            src={product?.image}
            alt="Image"
            className="mix-blend-multiply"
          />
          {product?.sale && (
            <img src={sale} alt="logo" className="w-1/4 absolute inset-0" />
          )}
        </Link>
      </div>

      <div className="flex flex-col gap-1 text-center ">
        <h1 className="text-[15px] font-normal text-secondary/80">{`${product?.name?.substring(
          0,
          20
        )}...`}</h1>
        <p className="text-gray-600/75 font-semibold">
          <span className="text-[12px] ">MRP:</span>{" "}
          <del className="text-[14px]">BDT {product?.price}</del>
        </p>
        <p className="text-[18px] text-black/70 font-semibold">
          Offer Price BDT {product?.offerPrice}
        </p>
        <div className="flex px-2 gap-2 py-3">
          <button className="bg-blue-500 w-full text-white py-1">Update</button>
          <button className="bg-red-500 w-full text-white py-1">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
