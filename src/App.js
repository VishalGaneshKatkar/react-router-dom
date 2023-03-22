import React from 'react';
import { Routes,Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Homepage from './Homepage';
import Error from './Error';
import Nav from './Nav';

const App = () => {
  return (
    <>
      <Nav/>
      <Routes>
      
        <Route exact path='/' Component={Homepage}/>
        <Route exact path='/about' Component={About}/>
        <Route exact path='/contact' Component={Contact}/>
        <Route Component={Error}/>


      </Routes>
    </>
  )
}

export default App