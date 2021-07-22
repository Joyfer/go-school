import React, { ReactElement } from "react";

interface Props {
  children?: any;
  icon?: ReactElement;
  subtitle?: string;
}

export default function CardTitle({
  children,
  icon,
  subtitle,
}: Props): ReactElement {
  return (
    <div className="mb-3">
      <div className="flex justify-between">
        <p className="text-black font-bold text-xl">{children}</p>
        {icon ? icon : ""}
      </div>
      {subtitle ? <span className="text-accent font-bold">{subtitle}</span> : ""}
    </div>
  );
}
