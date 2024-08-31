import { useState } from "react";
import pic1 from "../img/pic1.svg";
import Add from "./Add";
import Box from "./Box";

function Links({ links, setLinks }) {
  const handleAddLink = () => {
    if (links.length < 4) {
      setLinks([...links, links.length + 1]);
    }
  };
  console.log("lliinnkkss",links)
  const deleteListItem = (key) => {
    // = [0,1,2,3] - key = 3
    const filteredArray = links.filter((e, i) => i !== key);
    setLinks(filteredArray);
  };

  return (
    <>
      <div className="w-2/4 h-auto bg-white m-4">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl m-8 font-bold">Customize your links</h1>
          <p className="text-gray-500 ml-8 text-lg">
            Add/edit/remove links below and then share all your profiles with
            the world
          </p>
          <button
            onClick={handleAddLink}
            className="hover:bg-violet-100 text-indigo-500 text-lg mt-12 font-medium rounded-md ml-4 mr-4 h-12 border-[1px] border-indigo-500"
          >
            + Add new link
          </button>
        </div>
        <div className="w-[90%] h-auto rounded-lg bg-gray-50 m-12 flex flex-col justify-center">
          {Array.isArray(links) && links.length > 0 ? (
            links.map((link, index) => (
              <div key={index} className="m-4">
                <Add key={index} linkNumber={link} index={index} deleteItem={deleteListItem} />
              </div>
            ))
          ) : (
            <div className="w-[90%] h-auto rounded-lg bg-gray-50 m-12 flex flex-col justify-center">
              <div className="w-full h-auto flex justify-center">
                <img src={pic1} className="w-72 h-72" alt="Start" />
              </div>
              <div>
                <h1 className="text-4xl text-center font-bold text-gray-900">
                  Let's get you started
                </h1>
                <p className="text-center text-sm m-8">
                  Use the “Add new link” button to get started. Once you have
                  more <br />
                  than one link, you can reorder and edit them. We’re here to
                  help <br />
                  you share your profiles with everyone!
                </p>
              </div>
            </div>
          )}
        </div>
        <div>
          <hr />
          <div className="flex justify-end mt-8 mr-6">
            <button className="text-white bg-violet-700 text-lg font-medium rounded-md w-28 h-12 border-[1px] border-indigo-500 hover:border-indigo-100 hover:bg-violet-300">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Links;
