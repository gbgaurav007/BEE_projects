import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Projects from './Projects';
import Other from './Other';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
      <Projects/>
      <Other/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
