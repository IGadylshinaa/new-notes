import React from 'react';


function RightMenu({notes, createNote, deleteNote, activeNote, setActiveNote}) {

    const sorted = notes.sort((a, b) => b.lastEdit - a.lastEdit);
    
    return (
    <div className="rightMenu">
        <div className="rm-header">
            <div className="rm-header-title">Заметки</div>
            <div className="createBtn" onClick={createNote}></div>
        </div>
        <div className="rm-notes">
            {sorted.map(({ id, title, body, lastEdit }, i) => (
            <div className={`rm-note ${id === activeNote && "active"}`}
            onClick={() => setActiveNote(id)}>
                <div className="note-title">
                    <div className='note-title-text'>
                        <div className="title">{title && title.substr(0, 30) }</div>
                    </div>
                    <div className="deleteBtn" onClick={(e) => deleteNote(id)}></div>
                </div>
                <div className="preview">{body && body.substr(0, 100) + "..."}</div>
                <div className="editDate">Изменено: {""} 
                {new Date(lastEdit).toLocaleDateString("ru-RU", {
                    hour: "2-digit",
                    minute: "2-digit",
                })}
                </div>
            </div>
            ))}
        </div>
    </div>
  );
}

export default RightMenu;
