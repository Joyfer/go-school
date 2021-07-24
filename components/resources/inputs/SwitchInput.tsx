import React from "react";

interface Props {}

const SwitchInput = (props: Props) => {
  return (
    <div>
      <div className="flex items-center justify-center w-full mb-12">
        <label htmlFor="toogleA" className="flex items-center cursor-pointer">
          <div className="relative">
            <input id="toogleA" type="checkbox" className="sr-only" />
            <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
            <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default SwitchInput;
