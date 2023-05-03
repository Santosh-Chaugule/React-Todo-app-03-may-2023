
import React from 'react';
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from "./components/Note";
import Footer from './components/Footer';
import { useState } from 'react';


function App() {

  const [notes, setNotes] = useState([])

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    })
    console.log(notes)

  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id

      })
    })

  }
  return (
    <div className="App">
      <Header></Header>
      <CreateArea onAdd={addNote}></CreateArea>
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />

        )
      })}

      <Footer></Footer>

    </div>
  );
}

export default App;
