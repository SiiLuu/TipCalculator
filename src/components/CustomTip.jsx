import React from "react";

import Input from "./Input";

const CustomTip = ({ show, setShow, selected, setSelected }) => {
  return (
    <div
      onClick={() => setShow(true)}
      className="cursor-pointer flex text-xl font-extrabold rounded-lg
      bg-LightGrayishCyan2 text-DarkGrayishCyan1"
    >
      {!show && <span className="m-auto">Custom</span>}
      {show && (
        <Input value={selected} onChange={(e) => setSelected(e.target.value)} />
      )}
    </div>
  );
};

export default CustomTip;
