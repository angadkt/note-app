import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { contextPage } from '../context/NoteContext'
import { useNavigate } from 'react-router-dom'

const CreateNote = () => {
    const [title , setTitle] = useState("")
    const [content , setContent] = useState("")
    const [color, setColor] = useState("")
    const { note , setNote} = useContext(contextPage)
    const navigate = useNavigate()

    const handleSave = () => {
        const newNote = {
            id: Date.now(),
            title,
            content,
            color,
        }
        setNote([...note, newNote])
        setTitle("")
        setContent("")
        setColor("")
        navigate('/')
    }

  return (
    <div className='create-maindiv'>
        <div className='inner-create'>
            <div>
                <label >Title</label>
                <input 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                type="text" placeholder='enter the title'/>
            </div>
            <div>
                <label >Note</label>
                <textarea
                onChange={(e=>setContent(e.target.value))}
                value={content}
                  placeholder='enter the text'/>
            </div>
            <div>
                <label >Color</label>
                <input 
                onChange={(e)=>setColor(e.target.value)}
                value={color}
                type="color" />
            </div>
            <div>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    </div>
  )
}

export default CreateNote
