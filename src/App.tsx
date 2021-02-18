import React, { useState } from 'react';
import { NavBarList } from './components/navBarList';
import { NavBarSelectionButton } from './components/navBarSelectNoteButton';
import { NoteInfoPage } from './components/selectedItemShown';
import { NewNoteForm } from './newPodNoteFormComponents/newNoteForm';
import { OpenFormButton } from './newPodNoteFormComponents/openFormButton';
import { addNewNoteMethod, ChangeSelection, UpdateNoteText, UpdateTextArea } from './types/FunctionTypes';
import { Note } from './types/PodNote'

function App() {

  const [isFormShowing, setIsFormShowing] = useState(false);
  const [notesList, setNotesList] = useState<Note[]>([
    {
      title : "placeholder",
      url : "blank",
      note : ""
    }
  ])
  const [selectedNoteNumber, setSelectedNoteNumber] = useState(0);
  const [textAreaValue, setTextAreaValue] = useState(notesList[0].note);

  const toggleShowForm = () => {
    setIsFormShowing(!isFormShowing)
  }
  const addNewNoteToState: addNewNoteMethod = newNote => {
    const newList = [
      ...notesList,
      newNote
    ]
    setNotesList(newList)
    console.log(newList)
    toggleShowForm()
  }

  const changeSelection: ChangeSelection = index => {
    setSelectedNoteNumber(index)
    setTextAreaValue(notesList[index].note)
  }

  const updateTextArea : UpdateTextArea = newString => {
    setTextAreaValue(newString);
  }

  const updateTheNote : UpdateNoteText = newNoteText => {
    const theCurrentitem = notesList[selectedNoteNumber]
    const temp = {
      title : theCurrentitem.title,
      url : theCurrentitem.url,
      note : newNoteText
    }

    const newNotesList = notesList.map((note, index) => {
      if (index === selectedNoteNumber){
        return temp
      } else {
        return note
      }
    })

    setNotesList(newNotesList);
  }

  
  return (
    <div>
      {
        isFormShowing ? <NewNoteForm addNewNote={addNewNoteToState} /> :

          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6  col-sm-12">
                <ul>
                  <NavBarList
                    noteList={notesList}
                    changeSelection={changeSelection}
                    currentSelected={selectedNoteNumber}
                  />
                  <OpenFormButton callback={toggleShowForm} />
                </ul>
              </div>

              <div className="col-lg-6 col-md-6  col-sm-12">

                {
                  (notesList !== []) ? 
                  <NoteInfoPage 
                    theNote = {(notesList[selectedNoteNumber])}
                    updateTheNoteText = {updateTheNote}
                    updateTextAreaValue = {updateTextArea}
                    textAreaValue = {textAreaValue}
                  /> : <p>Create A Note...</p>
                }
              </div>
            </div>
          </div>
      }
    </div>
  );
}

export default App;
