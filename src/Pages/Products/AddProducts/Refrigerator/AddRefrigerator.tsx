import { FieldValues } from "react-hook-form";
import MForm from "../../../../Components/Reusable/MForm";
import MInput from "../../../../Components/Reusable/MInput";
import MDropdown from "../../../../Components/Reusable/MDropdown";
import Swal from "sweetalert2";
import "animate.css";
import { usePostTelevisionIntoDBMutation } from "../../../../redux/services/products/televisionSlice";
const AddRefrigerator = () => {
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
            items={["Television"]}
          />
          <MDropdown
            name="product.subCategory"
            label="Sub Category"
            defaultValue=""
            items={["LED Tv", "Smart LED Tv"]}
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
            <MDropdown
              label="Freezer Capacity"
              name="specifications.freezerCapacity"
              defaultValue=""
              items={["60%", "50%", "40%", "30%"]}
            />
            <MDropdown
              label="Refrigerator Capacity"
              name="specifications.resolution"
              defaultValue=""
              items={["60%", "50%", "40%", "30%"]}
            />
            <MDropdown
              label="Cooling Type"
              name="specifications.coolingType"
              defaultValue=""
              items={["Frost", "Direct cool", "Others"]}
            />
            <MDropdown
              label="Door Quantity"
              name="specifications.doorQuantity"
              defaultValue=""
              items={["1", "2", "3"]}
            />
            <MDropdown
              label="Freezer Type"
              name="specifications.freezerType"
              defaultValue=""
              items={["Top Freezer", "Others"]}
            />
            <MDropdown
              label="Door Lock"
              name="specifications.doorLock"
              defaultValue=""
              items={["Yes", "No"]}
            />
            <MDropdown
              label="Refrigerant"
              name="specifications.refrigerant"
              defaultValue=""
              items={["R-600a", "R-600b", "R-200a", "Others"]}
            />
            <MDropdown
              label="Refrigerant Charge"
              name="specifications.refrigerantCharge"
              defaultValue=""
              items={["38g", "48g", "58g", "Others"]}
            />
            <MDropdown
              label="Blowing Agent Of PU Foam"
              name="specifications.refrigerantCharge"
              defaultValue=""
              items={["Cyclopentane", "Others"]}
            />
            <MDropdown
              label="Inner Liner"
              name="specifications.innerLiner"
              defaultValue=""
              items={["HIPS", "Others"]}
            />
            <MDropdown
              label="Door Plate"
              name="specifications.doorPlate"
              defaultValue=""
              items={["Glass", "Plastic", "Others"]}
            />
            <MDropdown
              label="Side Panel"
              name="specifications.sidePanel"
              defaultValue=""
              items={["PCM", "Others"]}
            />
            <MDropdown
              label="Back Panel"
              name="specifications.backPanel"
              defaultValue=""
              items={["Aluzinc", "Others"]}
            />
            <MDropdown
              label="power"
              name="specifications.power"
              defaultValue=""
              items={["20W", "30W", "40W", "50W"]}
            />
            <MDropdown
              label="Compressor Voltage Range"
              name="specifications.compressorVoltageRange"
              defaultValue=""
              items={["160V-260V", "170V-260V", "190V-260V", "120V-260V"]}
            />
            <MDropdown
              label="Rated Voltage"
              name="specifications.ratedVoltage"
              defaultValue=""
              items={["220~240V (AC)", "Others"]}
            />
            <MDropdown
              label="Rated Current"
              name="specifications.ratedCurrent"
              defaultValue=""
              items={["0.27A", "Others"]}
            />
            <MDropdown
              label="Rated Frequency"
              name="specifications.ratedFrequency"
              defaultValue=""
              items={["50Hz", "40Hz", "30Hz", "20Hz"]}
            />
            <MDropdown
              label="BuiltIn Stabilizer"
              name="specifications.builtInStabilizer"
              defaultValue=""
              items={["Yes", "No"]}
            />
            <MDropdown
              label="Dimensions"
              name="specifications.dimensions"
              defaultValue=""
              items={["1295 x 600 x 590 mm", "1000 x 600 x 590 mm", "Others"]}
            />
            <MDropdown
              label="Gross Capacity"
              name="specifications.grossCapacity"
              defaultValue=""
              items={["165 Liters", "175 Liters", "185 Liters", "Others"]}
            />
            <MDropdown
              label="CFT"
              name="specifications.CFT"
              defaultValue=""
              items={["10", "12", "15", "Others"]}
            />
            <MDropdown
              label="Net Weight"
              name="specifications.netWeight"
              defaultValue=""
              items={["40Kg", "45Kg", "50Kg", "Others"]}
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

export default AddRefrigerator;
