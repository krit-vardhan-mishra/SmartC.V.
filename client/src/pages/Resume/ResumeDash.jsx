import { PlusSquare } from "lucide-react";

const ResumeDash = () => {
  return (
    <div className="relative  min-h-screen flex flex-col items-center  px-4 bg-white">
      <h1 className=" text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800">
        ResumeDash
      </h1>

      {/* Main Neon Box */}
      <div className="relative flex items-center justify-center w-full max-w-[1200px] h-80 sm:h-96 rounded-3xl flex-col gap-4 bg-gray-600 border-2 border-blue-500 shadow-[0_0_15px_#3b82f6,0_0_30px_#3b82f6] transition-all duration-300 hover:shadow-[0_0_30px_#3b82f6,0_0_50px_#3b82f6]">
        <div className="cursor-pointer">
          <PlusSquare size={80} className="text-white" />
        </div>
        <h2 className="text-white text-base sm:text-lg font-semibold text-center px-4">
          Click to start creating your resume
        </h2>
      </div>
    </div>
  );
};

export default ResumeDash;
