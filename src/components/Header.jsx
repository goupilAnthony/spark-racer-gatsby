import React from "react"
import Logo from './Logo'
import { Link } from "gatsby"
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import NavbarDesk from './NavbarDesk/NavbarDesk'
import NavbarMobile from './NavbarMobile/NavbarMobile'

let categories = require("../../categories.json")

const Header = () => {

    const handleClick = (e) => {
        document.querySelector('#mobile-nav').classList.toggle("hidden");
        document.querySelector('#mobile-nav').classList.toggle("h-screen");
    }
    

    return (
        <nav>
            <div className="flex flex-row bg-black">
                <div className="w-20 ml-2 my-3 sm:w-50">
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
                <NavbarDesk categories={categories} />
                <div className="w-12 h-12 ml-auto mr-1 my-auto hover:bg-opacity-25 hover:bg-white rounded-full lg:hidden">
                    <IconButton onClick={handleClick} aria-label="toggle-menu">
                        <MenuIcon className="text-white " />
                    </IconButton>
                </div>
            </div>
            <NavbarMobile categories={categories} />
        </nav>
    )
}

export default Header