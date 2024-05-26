import React from "react";

function Inputs() {
  return (
    <div className=" w-[1360px] bg-[#f8f8f8] mt-6 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl border border-[#E2E2EA]">
      <h1 className="font-bold text-2xl p-[20px]">Loyiha ketma-ketligi</h1>
      <div className="p-[20px]  ">
        <div className="w-full flex gap-[20px]">
          <div className="w-[644px]">
            <h3 className="mb-[10px] font-semibold">Ustun nomi</h3>
            <input
              className="w-full rounded border border-[#E2E2EA] p-2"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="w-[644px]">
            <h3 className="mb-[10px] font-semibold">Key</h3>
            <input
              className="w-full rounded border border-[#E2E2EA] p-2"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>

        <div className="w-full flex gap-[20px] mt-[25px] mb-[25px]">
          <div className="w-[644px]">
            <h3 className="mb-[10px] font-semibold">Ustun nomi</h3>
            <input
              className="w-full rounded border border-[#E2E2EA] p-2"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="w-[644px]">
            <h3 className="mb-[10px] font-semibold">Key</h3>
            <input
              className="w-full rounded border border-[#E2E2EA] p-2"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inputs;
