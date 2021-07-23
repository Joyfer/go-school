import React, { ReactElement, useEffect, useState } from "react";
import FabButton from "../../resources/buttons/FabButton";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";

interface Props {}

function FabMenubutton({}: Props): ReactElement {
  const [scroll, setScroll] = useState(0);
  const [maxScroll, setMaxScroll] = useState(600);

  const handleScroll = () => {
    setScroll(window.pageYOffset);
  };

  const changeMaxScroll = () => {
    setMaxScroll(
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", changeMaxScroll);
    setMaxScroll(
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight
    );

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.addEventListener("resize", changeMaxScroll);
    };
  }, []);
  return (
    <FabButton
      className={
        "fixed bottom-4 right-4" +
        " " +
        `${scroll === maxScroll ? "transform-gpu translate-y-20" : ""}`
      }
    >
      <Icon color="white" path={mdiMenu}></Icon>
    </FabButton>
  );
}

export default FabMenubutton;
