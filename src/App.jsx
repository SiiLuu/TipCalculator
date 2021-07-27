import React, { useState, useEffect } from "react";

import logo from "./images/logo.svg";
import CustomTip from "./components/CustomTip";
import Input from "./components/Input";

function App() {
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);
  const [bill, setBill] = useState(null);
  const [personNb, setPersonNb] = useState(1);
  const [tipAmount, setTipAmount] = useState(parseFloat(0).toFixed(2));
  const [total, setTotal] = useState(parseFloat(0).toFixed(2));

  useEffect(() => {
    if (personNb && selected && bill) {
      const amountTip = (bill * selected) / 100;
      setTipAmount(parseFloat(amountTip / personNb).toFixed(2));
      setTotal(parseFloat((bill - amountTip) / personNb).toFixed(2));
    }
  }, [personNb, selected, bill]);

  return (
    <div className="flex flex-col w-full h-screen bg-LightGrayishCyan1 overflow-hidden">
      <div className="flex flex-col w-full h-full lg:m-auto">
        <div className=" m-auto mt-10 lg:-mt-10">
          <img src={logo} className="" alt="logo" />
        </div>
        <div className="flex flex-col lg:flex-row w-full lg:w-big h-full lg:h-big m-auto mt-10 bg-White rounded-t-3xl lg:rounded-3xl">
          <div className="w-full lg:w-1/2 h-3/6 lg:h-full px-7 py-4 lg:p-7">
            <div className="flex flex-col w-full h-full">
              <div className="w-full lg:m-auto">
                <p className="font-extrabold text-DarkGrayishCyan1 mb-1 lg:mb-3">
                  Bill
                </p>
                <Input value={bill} onChange={(e) => setBill(e.target.value)} />
              </div>

              <div className="w-full mt-3 lg:m-auto">
                <p className="font-extrabold text-DarkGrayishCyan1 mb-3">
                  Select Tip %
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 lg:grid-rows-3 gap-3">
                  <div
                    onClick={() => {
                      setShow(false);
                      setSelected(5);
                    }}
                    className={`cursor-pointer flex text-xl font-extrabold rounded-lg px-4 py-2
                      ${
                        selected === 5
                          ? "text-VeryDarkCyan bg-StrongCyan"
                          : "text-White bg-VeryDarkCyan"
                      } transition-all duration-300 ease-linear`}
                  >
                    <span className="m-auto">5%</span>
                  </div>
                  <div
                    onClick={() => {
                      setShow(false);
                      setSelected(10);
                    }}
                    className={`cursor-pointer flex text-xl font-extrabold rounded-lg px-4 py-2
                      ${
                        selected === 10
                          ? "text-VeryDarkCyan bg-StrongCyan"
                          : "text-White bg-VeryDarkCyan"
                      } transition-all duration-300 ease-linear`}
                  >
                    <span className="m-auto">10%</span>
                  </div>
                  <div
                    onClick={() => {
                      setShow(false);
                      setSelected(15);
                    }}
                    className={`cursor-pointer flex text-xl font-extrabold rounded-lg px-4 py-2
                      ${
                        selected === 15
                          ? "text-VeryDarkCyan bg-StrongCyan"
                          : "text-White bg-VeryDarkCyan"
                      } transition-all duration-300 ease-linear`}
                  >
                    <span className="m-auto">15%</span>
                  </div>
                  <div
                    onClick={() => {
                      setShow(false);
                      setSelected(25);
                    }}
                    className={`cursor-pointer flex text-xl font-extrabold rounded-lg px-4 py-2
                      ${
                        selected === 25
                          ? "text-VeryDarkCyan bg-StrongCyan"
                          : "text-White bg-VeryDarkCyan"
                      } transition-all duration-300 ease-linear`}
                  >
                    <span className="m-auto">25%</span>
                  </div>
                  <div
                    onClick={() => {
                      setShow(false);
                      setSelected(50);
                    }}
                    className={`cursor-pointer flex text-xl font-extrabold rounded-lg px-4 py-2
                      ${
                        selected === 50
                          ? "text-VeryDarkCyan bg-StrongCyan"
                          : "text-White bg-VeryDarkCyan"
                      } transition-all duration-300 ease-linear`}
                  >
                    <span className="m-auto">50%</span>
                  </div>
                  <CustomTip
                    show={show}
                    setShow={setShow}
                    selected={selected}
                    setSelected={setSelected}
                  />
                </div>
              </div>

              <div className="w-full mt-3 lg:m-auto">
                <p className="font-extrabold text-DarkGrayishCyan1 mb-3">
                  Number of People
                </p>
                <Input
                  value={personNb}
                  onChange={(e) => setPersonNb(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-2/6 lg:h-full px-7 py-4 lg:p-7">
            <div
              className="flex flex-col w-full h-full bg-VeryDarkCyan
              rounded-3xl p-5 lg:p-10"
            >
              <div className="flex flex-col w-full h-full text-White">
                <div className="flex">
                  <div>
                    <p>Tip Amount</p>
                    <p className="text-DarkGrayishCyan2">/ person</p>
                  </div>
                  <div className="flex mr-0 ml-auto">
                    <span
                      className="m-auto text-4xl font-extrabold
                      text-StrongCyan"
                    >
                      ${tipAmount}
                    </span>
                  </div>
                </div>
                <div className="flex mt-4 lg:mt-10">
                  <div>
                    <p>Total</p>
                    <p className="text-DarkGrayishCyan2">/ person</p>
                  </div>
                  <div className="flex mr-0 ml-auto">
                    <span
                      className="m-auto text-4xl font-extrabold
                      text-StrongCyan"
                    >
                      ${total}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setShow(false);
                    setBill(null);
                    setSelected(null);
                    setPersonNb(1);
                    setTipAmount(parseFloat(0).toFixed(2));
                    setTotal(parseFloat(0).toFixed(2));
                  }}
                  className={`mb-0 mt-auto w-full py-3 bg-StrongCyan
                  text-lg font-extrabold rounded-lg ${
                    bill && selected ? "opacity-100" : "opacity-30"
                  }`}
                  disabled={bill && selected ? false : true}
                >
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
