import React, { ReactElement } from "react";

interface Props {
  color?: string;
  text?: boolean;
  contained?: boolean;
}

export default function PrimaryButton({
  color = "primary",
  contained = true,
  text = false,
}: Props): ReactElement {
  //Contained button classes
  const containedButton: string[] = [
    `bg-${color}`,
    `hover:bg-${color}-light`,
    `text-white`,
    `shadow`,
    `hover:shadow-md`,
  ];

  // TextButton classes
  const textButton: string[] = [`hover:bg-${color}-light`, `text-${color}`, `hover:bg-opacity-10`];

  const giveClasses = (): string | void => {
    if (text) {
      return textButton.join(" ");
    } else if (contained) {
      return containedButton.join(" ");
    }
  };

  return (
    <button
      className={`px-2 py-1 rounded focus:outline-none focus:none active:none 
    transition duration-300 ease-in-out ${giveClasses()}`}
    >
      Hola
    </button>
  );
}
