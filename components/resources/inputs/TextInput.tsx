import React, { ReactElement } from 'react'

interface Props {
    placeholder: string;
    type?: string;
}

export default function TextInput({placeholder, type = 'text'}: Props): ReactElement {
    return (
        <div>
            <input placeholder={placeholder} type={type} className="bg-transparent border-white border-2 rounded-xl 
            text-white focus:border-white focus:ring-2 focus:ring-primary w-full placeholder-white 
            focus:ring-offset-2 focus:ring-offset-transparent  transition duration-300 ease-in-out" />
        </div>
    )
}
