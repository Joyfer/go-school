import React, { ReactElement, useEffect, useState } from "react";
import FabButton from "../../resources/buttons/FabButton";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";

interface Props {
  action: () => void;
}

function FabMenubutton({ action }: Props): ReactElement {
  const [scroll, setScroll] = useState(0);
  const [maxScroll, setMaxScroll] = useState(600);

  const handleScroll = () => {
    setScroll(window.pageYOffset);
    setMaxScroll(
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div onClick={() => action()}>
      <FabButton
        className={
          "fixed bottom-4 right-4" +
          " " +
          `${scroll === maxScroll ? "transform translate-y-20" : ""}`
        }
      >
        <Icon color="white" path={mdiMenu}></Icon>
      </FabButton>
    </div>
  );
}

export default FabMenubutton;
