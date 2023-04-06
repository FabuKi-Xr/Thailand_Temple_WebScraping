import React from "react";

export default function DefaultTable() {
  return (
    <div className="bg-white p-5 text-xl rounded-md  min-w-[300px] 2xl:h-[600px] xl:h-[500px] md:h-[500px] sm:h-[500px]  xs:h-[500px] h-[500px]">
      <div className="flex justify-center items-center h-full">
        <div className=" space-y-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 mx-auto" 
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>

          <p>กรุณาเลือกจังหวัด</p>
        </div>
      </div>
    </div>
  );
}
