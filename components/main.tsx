import "animate.css";

export function Main() {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4">
       
        <p className=" md:w-[38%] animate__animated animate__backInUp delay-2000 mb-5 text-center">
          Dream of limitless coding collaboration? DevTest merges Replits
          dynamic coding with Google Meets real-time magic. Code and
          communicate effortlessly in one exhilarating space. Join now!
        </p>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="enter your url"
            className="px-4 py-2 rounded-md text-black "
          />
          <button className="p-[3px] relative ">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              start meeting
            </div>
          </button>
          <button className="p-[3px] relative ">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Join meet
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Main;
