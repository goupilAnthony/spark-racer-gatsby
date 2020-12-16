import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <a className="absolute -top-10 focus:top-0" href="#maincontent">Skip to main</a>
            <main id="maincontent" className="flex-grow">
                {children}
            </main>
            <Footer />

        </div>
    )
}

export default Layout