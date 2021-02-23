import React, { useState } from 'react'
import { FormEvent } from 'react'
import { addNewNoteMethod, handleChange } from '../../types/FunctionTypes'
import { checkURLFormatIsValid } from '../../utilities'
import Modal from '@bdenzer/react-modal';

type Props = {
    addNewNote: addNewNoteMethod,
    exitMethod : () => void
}


export const NewNoteForm: React.FC<Props> = ({ addNewNote, exitMethod }) => {

    const [newTitle, setTitle] = useState("");
    const [newUrl, setUrl] = useState("");
    const [issueText, setIssueText] = useState<string>("");
    const [showModal, setShowModal] = useState(false);

    const handleTitleChange : handleChange = e => {
        setTitle(e.target.value);
    }
    const handleUrlChange : handleChange = e => {
        setUrl(e.target.value);
    }
    const closeModal = () => {
        setShowModal(false);
        setIssueText("");
    }
    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (newTitle === "") {
            setIssueText("The Podnote Must Have A Title")
            setShowModal(true)
            return
        }

        if (!checkURLFormatIsValid(newUrl)) {
            setIssueText("The URL Is Not In A Valid Format")
            setShowModal(true)
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
            <Modal
                shouldShowModal = {showModal}
                closeModal = {closeModal}
                title = {"Invalid Input"}
            >{issueText}</Modal>
            <div>
                <input type = "text" value = {newTitle} onChange = {handleTitleChange} placeholder = "Type Title Here"/>
                <input type = "text" value = {newUrl} onChange = {handleUrlChange} placeholder = "Insert URL Here"/>
            </div>
            <button type = "submit" onClick = {handleSubmit}>Save</button>
            <button onClick = {exitMethod} className = "exitButton">Exit</button>
        </form>
    )
}