import { useState } from "react";
import { useImageState } from "../component/zustand";


function User() {
  const {state,list} = useImageState((state) => state);


  return (
    <>
      <div className="flex  mt-8 ">
        <div className="w-2/4 h-auto bg-white m-2">
          <div className="">
            <img
              src={state}
             
              className="rounded-full w-28 ml-12 h-28 flex text-center items-center justify-center bg-zinc-100"
            />
          </div>
          {/* {list.map((item, index) => ( */}
            <div className="text-start">
            {list.inputFirst || list.inputSecond ? (
  <h1 className="text-md mt-10 text-black text-start font-bold">
    {list.inputFirst} {list.inputSecond}
  </h1>
) : (
  <div className="w-52 h-4 mt-4 bg-zinc-100 rounded-lg"></div>
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
