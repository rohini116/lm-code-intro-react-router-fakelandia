import { format } from 'path';
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Router from './Components/Router';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
      
    </div>
  )
}

export default App
