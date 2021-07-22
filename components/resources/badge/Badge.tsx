import React, { Children, ReactElement } from 'react'

interface Props {
    color?: string;  
    children?: any;
}

function Badge({color= "primary", children}: Props): ReactElement {

    return (
        <div className={`bg-${color} text-white rounded-full text-center w-8 h-8 flex justify-center items-center`}>
           {children} 
        </div>
    )
}

export default Badge
