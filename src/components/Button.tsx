import React from 'react'
import { Button as PrimeButton} from 'primereact/button';

interface Props {
    style: object,
    label: string,
    className: string
    onClick(): void
}



export const Button = (props: Props) => {
    return (
        <>
            <PrimeButton style={props.style} label={props.label} className={props.className} onClick={props.onClick} />
        </>
    )
}
