import React from "react";

function Apps() {
  return (
    <div className=" w-[1360px] bg-[#f8f8f8] mt-6 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl border border-[#E2E2EA]">
      <ul className="p-[20px] flex flex-wrap gap-4">
        <li className="bg-white w-[250px] p-[10px]  rounded-lg">
          <div className="flex items-center gap-5">
            <img src="Logo small.svg" alt="" width={35} height={35} />
            <h3 className="font-semibold">Bitbucket Cloud</h3>
          </div>
        </li>
        <li className="bg-white w-[250px] p-[10px]  rounded-lg">
          <div className="flex items-center gap-5">
            <img src="Logo small (1).svg" alt="" width={35} height={35} />
            <h3 className="font-semibold">Dropbox Paper</h3>
          </div>
        </li>
        <li className="bg-white w-[250px] p-[10px]  rounded-lg">
          <div className="flex items-center gap-5">
            <img src="Logo small (2).svg" alt="" width={35} height={35} />
            <h3 className="font-semibold">Giphy</h3>
          </div>
        </li>
        <li className="bg-white w-[250px] p-[10px]  rounded-lg">
          <div className="flex items-center gap-5">
            <img src="Logo small (3).svg" alt="" width={35} height={35} />
            <h3 className="font-semibold">Google Calendar</h3>
          </div>
        </li>
        <li className="bg-white w-[250px] p-[10px]  rounded-lg">
          <div className="flex items-center gap-5">
            <img src="Logo small (4).svg" alt="" width={35} height={35} />
            <h3 className="font-semibold">Google Drive</h3>
          </div>
        </li>
        <li className="bg-white w-[250px] p-[10px]  rounded-lg">
          <div className="flex items-center gap-5">
            <img src="Logo small (5).svg" alt="" width={35} height={35} />
            <h3 className="font-semibold">Notion</h3>
          </div>
        </li>
        <li className="bg-white w-[250px] p-[10px]  rounded-lg">
          <div className="flex items-center gap-5">
            <img src="Bitmap.svg" alt="" width={35} height={35} />
            <h3 className="font-semibold">Trello</h3>
          </div>
        </li>
        <li className="bg-white w-[250px] p-[10px]  rounded-lg">
          <div className="flex items-center gap-5">
            <img src="Bitmap (1).svg" alt="" width={35} height={35} />
            <h3 className="font-semibold">Intercom</h3>
          </div>
        </li>
        <li className="bg-white w-[250px] p-[10px]  rounded-lg">
          <div className="flex items-center gap-5">
            <img src="Logo small (6).svg" alt="" width={35} height={35} />
            <h3 className="font-semibold">Google Tag Manager</h3>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Apps;
