import React from 'react'
import Sidebar from './Components/Sidebar'
import Note from './Components/Note'
import { NotesProvider } from './Components/Store'

const App = () => {
  return (
    <NotesProvider>
    <div className='flex p-5 gap-5'>
      <Sidebar></Sidebar>
      <Note></Note>
    </div>
    </NotesProvider>
  )
}

export default App
