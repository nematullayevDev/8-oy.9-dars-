import Apps from "./components/Apps";
import { Header } from "./components/Header";
import Inputs from "./components/Inputs";
function App() {
  return (
    <div className="">
      <Header></Header>
      <div className="hero  w-[1392px] h-[688px]  mx-auto mt-[40px] mb-80 rounded-tl-2xl rounded-tr-2xl  rounded-br-2xl rounded-bl-2xl border border-[#E2E2EA]">
        <div className="pl-[16px]">
          <div className="hero_button w-[1380px]  flex justify-between items-center px-[20px] py-[20px]">
            <span className="font-semibold text-2xl"> Yangi ochish</span>
            <div className="">
              <button className="bg-[#E2E2EA] w-[150px] rounded-lg p-[10px] text-white font-semibold text-[16px]   transition duration-150">
                Ortga
              </button>
              <button className="bg-[#0062FF] w-[150px] ml-6 rounded-lg p-[10px] text-white font-semibold text-[16px]  hover:bg-[#0062ff9f] transition duration-150">
                Davom etish
              </button>
            </div>
          </div>
          <hr className="w-[1360px] " />

          <Apps></Apps>

          <Inputs></Inputs>
        </div>
      </div>
    </div>
  );
}

export default App;
