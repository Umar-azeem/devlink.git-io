import logo from "./img/logo.svg";
import pro from "./img/profile.svg";
import Profiles from "./component/Profile";
import Links from "./components/Links";
import "./App.css";
import { useState } from "react";
import Box from "./components/Box";
import User from "./components/User";

function App() {
  const [showprofile, setShowProfile] = useState(false);
  const [links, setLinks] = useState([]);
  const newListArray = [...links,"empty","empty","empty","empty","empty"]
  const newFilterArray = newListArray.splice(0,4)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <section className=" h-auto bg-slate-50">
      <div className="">
      <div className="flex relative  justify-center">
      <nav className="sm:w-full w-[250rem] h-auto m-2 sm:m-8 bg-white rounded-lg flex justify-between items-center">
        <div className="flex justify-center m-4">
          <img src={logo} className="sm:w-36 sm:h-14 w-20 h-8" alt="Logo" />
        </div>

        {/* Desktop and Tablet Menu */}
        <div className="hidden lg:flex justify-between px-6 text-center m-4 cursor-pointer">
          <button
            onClick={() => setShowProfile(false)}
            className="bg-violet-100 text-indigo-500 sm:text-lg flex text-center py-2 px-3 justify-center font-medium rounded-md w-32 h-12"
          >
            <svg
              className="px-1 w-6 py-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>
            Links
          </button>
          <button
            onClick={() => setShowProfile(true)}
            className="hover:bg-violet-100 hover:text-indigo-500 text-zinc-500 text-lg text-center py-3 px-2 flex font-medium rounded-md w-48 sm:ml-8 h-14"
          >
            <img src={pro} className="mt-1 px-4" alt="Profile" />
            Profile Details
          </button>
        </div>

        <div className="hidden lg:flex justify-center m-4">
          <button className="hover:bg-violet-100 text-indigo-500 text-lg font-medium rounded-md w-36 ml-8 h-12 border-[1px] border-indigo-500">
            Preview
          </button>
        </div>

        {/* Mobile Menu Button - Hidden in Mobile View */}
        <div className="lg:hidden flex items-center m-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-indigo-500 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden right-10 top-12  absolute bg-white w-36 px-4 pb-4 shadow-lg rounded-lg">
          <button
            onClick={() => setShowProfile(false)}
            className="block w-full text-sm mt-4 text-left py-2 px-4 bg-violet-100 text-indigo-500 font-medium rounded-md"
          >
            Links
          </button>
          <button
            onClick={() => setShowProfile(true)}
            className="block w-full text-[10px] text-left py-2 px-4 mt-2 hover:bg-violet-100 hover:text-indigo-500 text-zinc-500 font-medium rounded-md"
          >
            Profile Details
          </button>
          <button className="block w-full text-sm text-left py-2 px-4 mt-2 hover:bg-violet-100 text-indigo-500 font-medium rounded-md border-[1px] border-indigo-500">
            Preview
          </button>
        </div>
      )}

    </div>






        
   

      


       
       
        {/* <div className="flex justify-center">
          <nav className="w-full h-auto m-8 bg-white bg-inherit rounded-lg flex justify-between">
            <div className="flex justify-center m-4">
              <img src={logo} className="w-36 h-14"></img>
            </div>
            <div className="flex justify-between px-6  text-center m-4 cursor-pointer">
              <button
                onClick={() => setShowProfile(false)}
                className="bg-violet-100 text-indigo-500 sm:text-lg flex text-center py-2 px-3 justify-center font-medium rounded-md w-32 h-12"
              >
                <svg
                  className="px-1 w-6 py-2 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
                Links
              </button>
              <button
                onClick={() => setShowProfile(true)}
                className="hover:bg-violet-100 hover:text-indigo-500 text-zinc-500 text-lg text-center py-3 px-2 flex  font-medium rounded-md w-48 sm:ml-8 h-14"
              >
                <img src={pro} className="mt-1 px-4"></img>Profile Details
              </button>
            </div>
            <div className="flex justify-center m-4">
              <button className=" hover:bg-violet-100 text-indigo-500 text-lg font-medium rounded-md w-36 ml-8 h-12 border-[1px] border-indigo-500">
                perview
              </button>
            </div>
          </nav>
        </div> */}
      </div>
      <div className="lg:flex justify-center">
        
        <div className=" p-20 bg-white lg:w-[519px] flex justify-center items-center ">
          <div className=" h-auto rounded-[10%] border-[1px] lg:w-auto w-[330px] border-zinc-400 flex text-center flex-col justify-center">
            <div className="border-[1px] m-4 rounded-[10%] border-zinc-400 flex justify-center">
              <div className="">
                <div className="sm:w-28 w-16 h-6 ml-12 -mt-1 border-b-[1px]  border-r-[1px]  border-l-[1px] border-zinc-400 bg-white rounded-lg"></div>
               
                <User /> 
                
                {/* <div className="w-28 h-28 m-16  flex text-center justify-center bg-zinc-100 rounded-full"></div>
                <div className="w-52 h-4 mt-4 bg-zinc-100 rounded-lg"></div>
              <div className="w-28 h-2  mt-6 bg-zinc-100 rounded-lg"></div> */}
                {newFilterArray.map((v) => (
                  <>
                  {v == 'empty' ?  <div className="w-36 sm:w-52 h-14 sm:mt-4  mt-2 ml-2 sm:ml-2 sm:mr-2 mb-2 sm:mb-4 bg-zinc-100 rounded-lg"></div>:<div className="mt-6"><Box/></div> }
                  </>
                ))}
              </div>
            </div>
          </div>
          </div>
        {showprofile ? (
          <Profiles />
        ) : (
          <Links setLinks={setLinks} links={links} />
        )}
      </div>
    </section>
  );
}

export default App;
