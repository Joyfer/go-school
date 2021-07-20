import React, { ReactElement } from "react";

interface Props {
  title?: string;
  children?: any;
  icon?: ReactElement;
}

function CardLayout({ title, children, icon }: Props): ReactElement {
  return (
    <div className="bg-white shadow p-4 rounded-xl text-left">
      <div className="mb-5 flex justify-between">
      {title ? <p className="text-black font-bold ">{title}</p> : ""}
      {icon ? icon : ""}
      </div>
      {children}
    </div>
  );
}

export default CardLayout;
