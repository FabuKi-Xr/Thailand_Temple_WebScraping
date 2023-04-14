import React, { useState,useEffect} from "react";
import BtnProvince from "./component/btnProvince";
import Table_Temple from "./component/table/table";
import DefaultTable from "./component/table/noSelect";
import BtnCSV from "./component/btnCSV";
import axios from "axios";
function Home() {
  const [isChecked, setIsChecked] = useState(["กระบี่"]);
  const [dataTemple_KJ, setDataTemple_KJ] = useState([]);
  const [dataTemple_UD, setDataTemple_UD] = useState([]);
  const [dataTemple_NK, setDataTemple_NK] = useState([]);
  const [dataTemple_KB, setDataTemple_KB] = useState([]);
  const [dataTemple_CM, setDataTemple_CM] = useState([]);
  const [data_CSV, setData_CSV] = useState([]);

  function getDataCSV() {
    axios
      .get(
        `https://toc-api.charonyx.studio/temple`,
       
      )

      .then(function (response) {
   
        
        if(response.status=="200"){
          setData_CSV(response.data.temple);
        }
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }


 const urls = [
    'https://toc-api.charonyx.studio/temple/กระบี่',
    'https://toc-api.charonyx.studio/temple/กาญจนบุรี',
    'https://toc-api.charonyx.studio/temple/อุดรธานี',
    'https://toc-api.charonyx.studio/temple/นครราชสีมา',
    'https://toc-api.charonyx.studio/temple/เชียงใหม่',

  ];
  
  function getData() {
  Promise.all(urls.map(url => axios.get(url)))
    .then(responses => {
    
      setDataTemple_KB(responses[0].data.กระบี่);
      setDataTemple_KJ(responses[1].data.กาญจนบุรี);
      setDataTemple_UD(responses[2].data.อุดรธานี);
      setDataTemple_NK(responses[3].data.นครราชสีมา);
      setDataTemple_CM(responses[4].data.เชียงใหม่);
    })
    .catch(error => {
     
      console.error(error);
    });
  
  }
  
  useEffect(() => {
    getData();
  }, [isChecked]);

  useEffect(() => {
    getDataCSV();
  }, []);




  const dataList = [
    {
      name: "กระบี่",
      data: dataTemple_KB,
    },
    {
      name: "กาญจนบุรี",
      data: dataTemple_KJ,
    },
    {
      name: "เชียงใหม่",
      data: dataTemple_CM,
    },
    {
      name: "อุดรธานี",
      data: dataTemple_UD,
    },
    {
      name: "นครราชสีมา",
      data: dataTemple_NK,
    },
  ];

  const dataSelect = dataList
    .filter((t) => isChecked.includes(t.name))
    .map((i) => i.data);
  const mergedData = dataSelect.flat();

  console.log(data_CSV)
  
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
      <div className="relative 2xl:mx-56 xl:mx-32 flex justify-end font-IBM px-10 ">     
        <BtnCSV data={data_CSV}/>
      </div>
    </div>
  );
}

export default Home;
