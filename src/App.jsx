import React from "react";

import logo from "./images/logo.svg";

function App() {
  return (
    <div className="flex flex-col w-full h-screen bg-LightGrayishCyan1">
      <div className="flex flex-col m-auto">
        <div className="m-auto -mt-10">
          <img src={logo} className="" alt="logo" />
        </div>
        <div
          style={{ width: "64vw", height: "50vh" }}
          className="flex m-auto mt-10 bg-White rounded-3xl"
        >
          <div className="w-1/2 h-full p-7">
            <div className="flex flex-col w-full h-full"></div>
          </div>
          <div className="w-1/2 h-full p-7">
            <div className="flex flex-col w-full h-full bg-VeryDarkCyan rounded-3xl p-10">
              <div className="flex flex-col w-full h-full">
                <div></div>
                <div></div>
                <button className="mb-0 mt-auto w-full py-3 bg-StrongCyan text-lg font-extrabold rounded-lg">
                  RESET
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
