import React from 'react'
import { NewNoteButton } from '../../app.styles'

type Props = {
    callback : () => void
}

export const OpenFormButton : React.FC<Props> = ({ callback }) => {
    return (
        <li style={{  paddingTop: '3px'  }}>
            <NewNoteButton onClick = {
                () => callback()
            }>
                New Note
            </NewNoteButton>
        </li>
    )
}