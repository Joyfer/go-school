import React from "react";

interface Props {
  children?: any;
}

const CardText = ({ children }: Props) => {
  return <div className="text-gray-700">{children}</div>;
};

export default CardText;