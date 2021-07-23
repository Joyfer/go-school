import React, { ReactElement, useState } from "react";
import SideBar from "./SideBar";
import FabMenubutton from "./FabMenubutton";

interface Props {}

export default function SideBarAndButton({}: Props): ReactElement {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <SideBar active={isActive}></SideBar>
      <FabMenubutton action={handleActive}></FabMenubutton>
    </div>
  );
}
