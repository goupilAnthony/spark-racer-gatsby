import React from 'react'
import AccountCircle from '@material-ui/icons/AccountCircle'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import IconButton from '@material-ui/core/IconButton'
import NavbarDeskDropdown from './NavbarDeskDropdown'



const NavbarDesk = () => {
    return (
        <div className="lg:flex text-white w-auto hidden ml-auto mr-3">
                <div className="flex gap-3 mr-12"> 
                    <NavbarDeskDropdown />
                    <NavbarDeskDropdown />
                    <NavbarDeskDropdown />
                    <NavbarDeskDropdown />
                        
                </div>
                <div className="flex gap-1 text-white">
                    <div className="cursor-pointer my-auto text-2xl hover:bg-opacity-25 hover:bg-white text-white rounded-full">
                        <IconButton>
                            <AccountCircle fontSize="inherit" className="text-yellow-400"/>
                        </IconButton>
                    </div>
                    <div className="cursor-pointer my-auto text-2xl hover:bg-opacity-25 hover:bg-white rounded-full">
                        <IconButton className="snipcart-checkout">
                            <ShoppingCartIcon fontSize="inherit" className="text-yellow-400"/>
                        </IconButton>
                    </div>
                </div>  
        </div>
    )
}

export default NavbarDesk