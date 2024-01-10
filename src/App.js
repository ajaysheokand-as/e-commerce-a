// import { useEffect, useState } from 'react';
import Home from './components/Home';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            {/* <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/call' element={<Checkout/>}/>
            </Routes>
        </Router> */}
            <Home />
        </>
    );
}

export default App;