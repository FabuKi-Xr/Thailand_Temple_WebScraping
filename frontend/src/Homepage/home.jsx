import React, { useState } from "react";
import BtnProvince from "./component/btnProvince";
import Table_Temple from "./component/table/table";
import Krabi from "./component/table/datatemple/กระบี่";
import Kan from "./component/table/datatemple/กาญจนบุรี";
import Chn from "./component/table/datatemple/เชียงใหม่";
import DefaultTable from "./component/table/noSelect";
import BtnCSV from "./component/btnCSV";

function Home() {
  const [isChecked, setIsChecked] = useState(["กระบี่"]);
  const formatKan = Kan.split("\n");
  const kanjanaburi = formatKan.map((item) => ({
    temple: item != "" ? item : "",
    province: "กาญจนบุรี",
    // province
  }));

  const krabii = Krabi.map((item) => ({
    temple: item.temple != "" ? item.temple : "",
    province: "กระบี่",
  }));

  const formatCM = Chn.split("\n");
  const chiangmai = formatCM.map((item) => ({
    temple: item != "" ? item : "",
    province: "เชียงใหม่",
  }));

  const dataC = [
    {
      name: "กระบี่",
      data: krabii,
    },
    {
      name: "กาญจนบุรี",
      data: kanjanaburi,
    },
    {
      name: "เชียงใหม่",
      data: chiangmai,
    },
  ];

  const dataSelect = dataC
    .filter((t) => isChecked.includes(t.name))
    .map((i) => i.data);
  const mergedData = dataSelect.flat();

  return (
    <div className="relative bg-[#95CCFF] h-screen ">
      <img
        className=" w-100 h-100 absolute  z-99 bottom-0 opacity-50"
        src="/asset/bgwat.png"
        alt="bg image"
      />
      <div className="relative 2xl:mx-56 xl:mx-32 flex justify-center font-IBM ">
        <div className=" 2xl:py-4 xl:py-4 md:py-4 w-full ">
          <h1 className="text-center text-5xl font-bold text-white drop-shadow-md">
            รายชื่อวัดไทย
          </h1>
          <div className="grid grid-cols-3 gap-2  w-full">
            <div className=" flex justify-center p-10">
              <BtnProvince isChecked={isChecked} setIsChecked={setIsChecked} />
            </div>
            <div className="col-span-2 p-10">
              {dataSelect.length != 0 ? (
                <Table_Temple data={mergedData} />
              ) : (
                <DefaultTable />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="relative 2xl:mx-56 xl:mx-32 flex justify-end font-IBM px-10">
     
        <BtnCSV data={kanjanaburi}/>
      </div>
    </div>
  );
}

export default Home;
