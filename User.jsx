import { useState } from "react";
import { useImageState } from "../component/zustand";


function User() {
  const {state,list} = useImageState((state) => state);


  return (
    <>
      <div className="flex mt-2 sm:mt-8 ">
        <div className="sm:w-2/4 w-24 h-auto bg-white m-4 sm:m-2">
          <div className="">
            <img
              src={state}
             
              className="rounded-full w-20  ml-4 sm:ml-12 h-20  sm:w-28 sm:h-28 flex text-center items-center justify-center bg-zinc-100"
            />
          </div>
          {/* {list.map((item, index) => ( */}
            <div className="text-start">
            {list.inputFirst || list.inputSecond ? (
  <h1 className="text-md mt-10 text-black text-start font-bold">
    {list.inputFirst} {list.inputSecond}
  </h1>
) : (
  <div className=" w-32 sm:w-52 h-4 mt-4 bg-zinc-100 rounded-lg"></div>
)}
           {list.inputEmail ?  ( <h3 className="text-sm mt-1 text-gray-500 text-start">
                {list.inputEmail}
              </h3>
           ) : ( <div className="w-28 h-2  mt-6 bg-zinc-100 rounded-lg"></div>)}
          
        </div>
      </div>
      </div>
      
    </>
  );
}

export default User;
