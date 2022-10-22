import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";

import { IndexApp } from './IndexApp';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <IndexApp/>
    </BrowserRouter>
  )
}
