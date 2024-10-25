import React from 'react'
import { useContext } from 'react'
import { contextPage } from '../context/NoteContext'
import { useNavigate } from 'react-router-dom'

const ViewNote = () => {
    const {note , handleDelete} = useContext(contextPage)
    // console.log(note);
    const navigate =  useNavigate()

    // const editHandle = () => {
        

    //     navigate('/editnote')
    // }
    
    
  return (
    <div className='view-mainclass'>
      <div className='inner-view'>
        {
            note.map((item)=>(
                <div className='card' style={{backgroundColor: `${item.color}`}} key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                    <button onClick={()=>navigate(`/editnote/${item.id}`)}  className='btn'>edit</button>&nbsp;
                    <button onClick={()=>handleDelete(item.id)} className='btn'>delete</button>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default ViewNote
