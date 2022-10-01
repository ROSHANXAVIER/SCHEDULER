
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import React from 'react';
import Create from './components/Create';
import Scehdules from './components/Scehdules';
import Update from './components/Update';

function App() {
  return (
   <BrowserRouter>
      <Navbar/>
          <Routes>
            <Route  path="/" exact element={<Home/>}/>
            <Route path='/create' exact element={<Create/>}/>
            <Route path='/schedules' exact element={<Scehdules/>}/>
            <Route path='/update/:id' exact element={<Update/>}/>
          </Routes> 
    </BrowserRouter>
  );
}

export default App;
