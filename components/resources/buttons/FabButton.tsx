import React, { ReactElement } from "react";

interface Props {
  children: ReactElement;
  className?: string;
}

export default function FabButton({
  children,
  className,
}: Props): ReactElement {
  return (
    <button
      className={"w-16 h-16 transition duration-300 ease-in-out p-2 shadow-xl flex items-center justify-center text-center bg-success hover:bg-success-light rounded-full"
       + " " +  `${className}`}
    >
      {children}
    </button>
  );
}
