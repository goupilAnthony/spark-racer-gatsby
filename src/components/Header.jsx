import React from "react"
import Logo from './Logo'
import { Link } from "gatsby"
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'


const Header = () => {

    const handleClick = (e) => {
        document.querySelector('#mobile-nav').classList.toggle("h-screen")
    }

    return (
        <>
            <div className="flex flex-row bg-black">
                    <div className="w-20 m-2 sm:w-40">
                            <Link to="/">
                                <Logo />
                            </Link>
                    </div>
                    <div className="lg:flex text-white w-auto hidden ml-auto mr-3 ">
                            <div className="flex gap-3 mr-12"> 
                                    <div className="hover:text-yellow-400 cursor-pointer my-auto">
                                        eusfhsiouazdazd edzz
                                    </div>
                                    <div className="hover:text-yellow-400 cursor-pointer my-auto">
                                        eusfhsiouazdazd edzz
                                    </div>
                                    <div className="hover:text-yellow-400 cursor-pointer my-auto">
                                        eusfhsiouazdazd edzz
                                    </div>
                                    <div className="hover:text-yellow-400 cursor-pointer my-auto">
                                        eusfhsiouazdazd edzz
                                    </div>
                                    <div className="hover:text-yellow-400 cursor-pointer my-auto">
                                        eusfhsiouazdazd edzz
                                    </div>
                                    <div className="hover:text-yellow-400 cursor-pointer my-auto">
                                        eusfhsiouazdazd edzz
                                    </div>
                            </div>
                            <div className="flex gap-3 text-white">
                                <div className="hover:text-yellow-400 cursor-pointer my-auto">
                                <AccountCircle />
                                </div>
                                
                            </div>  
                    </div>
                    <div className="w-12 h-12 ml-auto mr-1 my-auto hover:bg-opacity-25 hover:bg-white rounded-full lg:hidden">
                            <IconButton onClick={handleClick} className="">
                                <MenuIcon className="text-white "/>
                            </IconButton>
                    </div>
            </div>
            <div className="flex flex-col bg-black bg-opacity-90 text-white z-10 lg:hidden transition-height duration-500 ease-out h-0" id="mobile-nav">
                    <Link to="/" className="p-3 hover:bg-white hover:bg-opacity-25 block w-auto">zefzefq</Link>
                    <Link to="/" className="p-3 hover:bg-white hover:bg-opacity-25 block w-auto">zefzefq</Link>
                    <Link to="/" className="p-3 hover:bg-white hover:bg-opacity-25 block w-auto">zefzefq</Link>
                    <Link to="/" className="p-3 hover:bg-white hover:bg-opacity-25 block w-auto">zefzefq</Link>
            </div>
        </>
    )
}

export default Header