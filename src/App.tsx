import React, { useState } from 'react';
import { isTemplateExpression } from 'typescript';
import { GlobalStyle } from './app.styles';
import { NavBarList } from './components/navBarList';
import { NavBarSelectionButton } from './components/navBarSelectNoteButton';
import { NoteInfoPage } from './components/selectedItemShown';
import { NewNoteForm } from './newPodNoteFormComponents/newNoteForm';
import { OpenFormButton } from './newPodNoteFormComponents/openFormButton';
import { addNewNoteMethod, ChangeSelection, DeletePodnoteProcedure, UpdateNoteText, UpdateTextArea } from './types/FunctionTypes';
import { Note } from './types/PodNote'

function App() {

  const [isFormShowing, setIsFormShowing] = useState(false);
  const [notesList, setNotesList] = useState<Note[]>([
    {
      title: "Pod-Notes",
      url: "By Caleb",
      note: 'This app was created by Caleb Wilson for taking notes about things learned from a podcast, please enjoy! \n (This post cannot be deleted)'
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

  const updateTextArea: UpdateTextArea = newString => {
    setTextAreaValue(newString);
  }

  const deletePodNote : DeletePodnoteProcedure = i => {
    const current = notesList
    const newList = current
    newList.splice(i, 1)

    setSelectedNoteNumber(0);
    setNotesList(newList);
  }

  const updateTheNote: UpdateNoteText = newNoteText => {
    const theCurrentitem = notesList[selectedNoteNumber]
    const temp = {
      title: theCurrentitem.title,
      url: theCurrentitem.url,
      note: newNoteText
    }

    const newNotesList = notesList.map((note, index) => {
      if (index === selectedNoteNumber) {
        return temp
      } else {
        return note
      }
    })

    setNotesList(newNotesList);
  }


  return (
    <div>
      <GlobalStyle />
      {
        isFormShowing ? <NewNoteForm
          addNewNote={addNewNoteToState}
          exitMethod={toggleShowForm}
        /> :

          <div className="container">
            <div className="row">
              <div className="leftColumn">
                <ul>
                  <NavBarList
                    noteList={notesList}
                    changeSelection={changeSelection}
                    currentSelected={selectedNoteNumber}
                  />
                  <OpenFormButton callback={toggleShowForm} />
                </ul>
              </div>

              <div className="rightColumn">

                {
                  (notesList !== []) ?
                    <NoteInfoPage
                      theNote={(notesList[selectedNoteNumber])}
                      index={selectedNoteNumber}
                      updateTheNoteText={updateTheNote}
                      updateTextAreaValue={updateTextArea}
                      textAreaValue={textAreaValue}
                      deleteThePodnote={deletePodNote}
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
