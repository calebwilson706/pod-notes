import React from 'react';
import { NavigationUnorderdList } from '../app.styles';
import { ChangeSelection } from '../types/FunctionTypes';
import { Note } from '../types/PodNote';
import { NavBarSelectionButton } from './navBarSelectNoteButton';
import { OpenFormButton } from './newPodNoteFormComponents/openFormButton';

type Props = {
    noteList: Note[]
    changeSelection: ChangeSelection
    currentSelected: number
    toggleShowForm: () => void
}

export const NavBarList: React.FC<Props> = ({ noteList, changeSelection, currentSelected, toggleShowForm }) => {
    return (
        <NavigationUnorderdList>
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
            <OpenFormButton callback={toggleShowForm} />
        </NavigationUnorderdList>
    )
}