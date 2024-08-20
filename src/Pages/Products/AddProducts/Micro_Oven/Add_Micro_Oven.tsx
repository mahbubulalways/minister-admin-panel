import { FieldValues } from "react-hook-form";
import MForm from "../../../../Components/Reusable/MForm";
import MInput from "../../../../Components/Reusable/MInput";
import MDropdown from "../../../../Components/Reusable/MDropdown";
import Swal from "sweetalert2";
import "animate.css";
import { usePostTelevisionIntoDBMutation } from "../../../../redux/services/products/televisionSlice";
const Add_Micro_Oven = () => {
  const [postTelevision] = usePostTelevisionIntoDBMutation();
  const onSubmit = async (data: FieldValues) => {
    try {
      data.product.images = data.product.images.split(",");
      data.product.offerPrice =
        data.product.price - (data.product.price * data.product.discount) / 100;

      const result = await postTelevision(data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }

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
            items={["Micro oven"]}
          />
          <MDropdown
            name="product.subCategory"
            label="Sub Category"
            defaultValue=""
            items={["Micro oven"]}
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
          <div className="grid grid-cols-2 gap-5 pt-5">
            <MInput
              label="Power Consumption"
              name="specifications.powerConsumption"
              type="text"
              defaultValue=""
              required={true}
            />
            <MInput
              label="Output"
              name="specifications.output"
              type="text"
              defaultValue=""
              required={true}
            />
            <MInput
              label="Operation Frequency"
              name="specifications.operationFrequency"
              type="text"
              defaultValue=""
              required={true}
            />
            <MInput
              label="Timer"
              name="specifications.timer"
              type="text"
              defaultValue=""
              required={true}
            />
            <MInput
              label="Microwave Power Levels"
              name="specifications.microwavePowerLevels"
              type="text"
              defaultValue=""
              required={true}
            />
            <MInput
              label="Turntable Glass Tray"
              name="specifications.turntableGlassTray"
              type="text"
              defaultValue=""
              required={true}
            />
            <MInput
              label="Defrost Setting"
              name="specifications.defrostSetting"
              type="text"
              defaultValue=""
              required={true}
            />
            <MInput
              label="Housing And Cavity"
              name="specifications.housingAndCavity"
              type="text"
              defaultValue=""
              required={true}
            />
            <MInput
              label="Handle"
              name="specifications.handle"
              type="text"
              defaultValue=""
              required={true}
            />
            <MDropdown
              label="Cooking End Signal"
              name="specifications.cookingEndSignal"
              defaultValue=""
              items={["Yes", "No"]}
            />
            <MInput
              label="Outside Dimensions"
              name="specifications.outsideDimensions"
              type="text"
              defaultValue=""
              required={true}
            />
            <MInput
              label="Oven Cavity Dimensions"
              name="specifications.ovenCavityDimensions"
              type="text"
              defaultValue=""
              required={true}
            />
            <MDropdown
              label="Oven Capacity"
              name="specifications.ovenCapacity"
              defaultValue=""
              items={["25 Liters", "20 Liters", "15 Liters", "10 Liters"]}
            />{" "}
            <MInput
              label="Cooking Uniformity"
              name="specifications.cookingUniformity"
              type="text"
              defaultValue=""
              required={true}
            />
            <MInput
              label="Net Weight"
              name="specifications.netWeight"
              type="text"
              defaultValue=""
              required={true}
            />
            <MDropdown
              label="Warranty"
              name="specifications.warranty"
              defaultValue=""
              items={["1 Years", "5 Years", "10 Years", "12 Years"]}
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

export default Add_Micro_Oven;
