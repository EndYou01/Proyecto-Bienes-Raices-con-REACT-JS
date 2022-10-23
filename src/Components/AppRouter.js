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
import { BlogApp } from '../pages/BlogApp';
import { AnuncioApp } from '../pages/AnuncioApp';
import { ContactoApp } from '../pages/ContactoApp';
import { EntradaApp } from '../pages/EntradaApp';


export const AppRouter = () => {
  return (
    <BrowserRouter>
        <NavBar/>
        <div className='container'>
            <Routes>
                <Route exact path='/index.html' element={<IndexApp/>} />
                <Route exact path='/nosotros.html' element={<Nosotros/>} />
                <Route exact path='/anuncios.html' element={<AnunciosApp/>} />
                <Route exact path='/blog.html' element={<BlogApp/>} />
                <Route exact path='/anuncio.html' element={<AnuncioApp/>} />
                <Route exact path='/contacto.html' element={<ContactoApp/>} />
                <Route exact path='/entrada.html' element={<EntradaApp/>} />
            </Routes>
        </div>
    </BrowserRouter>
  )
}
