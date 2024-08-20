import { FieldValues } from "react-hook-form";
import MForm from "../../../../Components/Reusable/MForm";
import MInput from "../../../../Components/Reusable/MInput";
import MDropdown from "../../../../Components/Reusable/MDropdown";
import MInputTag from "../../../../Components/Reusable/MInputTag";
import { useState } from "react";
import Swal from "sweetalert2";
import "animate.css";
import { usePostTelevisionIntoDBMutation } from "../../../../redux/services/products/televisionSlice";
const Add_Television = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [postTelevision, { isLoading }] = usePostTelevisionIntoDBMutation();
  const onSubmit = async (data: FieldValues) => {
    try {
      data.product.images = data.product.images.split(",");
      data.product.offerPrice =
        data.product.price - (data.product.price * data.product.discount) / 100;
      const result = await postTelevision(data);
      console.log(result);
      if (result?.data?.success) {
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
      }
    } catch (error) {
      console.log(error);
    }

    setIsSubmitted(true);
  };
  return (
    <div>
      <MForm onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-5">
          <MInput
            label="Name"
            name="product.name"
            type="text"
            defaultValue="Minister M-24 DELUXE LED TV SAPA"
            required={true}
          />
          <MInput
            label="Image"
            name="product.image"
            type="text"
            defaultValue="https://i.ibb.co/TrXvdFd/minister-deluxe-led-tv-modelmi24dx16g-01.jpg"
            required={true}
          />
          <MInput
            label="Images"
            name="product.images"
            type="text"
            defaultValue="https://i.ibb.co/TrXvdFd/minister-deluxe-led-tv-modelmi24dx16g-01.jpg,https://i.ibb.co/TrXvdFd/minister-deluxe-led-tv-modelmi24dx16g-01.jpg"
            required={true}
          />
          <MInput
            label="Price"
            name="product.price"
            type="number"
            defaultValue="50000"
            required={true}
          />
          <MInput
            label="Discount"
            name="product.discount"
            type="number"
            defaultValue="10"
            required={true}
          />
          <MDropdown
            name="product.mainCategory"
            label="Main Category"
            defaultValue="television"
            items={["Television"]}
          />
          <MDropdown
            name="product.subCategory"
            label="Sub Category"
            defaultValue="led-tv"
            items={["LED TV", "Smart LED TV"]}
          />
          <MDropdown
            name="product.availability"
            label="Availability"
            defaultValue="in-stock"
            items={["In stock", "Out of stock"]}
          />
          <MDropdown
            name="product.productType"
            label="product Type"
            defaultValue="feature-product"
            items={["Feature product", "New arrivals"]}
          />{" "}
          <MInput
            label="Rating"
            name="product.rating"
            type="number"
            defaultValue="4"
            required={true}
          />
        </div>
        <div className=" pt-10">
          <h1 className="text-2xl text-center">Specifications</h1>
          <div className="grid grid-cols-2 gap-5 pt-5">
            <MInput
              label="Color"
              name="specifications.color"
              type="text"
              defaultValue="Black"
              required={true}
            />{" "}
            <MDropdown
              label="Screen Size"
              name="specifications.screenSize"
              defaultValue="55-inches"
              items={["55 inches", "42 inches", "28 inches", "22 inches"]}
            />
            <MDropdown
              label="Resolution"
              name="specifications.resolution"
              defaultValue="2k"
              items={["2K", "4K", "8K"]}
            />
            <MDropdown
              label="Viewing Angle"
              name="specifications.viewingAngle"
              defaultValue="178-degrees"
              items={["178 degrees", "170 degrees", "118 degrees"]}
            />
            <MDropdown
              label="Sound System"
              name="specifications.soundSystem"
              defaultValue="dolby"
              items={["Dolby", "Dolby", "Dolby"]}
            />
            <MInputTag
              demoTags={["HDMI", "USB", "AV"]}
              label="Source"
              name="specifications.source"
              cleanForm={isSubmitted}
            />
            <MInputTag
              demoTags={["MP4", "MKV", "AVI"]}
              label="Supported Video Format"
              name="specifications.supportedVideoFormat"
              cleanForm={isSubmitted}
            />
            <MDropdown
              label="Body Design"
              name="specifications.bodyDesign"
              defaultValue="slim"
              items={["Slim", "Flat"]}
            />{" "}
            <MDropdown
              label="Bangla Support Language"
              name="specifications.banglaSupportLanguage"
              defaultValue="yes"
              items={["Yes", "No"]}
            />{" "}
            <MDropdown
              label="Backlight Adjustable"
              name="specifications.backlightAdjustable"
              defaultValue="yes"
              items={["Yes", "No"]}
            />{" "}
            <MInputTag
              demoTags={["Cinema", "Sports", "Game"]}
              label="PictureMode"
              name="specifications.pictureMode"
              cleanForm={isSubmitted}
            />
            <MDropdown
              label="Power Consumption"
              name="specifications.powerConsumption"
              defaultValue="150w"
              items={["150W", "100W", "50W"]}
            />
            <MInputTag
              demoTags={["PAL", "NTSC"]}
              label="TV System"
              name="specifications.tvSystem"
              cleanForm={isSubmitted}
            />{" "}
            <MDropdown
              label="Backlight Type"
              name="specifications.backlightType"
              defaultValue="led"
              items={["LED", "LCD", "LLD"]}
            />
            <MDropdown
              label="Color Depth"
              name="specifications.colorDepth"
              defaultValue="10-bit"
              items={["10-bit", "20-bit", "30-bit"]}
            />
            <MInputTag
              demoTags={["16:9", "4:3"]}
              label="Aspect Ratio"
              name="specifications.aspectRatio"
              cleanForm={isSubmitted}
            />
            <MDropdown
              label="Thunder Protective"
              name="specifications.thunderProtective"
              defaultValue="yes"
              items={["Yes", "No"]}
            />
            <MDropdown
              name="specifications.remote"
              label="Remote"
              defaultValue="yes"
              items={["Yes", "No"]}
            />
            <MDropdown
              name="specifications.wallMountBracket"
              label="Wall Mount Bracket"
              defaultValue="yes"
              items={["Yes", "No"]}
            />
            <MInput
              label="Contrast Ratio"
              name="specifications.contrastRatio"
              type="text"
              defaultValue="5000:1"
              required={true}
            />
            <MDropdown
              label="Brightness"
              name="specifications.brightness"
              defaultValue="400-nits"
              items={["400 nits", "200 nits", "100 nits"]}
            />
            <MDropdown
              label="Speaker"
              name="specifications.speaker"
              defaultValue="20w"
              items={["20W", "50W"]}
            />
            <MInput
              label="Channel Program"
              name="specifications.channelProgram"
              type="text"
              defaultValue="1000+"
              required={true}
            />
            <MInput
              label="Warranty"
              name="specifications.warranty"
              type="text"
              defaultValue="1 years"
              required={true}
            />
          </div>
        </div>
        <button
          type="submit"
          className=" mt-5  bg-blue-600 w-full py-2 text-white font-semibold text-[16px]"
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </MForm>
    </div>
  );
};

export default Add_Television;
