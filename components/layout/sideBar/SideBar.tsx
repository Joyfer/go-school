import React, { ReactElement } from "react";

interface Props {
  active: boolean;
}

function SideBar({ active }: Props): ReactElement {
  const isActive = (): string => {
    if (active === true) {
      return "";
    } else {
      return "transform -translate-x-60";
    }
  };

  return (
    <div
      className={
        "h-full bg-white fixed left-0 top-0 shadow-2xl w-60 transition duration-300 ease-in-out" + " " + `${isActive()}`
      }
    >
      <p className="text-black">asdas</p>
    </div>
  );
}

export default SideBar;
