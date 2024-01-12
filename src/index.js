import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import  '../src/Web.css'
// import '../src/index_vinu.css';



import { Route,RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './F_Website/Home'
// import Home from './Component/Home';
// import About from '../src/Component/About'
// import Contact from './Component/Contact';
// import User  from './Component/User';
// import Github from '../src/Component/Github'; 
import Contact from './components/page/contact';
import About from './sections/portion/About';

import main from './components/main'

const router =createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>

  <Route path='/' element={<Home/>} />
  <Route path='Home' element={<Home/>} /> 
  <Route path='Contact' element={<Contact/>} /> 
  <Route path='About' element={<About/>} /> 
      

    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <RouterProvider router={router}/>
    {/* <main/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
