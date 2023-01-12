import React from "react";

const MenuBarFour = () => {
  return (
    <div className=" pt-10 lg:pt-auto h-40 lg:h-auto space-x-4 justify-center lg:justify-start lg:space-x-0 bg-fashionmobile bg-no-repeat bg-cover lg:bg-auto md:bg-fashion flex flex-row lg:flex-col lg:space-y-8 p-4 lg:w-4/12 lg:rounded-md">
      <div className="flex space-x-4 lg:items-center ">
        <button className="border-[1px] text-white rounded-full flex items-center h-7 p-2 font-medium">
          1
        </button>
        <div className=" hidden lg:block leading-none">
          <p className="text-[10px] text-white">STEP 1</p>
          <span className="text-xs font-normal text-white tracking-widest">
            YOUR INFO
          </span>
        </div>
      </div>
      <div className="flex space-x-4 lg:items-center ">
        <button className="border-[1px] text-white rounded-full flex items-center h-7 p-2 font-medium">
          2
        </button>
        <div className=" hidden lg:block leading-none">
          <p className="text-[10px] text-white">STEP 2</p>
          <span className="text-xs font-normal text-white tracking-widest">
            SELECT PLAN
          </span>
        </div>
      </div>
      <div className="flex space-x-4 lg:items-center ">
        <button className="border-[1px] text-white rounded-full flex items-center h-7 p-2 font-medium">
          3
        </button>
        <div className="hidden lg:block leading-none">
          <p className="text-[10px] text-white">STEP 3</p>
          <span className="text-xs font-normal text-white tracking-widest">
            ADD-ONS
          </span>
        </div>
      </div>
      <div className="flex space-x-4 lg:items-center ">
        <button className="border-[1px] text-black rounded-full flex items-center h-7 p-2 font-medium bg-teal-100">
          4
        </button>
        <div className="hidden lg:block leading-none">
          <p className="text-[10px] text-white">STEP 4</p>
          <span className="text-xs font-normal text-white tracking-widest">
            SUMMARY
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuBarFour;
