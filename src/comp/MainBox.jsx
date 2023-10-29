import React from 'react';

function MainBox({activeNote, updateNotes}) {
    const editNotes = (field, value) => {
        updateNotes({
            ...activeNote,
             [field]: value,
            lastEdit: Date.now(),
        });
    };

    if(!activeNote) return <div className="anactive-note"></div>;

  return (
    <div className="mainBox">
        <div className="note-edit">
            <input 
            type="text"
            id="title"
            placeholder="Введите заголовок"
            value={activeNote.title}
            onChange={(e) => editNotes("title", e.target.value)}
            autoFocus
            ></input>
            <textarea
                id="body"
                placeholder="введите текст заметки..."
                value={activeNote.body}
                onChange={(e) => editNotes("body", e.target.value)} />
        </div>
    </div>
  );
}

export default MainBox;
