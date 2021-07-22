import React, { ReactElement } from "react";

interface Props {
  children?: any;
}

function CardLayout({ children }: Props): ReactElement {
  return (
    <div className="bg-white shadow p-6 rounded-xl text-left">

      <div>
      {children}
      </div>
    </div>
  );
}

export default CardLayout;
