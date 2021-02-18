import React, { useState } from 'react'
import { FormEvent } from 'react'
import { addNewNoteMethod, handleChange } from '../types/FunctionTypes'

type Props = {
    addNewNote: addNewNoteMethod
}


export const NewNoteForm: React.FC<Props> = ({ addNewNote }) => {

    const [newTitle, setTitle] = useState("")
    const [newUrl, setUrl] = useState("")

    const handleTitleChange : handleChange = e => {
        setTitle(e.target.value);
    }
    const handleUrlChange : handleChange = e => {
        setUrl(e.target.value);
    }
    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        if ((newTitle === "") || (newUrl === "")) {
            return
        }
        
        addNewNote({
            title : newTitle,
            url : newUrl,
            note : ""
        })
    }
    return (
        <form>
            <input type = "text" value = {newTitle} onChange = {handleTitleChange} placeholder = "Type Title Here"/>
            <input type = "text" value = {newUrl} onChange = {handleUrlChange} placeholder = "Insert URL Here"/>
            <button type = "submit" onClick = {handleSubmit}>Save</button>
        </form>
    )
}