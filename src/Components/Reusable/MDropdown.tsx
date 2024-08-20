import { useFormContext } from "react-hook-form";

type TMDropdown = {
  label: string;
  defaultValue?: string;
  items: string[];
  name: string;
};

const MDropdown = ({ label, defaultValue, items, name }: TMDropdown) => {
  const { register } = useFormContext();

  const formatValue = (item: string) => item.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col">
      <h1 className="font-medium">{label}:</h1>
      <select
        {...register(name, { required: true })}
        defaultValue={defaultValue && defaultValue}
        className="w-full mt-1 border-2 bg-white px-3 py-2 rounded-md outline-none placeholder:text-black/50 placeholder:text-sm shadow-current focus:ring-1"
      >
        <option value="">Select one</option>
        {items?.map((item) => (
          <option key={item} value={formatValue(item)}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MDropdown;
