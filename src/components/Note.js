import React from 'react'

const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <div>
      <li>
        <div>
          {note.content}
        </div>
        <button onClick={toggleImportance}>{label}</button>
      </li>
      <br></br>
    </div>
  )
}

export default Note;