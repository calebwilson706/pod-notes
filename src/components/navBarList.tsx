import React from 'react';
import { ChangeSelection } from '../types/FunctionTypes';
import { Note } from '../types/PodNote';
import { NavBarSelectionButton } from './navBarSelectNoteButton';

type Props = {
    noteList: Note[]
    changeSelection: ChangeSelection
    currentSelected: number
}

export const NavBarList: React.FC<Props> = ({ noteList, changeSelection, currentSelected }) => {
    return (
        <>
            {
                noteList.map((note, index) => (
                    <NavBarSelectionButton
                        noteItem={note}
                        changeSelection={changeSelection}
                        index={index}
                        currentSelected={currentSelected}
                        key={index}
                    />
                ))
            }
        </>
    )
}