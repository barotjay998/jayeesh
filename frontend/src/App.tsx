import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import { Landing } from './screens/Landing';
import { Game } from './screens/Game';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen bg-neutral-800'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/game" element={<Game />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
