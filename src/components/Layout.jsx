import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.css'

const Layout = ({ children }) => {

    useEffect(() => {
        const netlifyIdentity = require('netlify-identity-widget');
 
        netlifyIdentity.init({
            container: '#netlify-modal',
            locale: 'fr', // defaults to 'en'
        });
    }, [])

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <a className="absolute -top-10 focus:top-0" href="#maincontent">Skip to main</a>
            <main id="maincontent" className="flex-grow flex">
            <div data-netlify-identity-menu id="netlify-modal"></div>

                {children}
            </main>
            <Footer />

        </div>
    )
}

export default Layout