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
      <Header></Header>
      <main>
        <BrowserRouter>
          <Router></Router>
        </BrowserRouter>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App
