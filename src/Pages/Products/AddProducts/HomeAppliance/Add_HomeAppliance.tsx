import { FieldValues } from "react-hook-form";
import MForm from "../../../../Components/Reusable/MForm";
import MInput from "../../../../Components/Reusable/MInput";
import MDropdown from "../../../../Components/Reusable/MDropdown";
import MInputTag from "../../../../Components/Reusable/MInputTag";
import { useState } from "react";
import Swal from "sweetalert2";
import "animate.css";
import { usePostTelevisionIntoDBMutation } from "../../../../redux/services/products/televisionSlice";
const Add_HomeAppliance = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [postTelevision] = usePostTelevisionIntoDBMutation();
  const onSubmit = async (data: FieldValues) => {
    try {
      data.product.images = data.product.images.split(",");
      data.product.offerPrice =
        data.product.price - (data.product.price * data.product.discount) / 100;
      console.log(data);
      const result = await postTelevision(data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    console.log(data);
    setIsSubmitted(true);

    Swal.fire({
      icon: "success",
      title: "New product added successfully.",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    });
  };
  return (
    <div>
      <MForm onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-5">
          <MInput
            label="Name"
            name="product.name"
            type="text"
            defaultValue=""
            required={true}
          />
          <MInput
            label="Image"
            name="product.image"
            type="text"
            defaultValue=""
            required={true}
          />
          <MInput
            label="Images"
            name="product.images"
            type="text"
            defaultValue=""
            required={true}
          />
          <MInput
            label="Price"
            name="product.price"
            type="number"
            defaultValue=""
            required={true}
          />
          <MInput
            label="Discount"
            name="product.discount"
            type="number"
            defaultValue=""
            required={true}
          />
          <MDropdown
            name="product.mainCategory"
            label="Main Category"
            defaultValue=""
            items={["Home Appliance"]}
          />
          <MDropdown
            name="product.subCategory"
            label="Sub Category"
            defaultValue=""
            items={["Rice cooker", "Fan", "Blender"]}
          />
          <MDropdown
            name="product.availability"
            label="Availability"
            defaultValue=""
            items={["In stock", "Out of stock"]}
          />
          <MDropdown
            name="product.productType"
            label="product Type"
            defaultValue=""
            items={["Feature product", "New arrivals"]}
          />{" "}
          <MInput
            label="Rating"
            name="product.rating"
            type="number"
            defaultValue=""
            required={true}
          />
        </div>
        <div className=" pt-10">
          <h1 className="text-2xl text-center">Specifications</h1>
          <div className=" pt-5">
            <MInputTag
              label="Features"
              name="specifications.features"
              cleanForm={isSubmitted}
            />
          </div>
        </div>
        <button
          type="submit"
          className=" mt-5  bg-blue-600 w-full py-2 text-white font-semibold text-[16px]"
        >
          Submit
        </button>
      </MForm>
    </div>
  );
};

export default Add_HomeAppliance;
