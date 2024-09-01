import image from "../img/icon-upload-image.svg";
import { useRef, useState } from "react";
import { useImageState } from "./zustand";

function Profiles() {
  const inputRef = useRef(null);
  const [imageURL, setImageURL] = useState("");
  const { state, list, setState, setList } = useImageState((state) => state);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageURL(imageUrl);
      setState(imageUrl);
    }
  };

  const [inputfrist, setInputFrist] = useState("");
  const [inputsecond, setInputSecond] = useState("");
  const [inputemail, setInputEmail] = useState("");

  return (
    <>
      <div className=" h-auto bg-white m-4">
        <div className="flex flex-col justify-center">
          <h1 className="sm:text-4xl text-2xl m-3 sm:m-8 font-bold">
            Profile Details
          </h1>
          <p className="text-gray-500 ml-3 sm:ml-8 text-[10px] sm:text-lg">
            Add your details to create a personal touch to your profile.
          </p>
        </div>
        <div className=" h-auto rounded-lg bg-gray-50 m-2 flex flex-col justify-center">
          <div className="sm:w-full w-80 h-auto flex justify-center"></div>
          <div className="flex w-80 h-32 sm:w-full sm:h-auto  ">
            <div className="flex items-center justify-center">
              <h1 className="text-center text-[10px] sm:text-lg m-4">
                Profile picture
              </h1>
            </div>
            <div
              onClick={handleImageClick}
              className="bg-violet-100 text-indigo-500 text-[10px] sm:text-lg font-medium rounded-md m-4 w-44 h-44 border-[1px] flex justify-center flex-col"
            >
              <input
                type="file"
                ref={inputRef}
                onChange={handleImageChange}
                className="hidden"
              />
              {imageURL ? (
                <img
                  img={imageURL}
                  src={imageURL}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-md"
                />
              ) : (
                <div className="flex flex-col justify-center sm:mb-0 mb-12">
                  <img
                    src={image}
                    width={30}
                    height={30}
                    alt=""
                    className="sm:ml-16  ml-10 text-[10px] sm:text-lg"
                  />
                  <p className="text-center  font-semibold">+ Upload Image</p>
                </div>
              )}
              <div className="flex items-center justify-center"></div>
            </div>
            <p className="sm:text-sm text-[10px] mt-10 sm:mt-20">
              Image must be below 1024x1024px.
              <br /> Use PNG or JPG format.
            </p>
          </div>
          <div className=" h-auto rounded-lg bg-gray-50 flex flex-col justify-center">
            <div className="flex justify-center m-2 flex-col">
              <div className="flex mt-4">
                <p className="text-center text-[10px] w-20 sm:text-base  flex justify-start items-center">
                  First name*
                </p>
                <input
                  value={inputfrist}
                  onChange={(e) => {
                    setInputFrist(e.target.value);
                  }}
                  type="text"
                  placeholder=" e.g Umar"
                  className="text-indigo-500 border-gray-300 sm:text-lg text-[10px] rounded-md sm:w-96 w-60 ml-4 sm:ml-16 sm:h-12 h-8 border-[1px] hover:border-red-500"
                />
              </div>
              <div className="flex mt-4">
                <p className="text-center w-20 flex text-[10px] sm:text-base justify-start items-center">
                  Last name*
                </p>
                <input
                  value={inputsecond}
                  onChange={(e) => {
                    setInputSecond(e.target.value);
                  }}
                  type="text"
                  placeholder=" e.g Azeem"
                  className="text-indigo-500 border-gray-300 sm:text-lg text-[10px] rounded-md sm:w-96 w-60 ml-4 sm:ml-16 sm:h-12 h-8 border-[1px] hover:border-red-500"
                />
              </div>
              <div className="flex mt-4">
                <p className="text-center w-20 flex text-[10px] sm:text-base justify-start items-center">
                  Email
                </p>
                <input
                  value={inputemail}
                  onChange={(e) => {
                    setInputEmail(e.target.value);
                  }}
                  type="text"
                  placeholder=" e.g email@example.com"
                  className="text-indigo-500 border-gray-300 sm:text-lg text-[10px] rounded-md sm:w-96 w-60 ml-4 sm:ml-16 sm:h-12 h-8 border-[1px] hover:border-red-500"
                />
              </div>
            </div>
          </div>
          <div>
            <hr />
            <div className="flex justify-end mt-8 mr-6">
              <button
                onClick={() => {
                  setList({
                    inputFirst: inputfrist,
                    inputSecond: inputsecond,
                    inputEmail: inputemail,
                  });
                  // props.addlist(inputfrist, inputsecond, inputemail);
                  setInputFrist("");
                  setInputSecond("");
                  setInputEmail("");
                  setImageURL("");
                }}
                className="text-white bg-violet-700 text-sm  sm:text-lg font-medium rounded-md w-14 h-8 sm:w-28 sm:h-12 border-[1px] border-indigo-500 hover:border-indigo-100 hover:bg-violet-300"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profiles;
