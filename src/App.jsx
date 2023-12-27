import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h1 className='text-3xl font-bold text-cyan-400'>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
