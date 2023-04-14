import React from 'react'

function Navbar() {
    return (
        <nav
          className="flex justify-between items-center h-16 bg-[#95CCFF] text-black relative shadow-sm font-IBM "
         
        >

          <div className="p-4 ml-10 font-bold uppercase" >
              Thai Temple
            </div>
         
          <div className="pr-8 flex mr-10">
            <a className=" cursor-pointer p-4 hover:border-b-2 hover:border-gray-900 pb-2 border-b-2 border-transparent transition duration-200" to="/">
            RegEx
            </a>
            <a className="cursor-pointer p-4 hover:border-b-2 hover:border-gray-900 pb-2 border-b-2 border-transparent transition duration-200" href="https://github.com/FabuKi-Xr/Thailand_Temple_WebScraping.git">
            Source Code
            </a>
            
          
          </div>
        </nav>
      );
}

export default Navbar