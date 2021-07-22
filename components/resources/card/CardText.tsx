import React from "react";

interface Props {
  children?: any;
}

const CardText = ({ children }: Props) => {
  return <p className="text-gray-700">{children}</p>;
};

export default CardText;