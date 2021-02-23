import React from 'react'

type Props = {
    callback : () => void
}

export const OpenFormButton : React.FC<Props> = ({ callback }) => {
    return (
        <button onClick = {
            () => callback()
        }>
            New Note
        </button>
    )
}