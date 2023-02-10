import React from 'react'
import {Routes, Route} from 'react-router-dom'
//import header from './components/Header';
//import footer from './components/Footer';
import Home from './pages/home';
import PropertyDetails from './pages/propertydetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/property:id' element={<PropertyDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
