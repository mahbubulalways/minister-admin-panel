import { useParams } from "react-router-dom";
import { useGetProductByCategoryQuery } from "../../../redux/services/products/televisionSlice";
import Loader from "../../../Components/Loader/Loader";
import ShowProduct from "./ShowProducts";
import { TProduct } from "../../../types";

const See_Products = () => {
  const params = useParams();
  const { data: products, isLoading } = useGetProductByCategoryQuery(
    params?.category
  );
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <h1 className="text-lg">TOTAL PRODUCTS: {products?.data?.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-5">
        {products?.data?.map((product: TProduct) => (
          <ShowProduct key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default See_Products;
