import React from "react";


function Table_Temple(props) {
  const {data} =props


 
 
  return (
    <div className=" bg-white p-5 text-xl rounded-md min-w-[300px] 2xl:h-[600px] xl:h-[500px] md:h-[500px] sm:h-[500px]  xs:h-[500px] h-[500px] overflow-y-scroll   scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 scrollbar-track">
      <div className=" grid grid-cols-2 w-full">
        {data.map((item) => (
          <p className="p-2 cursor-default ">{item.temple}</p>
        ))}
      </div>
   
    </div>
  );
}

export default Table_Temple;
