import React from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className='main-home'>
      <div className='inner-home'>
        <h1>Note - App</h1>
        <h2>Welcome to Note App</h2>
        <p>Create, edit, and delete notes with ease.</p>
        <div className='btn-parent'>
        <button onClick={()=>navigate('/create')} className='create-btn'>Create Note</button>
        <button onClick={()=>navigate('/view')} className='create-btn'>View Note</button>
        </div>
      </div>
    </div>
  )
}

export default Home
