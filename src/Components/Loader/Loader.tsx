import { LuLoader } from "react-icons/lu";
const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <LuLoader className="h-12 w-12 animate-spin" />
    </div>
  );
};

export default Loader;
