import React from "react";

const Input = ({ onChange, value }) => {
  return (
    <input
      onChange={onChange}
      value={value ? value : ""}
      className="w-full bg-LightGrayishCyan2 text-xl font-extrabold
        rounded-lg px-4 py-1 text-right text-VeryDarkCyan transition-all
        duration-150 ease-linear outline-none focus:ring-2 ring-VeryDarkCyan"
    />
  );
};

export default Input;
