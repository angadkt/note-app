import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { contextPage } from '../context/NoteContext'
import { useParams, useNavigate } from'react-router-dom'

const EditNote = () => {
    const {note, setNote} = useContext(contextPage);
    const {id} = useParams()
    const specificItem = note.find((item)=> item.id === parseInt(id))
    const [edTitle, setedTitle] = useState(specificItem.title)
    const [edContent, setedContent] = useState(specificItem.content)
    const [edColor, setedColor] = useState(specificItem.color)

    console.log('spec',specificItem)
    
    const navigate = useNavigate()

    const handleEdit = ()=>{

        const updatedNote = {
            id: specificItem.id,
            title: edTitle,
            content: edContent,
            color: edColor,
        }
        
        setNote([...note.filter((item)=> item.id!== specificItem.id), updatedNote])
        setedTitle('')
        setedContent('')
        setedColor('')
        navigate('/view')
    }
    
    

  return (
    <div>
      <div className='create-maindiv'>
        <div className='inner-create'>
            <div>
                <label >Title</label>
                <input 
                value={edTitle}
                onChange={(e)=>setedTitle(e.target.value)}
                type="text" placeholder='enter the title'/>
            </div>
            <div>
                <label >Note</label>
                <textarea
                onChange={(e=>setedContent(e.target.value))}
                value={edContent}
                  placeholder='enter the text'/>
            </div>
            <div>
                <label >Color</label>
                <input 
                onChange={(e)=>setedColor(e.target.value)}
                value={edColor}
                type="color" />
            </div>
            <div>
                <button onClick={handleEdit}>Save Changes</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default EditNote
