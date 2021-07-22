import React, { ReactElement } from 'react'

interface Props {
    children?: any;
}

function CardActions({children}: Props): ReactElement {
    return (
        <div className="pt-5 flex justify-between items-center">
            {children}
        </div>
    )
}

export default CardActions
