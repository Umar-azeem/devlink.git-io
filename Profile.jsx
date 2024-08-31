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
      <div className="w-2/4 h-auto bg-white m-4">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl m-8 font-bold">Profile Details</h1>
          <p className="text-gray-500 ml-8 text-lg">
            Add your details to create a personal touch to your profile.
          </p>
        </div>
        <div className="w-[90%] h-auto rounded-lg bg-gray-50 m-2 flex flex-col justify-center">
          <div className="w-full h-auto flex justify-center"></div>
          <div className="flex">
            <div className="flex items-center justify-center">
              <h1 className="text-center text-lg m-4">Profile picture</h1>
            </div>
            <div
              onClick={handleImageClick}
              className="bg-violet-100 text-indigo-500 text-lg font-medium rounded-md m-4 w-44 h-44 border-[1px] flex justify-center flex-col"
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
                <div>
                  <img
                    src={image}
                    width={40}
                    height={40}
                    alt=""
                    className="ml-16 text-lg"
                  />
                  <p className="text-center font-semibold">+ Upload Image</p>
                </div>
              )}
              <div className="flex items-center justify-center"></div>
            </div>
            <p className="text-sm mt-20">
              Image must be below 1024x1024px.
              <br /> Use PNG or JPG format.
            </p>
          </div>
          <div className="w-[90%] m-12 h-auto rounded-lg bg-gray-50 flex flex-col justify-center">
            <div className="flex justify-center m-2 flex-col">
              <div className="flex mt-4">
                <p className="text-center flex justify-start items-center">
                  First name*
                </p>
                <input
                  value={inputfrist}
                  onChange={(e) => {
                    setInputFrist(e.target.value);
                  }}
                  type="text"
                  placeholder=" e.g Umar"
                  className="text-indigo-500 border-gray-300 text-md rounded-md w-96 ml-16 h-12 border-[1px] hover:border-red-500"
                />
              </div>
              <div className="flex mt-4">
                <p className="text-center flex justify-center items-center">
                  Last name*
                </p>
                <input
                  value={inputsecond}
                  onChange={(e) => {
                    setInputSecond(e.target.value);
                  }}
                  type="text"
                  placeholder=" e.g Azeem"
                  className="text-indigo-500 border-gray-300 text-md rounded-md w-96 ml-16 h-12 border-[1px] hover:border-red-500"
                />
              </div>
              <div className="flex mt-4">
                <p className="text-center flex justify-center items-center">
                  Email
                </p>
                <input
                  value={inputemail}
                  onChange={(e) => {
                    setInputEmail(e.target.value);
                  }}
                  type="text"
                  placeholder=" e.g email@example.com"
                  className="text-indigo-500 text-md rounded-md w-96 ml-[104px] h-12 border-[1px] border-gray-300 hover:shadow-lg hover:border-indigo-500"
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
                className="text-white bg-violet-700 text-lg font-medium rounded-md w-28 h-12 border-[1px] border-indigo-500 hover:border-indigo-100 hover:bg-violet-300"
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
