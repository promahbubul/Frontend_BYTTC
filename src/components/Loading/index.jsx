import { MoonLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full h-full justify-center items-center flex ">
      <div className="">
        <MoonLoader color="white" />
      </div>
    </div>
  );
};
export default Loading;
