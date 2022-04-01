import {Link} from 'react-router-dom'

export default function Login() {
  return (
    <div className="h-screen w-100 pt-10 flex flex-col justify-between">
      <Link to="/landing" className="text-[#37B9F3] text-5xl">Login</Link>
      <div className="h-100 flex flex-col mt-auto pb-16 items-center">
        <div className="flex flex-row bg-[#212D3F] items-center w-[100%] h-14 mb-3 overflow-hidden">
          <label className="flex-1 text-[#7986BE] text-l mr-1s ml-2 font-Ubuntu" htmlFor="username">username</label>
          <input className=" bg-[#212D3F] h-full flex-1" type="text" />
        </div>
        <div className="flex flex-row bg-[#212D3F] items-center w-[100%] h-14 mb-3 overflow-hidden">
          <label className="flex-1 text-[#7986BE] text-l mr-1 ml-2 font-Ubuntu" htmlFor="username">password</label>
          <input className="bg-[#212D3F] h-full flex-1" type="password" />
        </div>
        <Link to="/home" className="w-full" ><button className="bg-[#212D3F] text-[#37B9F3] text-3xl font-Ubuntu p-2 w-full">Submit</button></Link>
      </div>
    </div>
  );
}
