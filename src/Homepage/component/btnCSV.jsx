import React from "react";
import * as XLSX from "xlsx";
import moment from "moment";
export default function BtnCSV(props) {
  const { data } = props;
  const handleOnExport = () => {
    const mergedData = data.flat();
    let csvData = mergedData.map((item) => ([item] ));
    var wb = XLSX.utils.book_new(),
    ws = XLSX.utils.aoa_to_sheet(csvData);

    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    
    XLSX.writeFile(wb, `Temple_${moment().format('YYYYMMDDHHmmss')}.csv`);
  };
  return (
    <div onClick={() => {          
        handleOnExport();
      }}>
      <div
      
        className="relative cursor-pointer inline-flex items-center bg-[#f0ffb9] justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-blue-700 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 group"
      >
        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-blue-700 group-hover:h-full"></span>
        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-blue-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </span>
        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-green-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </span>
        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
          ดาวโหลดไฟล์ .CSV
        </span>
      </div>
    </div>
  );
}
