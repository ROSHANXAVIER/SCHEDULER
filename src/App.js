
import './App.css';
import Navbars from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import React from 'react';
import Create from './components/Create';
import Scehdules from './components/Scehdules';
import Update from './components/Update';
import Cemail from './components/Cemail';
import Emailit from './components/Emailit';
import Login from './components/Login';
import {useState} from 'react';
import Register from './components/Register';
function App() {
  const [showNav, setShowNav] = useState(true);
  return (
   <BrowserRouter>
         {   showNav &&
          <nav>
            <Navbars />
          </nav>
   } 
          <Routes>
            <Route path='/' exact element={<Login funcNav={setShowNav}/>}/>
            <Route path='/register' exact element={<Register funcNav={setShowNav}/>}/>
            <Route  path='/home' exact element={<Home/>}/>
            <Route path='/create' exact element={<Create/>}/>
            <Route path='/schedules' exact element={<Scehdules/>}/>
            <Route path='/update/:id' exact element={<Update/>}/>
            <Route path='/emailit/:id' exact element={<Emailit/>}/>
            <Route path='/customemail' exact element={<Cemail/>}/>
          </Routes> 
    </BrowserRouter>
  );
}

export default App;
