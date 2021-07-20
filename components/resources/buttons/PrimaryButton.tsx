import React, { ReactElement } from "react";
import Icon from "@mdi/react";

interface Props {
  color?: string;
  text?: boolean;
  contained?: boolean;
  className?: string;
  children: any;
  icon?: ReactElement;
}

export default function PrimaryButton({
  color = "primary",
  contained = true,
  text = false,
  className,
  children,
  icon,
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
  const textButton: string[] = [
    `hover:bg-${color}-light`,
    `text-${color}`,
    `hover:bg-opacity-10`,
  ];

  const giveClasses = (): string | void => {
    if (text) {
      return textButton.join(" ");
    } else if (contained) {
      return containedButton.join(" ");
    }
  };

  return (
    <button
      className={`px-3 py-1 rounded-full focus:outline-none focus:none active:none transition duration-300 ease-in-out uppercase font-bold flex justify-center ${giveClasses()} ${className}`}
    >
      {children}{icon != undefined ? icon : ''}
    </button>
  );
}
