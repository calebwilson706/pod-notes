import React, { ChangeEvent, useState } from 'react';
import { FormEvent } from 'react';
import { CurrentItemWrapperStyles, DeleteNoteButton, SaveAndDeleteContainer, SaveChangesButton, WrapperDivForButtonsAndTextA } from '../app.styles';
import { DeletePodnoteProcedure, handleChange, UpdateNoteText, UpdateTextArea } from '../types/FunctionTypes';
import { Note } from '../types/PodNote';
import TextareaAutosize from 'react-autosize-textarea';

type Props = {
    theNote: Note
    index: number
    updateTheNoteText: UpdateNoteText
    textAreaValue: string
    updateTextAreaValue: UpdateTextArea
    deleteThePodnote: DeletePodnoteProcedure
}


export const NoteInfoPage: React.FC<Props> = ({ theNote, index, updateTheNoteText, textAreaValue, updateTextAreaValue, deleteThePodnote }) => {

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        updateTextAreaValue(event.target.value)
    }
    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        updateTheNoteText(textAreaValue)
    }
    return (
        <CurrentItemWrapperStyles>
            <h1 className="titleOfPodnote" >{theNote.title}</h1>
            {
                (

                    (index == 0) ?
                        <div>
                            <p className="byCaleb">{theNote.url}</p>
                            <p className="introText">{theNote.note}</p>
                        </div> :
                        <>
                            <div>
                                <a className="linkToPodcast" href={theNote.url}>{theNote.url}</a>
                            </div>
                            <form>
                                <WrapperDivForButtonsAndTextA>
                                    <div className="textAreaContainer">
                                        <TextareaAutosize
                                            value={textAreaValue}
                                            onChange={handleChange}
                                            rows={10}
                                            className="textAreaStyles"
                                        ></TextareaAutosize>
                                    </div>
                                    <SaveAndDeleteContainer>
                                        <div>
                                            <SaveChangesButton
                                                type="submit"
                                                onClick={handleSubmit}
                                                disabled={theNote.note === textAreaValue}
                                            >Save</SaveChangesButton>
                                        </div>
                                        <div>
                                            <DeleteNoteButton onClick={
                                                () => deleteThePodnote(index)
                                            } className="exitButton">Delete Note</DeleteNoteButton>
                                        </div>
                                    </SaveAndDeleteContainer>
                                </WrapperDivForButtonsAndTextA>
                            </form>
                        </>

                )
            }

        </CurrentItemWrapperStyles>
    )
}