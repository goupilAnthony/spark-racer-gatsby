import React from "react"
import Logo from './Logo'
import { Link } from "gatsby"
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import NavbarDesk from './NavbarDesk'

const Header = () => {

    const handleClick = (e) => {
        document.querySelector('#mobile-nav').classList.toggle("hidden");
        document.querySelector('#mobile-nav').classList.toggle("h-screen");
    }

    return (
        <>
            <div className="flex flex-row bg-black">
                    <div className="w-20 ml-2 my-3 sm:w-50">
                            <Link to="/">
                                <Logo />
                            </Link>
                    </div>
                    <NavbarDesk />
                    <div className="w-12 h-12 ml-auto mr-1 my-auto hover:bg-opacity-25 hover:bg-white rounded-full lg:hidden">
                            <IconButton onClick={handleClick} className="">
                                <MenuIcon className="text-white "/>
                            </IconButton>
                    </div>
            </div>
            <div className="flex flex-col bg-black bg-opacity-90 text-white z-10 lg:hidden hidden transition-height duration-500 ease-out h-0" id="mobile-nav">
                    <Link to="/" className="p-3 hover:bg-white hover:bg-opacity-25 w-auto">zefzefq</Link>
                    <Link to="/" className="p-3 hover:bg-white hover:bg-opacity-25 w-auto">zefzefq</Link>
                    <Link to="/" className="p-3 hover:bg-white hover:bg-opacity-25 w-auto">zefzefq</Link>
                    <Link to="/" className="p-3 hover:bg-white hover:bg-opacity-25 w-auto">zefzefq</Link>
            </div>
        </>
    )
}

export default Header