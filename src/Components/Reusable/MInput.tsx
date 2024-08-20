import { useFormContext } from "react-hook-form";

type TMInput = {
  type: string;
  label: string;
  defaultValue?: string;
  name: string;
  required?: boolean;
};
const MInput = ({ type, label, defaultValue, name, required }: TMInput) => {
  const { register } = useFormContext();
  return (
    <div>
      <div className="flex flex-col">
        <h1 className="font-medium">{label}:</h1>
        <input
          className="w-full mt-1 border-2 bg-white px-3 py-1.5 rounded-md  outline-none placeholder:text-black/50 placeholder:text-sm shadow-current focus:ring-1 "
          type={type}
          placeholder={label}
          {...register(name)}
          defaultValue={defaultValue && defaultValue}
          required={required}
        />
        {/* {errors.name && <span>This field is required</span>} */}
      </div>
    </div>
  );
};

export default MInput;
