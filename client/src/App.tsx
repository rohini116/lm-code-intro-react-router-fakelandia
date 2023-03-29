import { format } from 'path';
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Router from './Components/Router';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <main>
          <Router></Router>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App
