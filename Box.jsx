import github   from '../img/icon-github-link-box.svg';
import arrow   from '../img/icon-arrow-right.svg';
function Box(){
    return(
        <>
        <div className="flex justify-center">
        <div className="w-2/5 h-auto bg-white m-1">
        {/* <h1>{inputfrist} {inputsecond} </h1>
        <h3>{inputemail}</h3> */}
        </div>
        </div>
<div className='w-52 bg-black rounded-lg flex mb-4'><img src={github} className='p-2'></img> <p className='text-white text-start pl-1 pt-4 pb-4'>Github</p> <img src={arrow} className='pl-24 '></img></div>
</>
    );
}
export default Box;