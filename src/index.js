import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
// import Contact from './components/contact';
import Home from './F_Website/Home';
// import Checkout from './components/Checkout';
import First_page from './F_Website/First_page';
// import About from './components_vinu/about'
// import reportWebVitals from './reportWebVitals';
// import  '../src/Web.css'
// import '../src/index_vinu.css';


const router =createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>

  {/* <Route path='' element={<First_page/>} /> xx */}
  <Route path='Home' element={<Home/>} /> 
      {/* <Route path='contact' element={<Contact/>} />  */}
      {/* <Route path='About' element={<About/>} />  */}
    

    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
    {/* <Home/> */}
  </React.StrictMode>
);


