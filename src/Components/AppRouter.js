import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";
import { AnunciosApp } from '../pages/AnunciosApp';
import { IndexApp } from '../pages/IndexApp';
import { NavBar } from './NavBar';
import { Nosotros } from '../pages/Nosotros';


export const AppRouter = () => {
  return (
    <BrowserRouter>
        <NavBar/>
        <div className='container'>
            <Routes>
                <Route exact path='/index.html' element={<IndexApp/>} />
                <Route exact path='/nosotros.html' element={<Nosotros/>} />
                <Route exact path='/anuncios.html' element={<AnunciosApp/>} />
            </Routes>
        </div>
    </BrowserRouter>
  )
}
