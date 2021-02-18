import React, { ChangeEvent, useState } from 'react';
import { FormEvent } from 'react';
import { handleChange, UpdateNoteText, UpdateTextArea } from '../types/FunctionTypes';
import { Note } from '../types/PodNote';


type Props = {
    theNote : Note
    updateTheNoteText: UpdateNoteText
    textAreaValue: string
    updateTextAreaValue: UpdateTextArea
}


export const NoteInfoPage: React.FC<Props> = ({ theNote, updateTheNoteText, textAreaValue, updateTextAreaValue }) => {

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        updateTextAreaValue(event.target.value)
    }
    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        updateTheNoteText(textAreaValue)
    }
    return (
        <div>
            <h1>{theNote?.title}</h1>
            <p>{theNote?.url}</p>

            <form>
                <textarea value={textAreaValue} onChange={handleChange}></textarea>
            </form>
            <form>
                <button type="submit" onClick={handleSubmit} disabled = {theNote.note === textAreaValue}>Save</button>
            </form>

        </div>
    )
}