import React from 'react';
import { ChangeSelection } from '../types/FunctionTypes';
import { Note } from '../types/PodNote';

type Props = {
    noteItem : Note
    changeSelection : ChangeSelection
    index : number
    currentSelected : number
}

export const NavBarSelectionButton : React.FC<Props> = ({ noteItem, changeSelection, index, currentSelected}) => {
    return (
        <li>
            <button onClick = {
                () => changeSelection(index)
            } disabled = { currentSelected === index }>
                <>
                    <p>{noteItem.title}</p>
                    <p>{noteItem.url}</p>
                </>
            </button>
        </li>
    )
}