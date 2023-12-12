
import Navbar from "./F_Website/Navbar";
import Fother from "./F_Website/Fother"
import { Outlet } from "react-router-dom";

import React from 'react'

function Layout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Fother/>
    </div>
  )
}

export default Layout;