import React, { useState } from 'react'
import { FormEvent } from 'react'
import { addNewNoteMethod, handleChange, HandleSubmit } from '../../types/FunctionTypes'
import { checkURLFormatIsValid } from '../../utilities'
import Modal from '@bdenzer/react-modal';
import { FormButtonContainer, FormTextFieldsContainer, NewNoteFormWrapper } from '../../app.styles';

type Props = {
    addNewNote: addNewNoteMethod,
    exitMethod: () => void
}


export const NewNoteForm: React.FC<Props> = ({ addNewNote, exitMethod }) => {

    const [newTitle, setTitle] = useState("");
    const [newUrl, setUrl] = useState("");
    const [issueText, setIssueText] = useState<string>("");
    const [showModal, setShowModal] = useState(false);


    const handleTitleChange: handleChange = e => {
        setTitle(e.target.value);
    }
    const handleUrlChange: handleChange = e => {
        setUrl(e.target.value);
    }
    const closeModal = () => {
        setShowModal(false);
        setIssueText("");
    }
    const handleSubmit: HandleSubmit = e => {
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
            title: newTitle,
            url: newUrl,
            note: ""
        })
    }
    const handleClear: HandleSubmit = e => {
        e.preventDefault();

        setTitle("");
        setUrl("");
    }
    return (
        <NewNoteFormWrapper>
            <Modal
                shouldShowModal={showModal}
                closeModal={closeModal}
                title={"Invalid Input"}
            >{issueText}</Modal>
            <FormTextFieldsContainer>
                <div>
                    <input className="textField" type="text" value={newTitle} onChange={handleTitleChange} placeholder="Type Title Here" />
                </div>
                <div>
                    <input className="textField" type="text" value={newUrl} onChange={handleUrlChange} placeholder="Insert URL Here" />
                </div>
            </FormTextFieldsContainer>

            <FormButtonContainer>
                <button type="submit" onClick={handleSubmit} className="submitButton">Save</button>
                <button onClick={exitMethod} className="exitButton">Exit</button>
                <div>
                    <button type="submit" onClick={handleClear} className="clearButton">Clear</button>
                </div>
            </FormButtonContainer>
            
        </NewNoteFormWrapper>
    )
}