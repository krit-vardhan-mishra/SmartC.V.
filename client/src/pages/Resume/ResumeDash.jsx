import { PlusSquare } from "lucide-react";
import { useState } from "react";
import ResumeModal from "./ResumeModel";

const ResumeDash = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCreateResume = (title) => {
    console.log("Resume Title:", title);
    setShowModal(false);
  };

  return (
    <div className="relative  min-h-screen flex flex-col gap-2 items-center   px-4 bg-white">
      <h1 className=" text-3xl sm:text-4xl mt-7 font-bold text-center mb-10 text-gray-800">
        ResumeDash
      </h1>

      {/* Main Neon Box */}
      <div className="relative flex items-center justify-center w-full max-w-[1200px] h-80 sm:h-96 rounded-3xl flex-col gap-4 bg-gray-200 border-2 border-blue-500 shadow-[0_0_15px_#3b82f6,0_0_30px_#3b82f6] transition-all duration-300 hover:shadow-[0_0_30px_#3b82f6,0_0_50px_#3b82f6]">
        <div className="cursor-pointer" onClick={() => setShowModal(true)}>
          <PlusSquare size={80} className="text-black" />
        </div>
        <h2 className="text-black text-base sm:text-lg font-semibold text-center px-4">
          Click to start creating your resume
        </h2>
      </div>
      {showModal && (
        <ResumeModal
          onClose={() => setShowModal(false)}
          onCreate={handleCreateResume}
        />
      )}
      <div className="w-full my-10 min-h-[200px] bg-blue-100 flex flex-col gap-7 py-6">
        <h1 className="text-3xl font-bold text-center">History</h1>
        <div className="flex justify-end px-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
          <div className="bg-blue-200 h-32 w-full flex items-center justify-center">
            Resume 1
          </div>
          <div className="bg-blue-200 h-32 w-full flex items-center justify-center">
            Resume 2
          </div>
          <div className="bg-blue-200 h-32 w-full flex items-center justify-center">
            Resume 3
          </div>
          <div className="bg-blue-200 h-32 w-full flex items-center justify-center">
            Resume 4
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeDash;
