import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginPageC from './LoginC/LoginPageC';
import LoginPageR from './LoginR/LoginPageR';
import MainPage3 from './MainC/MainPage';
import Sorpresa from './Sorpresa/MainPage';
import MainPage8 from './Pantalla8/Main';
import Pantalla6 from './Pantallas/Pantalla6';

import Page13 from './Pantalla13/MainPage'
import './Styles/Pantalla16.css';
import Pantalla16 from './Pantallas/Pantalla16';
import LoginPage8 from './Pantalla8/Login/Login8';
import MainPage4 from './Pantalla4/Main/Main4';
import Menu from './Pantallas/Menu';
import MainPage from './Pantalla10/MainPage';
import Pantalla7 from './Pantalla7/Pantallita'
import {BrowserRouter, Route, Routes} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPageC/>}/>
        <Route path='/pantalla3' element= {<div><Menu/><MainPage3/></div>}/>
        <Route path='/pantalla4' element= {<div><Menu/><MainPage4/></div>}/>
        <Route path='/pantalla6' element= {<div><Menu/><Pantalla6/></div>}/>
        <Route path='/pantalla7' element= {<div><Menu/><Pantalla7/></div>}/>
        <Route path='/pantalla8' element= {<div><Menu/><LoginPage8/></div>}/>
        <Route path='/main' element= {<div><Menu/><MainPage8/></div>}/>
        <Route path='/pantalla9' element= {<div><LoginPageR/></div>}/>
        <Route path='/pantalla10' element= {<div><Menu/><MainPage/></div>}/>
        <Route path='/pantalla13' element= {<div><Menu/><Page13/></div>}/>
        <Route path='/pantalla16' element= {<div><Menu/><Pantalla16/></div>}/>
        <Route path='/sorpresa' element= {<div><Menu/><Sorpresa/></div>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);




