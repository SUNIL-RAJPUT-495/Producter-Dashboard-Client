import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from '../src/routes/AppRoutes';

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
