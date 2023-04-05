import React from "react";

function BtnCard({ label, checked, onChange }) {
  return (
    <div className={`flex ${checked?" bg-blue-500 text-white font-bold border-0":"bg-white"}   p-3 2xl:w-60 sm:w-48 rounded-md hover:scale-110  transition duration-150 mb-5`}>
      <label className="flex items-center w-full cursor-pointer">
        <div className="w-6 h-6 border  border-gray-300 rounded-full mr-3 flex flex-shrink-0 justify-center items-center">
          <input
            id={label}
            type="checkbox"
            className="hidden"
            checked={checked}
            onChange={onChange}
          />
          {checked && (
            <svg
              className="w-6 h-6 fill-green-500 pointer-events-none"
              viewBox="0 0 20 20"
            >
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
          )}
        </div>
        <div>{label}</div>
      </label>
    </div>
  );
}

export default BtnCard;
