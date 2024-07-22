import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './F_Website/Home'
import Contact from './components/page/contact';
import About from './sections/portion/About';



const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<Layout />}>

      <Route path='/' element={<Home />} />
      <Route path='Home' element={<Home />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='About' element={<About />} />


    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
