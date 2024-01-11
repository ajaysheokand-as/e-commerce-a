import React from 'react'

import Wishlist from './pages/Wishlist'
import Contact from './pages/Contact'
import Checkout from '../components/pages/Checkout'


function Home() {
    return (
        <>
            <header className="App-header">
                <Wishlist />
                <Contact />
                <Checkout />
            </header>
        </>
    )
}

export default Home
