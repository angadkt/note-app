import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'


export const contextPage = createContext()
const NoteContext = ({children}) => {
    const [note, setNote] = useState([])

    const handleDelete = (id)=> {
        const filteredNote = note.filter((item)=> item.id !== id)
        setNote(filteredNote);
    }

    
 
  return (
    <contextPage.Provider value={{note, setNote , handleDelete}}>
      {children}
    </contextPage.Provider>
  )
}

export default NoteContext
