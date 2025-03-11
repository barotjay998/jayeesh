import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import { Landing } from './screens/Landing';
import { Game } from './screens/Game';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/game" element={<Game />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
