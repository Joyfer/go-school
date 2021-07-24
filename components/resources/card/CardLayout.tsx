import React, { ReactElement } from "react";

interface Props {
  children?: any;
  className?: string;
}

function Card({ children, className }: Props): ReactElement {
  return (
    <div className={"bg-white shadow p-6 rounded-xl text-left" + " " + className}>
      <div>{children}</div>
    </div>
  );
}

export default Card;
