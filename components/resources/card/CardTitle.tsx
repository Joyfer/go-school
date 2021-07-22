import React, { ReactElement } from 'react'

interface Props {
 children?: any;
 icon?: ReactElement;
}

export default function CardTitle({children, icon}: Props): ReactElement {
    return (
        <div className="mb-3 flex justify-between">
          <p className="text-black font-bold text-lg">{children}</p>
          {icon ? icon : ""}
        </div>
    )
}
