import { useState } from "react";
import Drop from "./Drop";

function Add({linkNumber,deleteItem, index}) {
  const [list, setList] = useState("");
  const account = [
    "Github",
    "frontend Mentor",
    "Twitter",
    "Youtube",
    "Twitch",
    "LinkedIn",
    "Youtube",
    "Facebook",
    "twitch",
    "Dev.to",
    "Codewars",
    "Codepen",
    "freeCodeCamp",
    "Gitlab",
    "hashnode",
    "Stack Overflow",
  ];

  const handleListChange = (event) => {
    setList(event.target.value);
  };
  const listAccount = account.filter((account) =>
    account.toLowerCase().includes(account.toLowerCase())
  );

  return (
    <>
      <div className="">
        <div
          type="text"
          placeholder="Filter fruits"
          value={list}
          onChange={handleListChange}
          className="flex justify-between font-bold text-gray-500 mt-2 ml-2 text-md"
        >
          <h1>=Links #{linkNumber}</h1>
          <button  onClick={() => {
                deleteItem(index);
              }} className="text-start mr-4 font-normal flex text-lg  text-gray-600">
            Remove
          </button>
        </div>
        <div className="flex justify-center flex-col ">
          <p className="text-start ml-2  flex text-sm  text-gray-600">
            Platfrom
          </p>{" "}
          {/* <input
            type="text"
            placeholder=" e.g Umar"
            className=" text-indigo-500 border-gray-300 text-md rounded-md  m-2 h-12 border-[1px] hover:border-red-500"
          /> */}
          <Drop selected={'Github'}>
            <ul>
              {listAccount.map((account, index) => (
                <li
                  key={index}
                  className=" text-indigo-500 border-gray-300 text-md rounded-md text-start p-2 m-2 h-12 border-[1px] hover:border-red-500"
                >
                  {account}
                </li>
              ))}
            </ul>
          </Drop>
        </div>
        <div className="flex justify-center flex-col ">
          <p className="text-start ml-2  flex text-sm text-gray-600">Link</p>{" "}
          <input
            type="email"
            id="helper-text"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
           />
        </div>
      </div>
    </>
  );
}
export default Add;
