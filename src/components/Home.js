import React from 'react'
import Contact from './pages/Contact'
import Checkout from '../components/pages/Checkout'
import Wishlist from './pages/Wishlist'

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
