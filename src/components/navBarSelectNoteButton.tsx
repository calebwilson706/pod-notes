import React from 'react';
import { ChangeSelection } from '../types/FunctionTypes';
import { Note } from '../types/PodNote';
import { SelectItemButton } from '../app.styles';
type Props = {
    noteItem : Note
    changeSelection : ChangeSelection
    index : number
    currentSelected : number
}

export const NavBarSelectionButton : React.FC<Props> = ({ noteItem, changeSelection, index, currentSelected}) => {
    return (
        <SelectItemButton>
            <button onClick = {
                () => changeSelection(index)
            } disabled = { currentSelected === index }>
                <div className="navBarText">
                    <p className="navbarTitle">{noteItem.title}</p>
                    <p>{noteItem.url}</p>
                </div>
            </button>
        </SelectItemButton>
    )
}