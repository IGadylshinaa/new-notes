import React, { useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import MainBox from './comp/MainBox';
import RightMenu from './comp/RightMenu';
import Footer from './comp/Footer';

function App() {
  const [notes,setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const createNote = () => {
    const createNote = {
      id: uuidv4(),
      title: "Без названия",
      body: '',
      lastEdit: Date.now(),
    };

    setNotes([createNote,...notes]);
    setActiveNote([createNote.id]);
  };

  const updateNotes = (updatedNotes) => {
    const updateNotesArr = notes.map((note) => {

      if (note.id === activeNote) {
        return updatedNotes;
      }
      return note;
    });

    setNotes(updateNotesArr);
  };

  const deleteNote = (iddelete) => {
    setNotes(notes.filter(({id}) => id !== iddelete));
  };

  const getActiveNote = () => {
    return notes.find(({id}) => id === activeNote);
  };

    return (
      <div className="App">
        <div className="Block">
          <MainBox 
          activeNote={getActiveNote()}
          updateNotes={updateNotes}
          />
          <RightMenu 
          notes={notes} 
          createNote={createNote} 
          deleteNote={deleteNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
          />
          </div>
          <Footer />
      </div>
  );
 }

export default App;
