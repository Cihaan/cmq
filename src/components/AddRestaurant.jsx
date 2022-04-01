export default function AddRestaurant() {
  return (
    <div className="h-full">
      <div className="flex items-center">
        {/* on click router goes back */}
        <h1 className="text-[#37B9F3] font-['Ubuntu'] text-center text-3xl font-medium p-5 absolute left-0">
          &lt;
        </h1>
        <h1 className="text-[#37B9F3] font-['Ubuntu'] text-center text-3xl font-medium p-5 ml-2 flex-1">
          Add a restaurant
        </h1>
      </div>
      <div className="flex flex-col h-screen">
        <div className="flex bg-[#212D3F]  h-14 items-center overflow-hidden mb-5 mt-16">
          <label className="text-[#7986BE] ml-3" htmlFor="name">name</label>
          <input className="bg-[#212D3F] flex-1 h-full ml-3 text-white" type="text" />
        </div>
        <div className="flex bg-[#212D3F]  h-14 items-center overflow-hidden mb-5">
          <label className="text-[#7986BE] ml-3" htmlFor="name">place</label>
          <input className="bg-[#212D3F] flex-1 h-full ml-3 text-white" type="text" />
        </div>
        <div className="flex bg-[#212D3F]  h-14 items-center overflow-hidden mb-5">
          <label className="text-[#7986BE] ml-3" htmlFor="name">serving</label>
          <input className="bg-[#212D3F] flex-1 h-full ml-3 text-white" type="text" />
        </div>
        <div className="flex bg-[#212D3F]  h-14 items-center overflow-hidden mb-5">
          <label className="text-[#7986BE] ml-3" htmlFor="name">note</label>
          <input className="bg-[#212D3F] flex-1 h-full ml-3 text-white" type="number" />
        </div>
        <div className="flex bg-[#212D3F]  h-14 items-center overflow-hidden mb-5">
          <label className="text-[#7986BE] ml-3" htmlFor="lien">lien</label>
          <input className="bg-[#212D3F] flex-1 h-full ml-3 text-white" type="text" />
        </div>
        <button className="text-[#37B9F3] p-3 border-2 rounded text-xl">Submit</button>
      </div>
    </div>
  );
}
