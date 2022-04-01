import {Link} from "react-router-dom"

export default function Landing() {
  return (
    <div className="w-[100%] h-[100%]">
      <div className="flex flex-col w-100 h-[100vh] pt-4">
        <h1 className="text-[#37B9F3] font-['Ubuntu'] text-4xl font-medium p-5">
          CMQ
        </h1>
        <img
          src="../assests/fork.png"
          className="flex-[5] opacity-5 pt-14"
          alt="fork"
        />
        <div className="flex flex-col mt-auto pb-8 flex-[2] justify-center">
          <Link
            to="/login"
            className="text-3xl text-[#37B9F3] font-normal align-middle justify-center text-center p-1 mb-5 border-2 rounded"
          >
            Log to the App
          </Link>
          <Link
            to="/"
            className="text-3xl text-[#37B9F3] font-normal align-middle justify-center text-center p-1 mb-5 border-2 rounded"
          >
            Exit
          </Link>
        </div>
      </div>
    </div>
  );
}
