import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";

interface MInputTagProps {
  placeholder?: string;
  demoTags?: string[];
  label: string;
  name: string;
  cleanForm: boolean;
}

const MInputTag: React.FC<MInputTagProps> = ({
  placeholder = "Add a tag and press Enter",
  demoTags = [],
  label,
  name,
  cleanForm,
}) => {
  const [tags, setTags] = useState<string[]>(["Test", "Test2"]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const { register, setValue } = useFormContext();

  useEffect(() => {
    // Set the value for the "tags" field in React Hook Form whenever tags change
    setValue(name, tags);
  }, [tags, setValue, name]);

  useEffect(() => {
    if (cleanForm) {
      setTags([]); // Reset tags
      setInputValue(""); // Clear input value
    }
  }, [cleanForm]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      addTag(inputValue.trim());
    }
  };

  const addTag = (tag: string) => {
    if (!tags.includes(tag)) {
      setTags((prevTags) => [...prevTags, tag]);
      setInputValue(""); // Clear input after adding a tag
    }
  };

  const removeTag = (index: number) => {
    setTags((prevTags) => prevTags.filter((_, i) => i !== index));
  };

  const matchingTags = demoTags.filter(
    (tag) =>
      tag.toLowerCase().startsWith(inputValue.toLowerCase()) && // Match from the start
      !tags.includes(tag) // Avoid showing already selected tags
  );

  const handleCancel = () => {
    setInputValue(""); // Clear input value when the cancel button is clicked
  };

  return (
    <div className="w-full relative">
      <h1 className="font-medium mb-1">{label}:</h1>
      <div className="flex flex-wrap items-center border border-gray-300 rounded-md">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center bg-blue-500 text-white px-3 py-1 rounded-full m-1"
          >
            <span className="text-[12px]">{tag}</span>
            <button
              type="button"
              onClick={() => removeTag(index)}
              className="ml-2 text-[12px] font-semibold focus:outline-none"
            >
              ✕
            </button>
          </div>
        ))}

        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="outline-none border-none flex-grow px-3 py-0.5 m-1"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
      {isFocused && inputValue && matchingTags.length > 0 && (
        <div className="absolute left-0 w-full mt-1 bg-white border border-gray-300 rounded shadow-md z-10 max-h-[150px] overflow-y-auto">
          <ul>
            {matchingTags.map((tag, index) => (
              <li
                key={index}
                onMouseDown={() => addTag(tag)} // Use onMouseDown to prevent losing focus
                className="cursor-pointer p-2 hover:bg-gray-200 text-[12px]"
              >
                {tag}
              </li>
            ))}
          </ul>
          {/* Cancel Button */}
          <div
            onMouseDown={handleCancel}
            className="cursor-pointer p-2 text-red-500 hover:bg-gray-200 text-[12px] font-semibold"
          >
            Cancel
          </div>
        </div>
      )}

      {/* Hidden input to register the tags value */}
      <input type="hidden" {...register(name)} value={tags.join(",")} />
    </div>
  );
};

export default MInputTag;
